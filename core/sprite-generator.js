import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";
import { optimize } from "svgo";
import { dirname } from "node:path";

const CONFIG_PATH = resolve(process.cwd(), "stirod.config.js");

const configModule = await import(pathToFileURL(CONFIG_PATH).href);

const config = configModule.default;

const ICONS_DIR = config.iconsDir;

const SPRITE_OUTPUT = config.output.sprite;
const GENERATED_DIR = config.output.generated;

// Crear dist si no existe
mkdirSync(dirname(SPRITE_OUTPUT), { recursive: true });

mkdirSync(GENERATED_DIR, {
  recursive: true,
});

// Obtener SVG ordenados
const files = readdirSync(ICONS_DIR)
  .filter((file) => file.endsWith(".svg"))
  .sort();

if (files.length === 0) {
  throw new Error("No se encontraron iconos SVG en /icons");
}

const metadata = {};
const iconNames = [];

const symbols = files.map((file) => {
  //const svg = readFileSync(join(ICONS_DIR, file), "utf8");
  const rawSvg = readFileSync(join(ICONS_DIR, file), "utf8");

  const optimizedSvg = optimize(rawSvg, {
    multipass: true,
  }).data;

  const id = basename(file, ".svg");

  const viewBoxMatch = optimizedSvg.match(/viewBox="([^"]+)"/);

  if (!viewBoxMatch) {
    throw new Error(`El icono "${file}" no tiene viewBox`);
  }

  const viewBox = viewBoxMatch[1];
  const fillMatch = optimizedSvg.match(/fill="([^"]+)"/);
  const strokeMatch = optimizedSvg.match(/stroke="([^"]+)"/);
  const strokeWidthMatch = optimizedSvg.match(/stroke-width="([^"]+)"/);
  const strokeLinecapMatch = optimizedSvg.match(/stroke-linecap="([^"]+)"/);
  const strokeLinejoinMatch = optimizedSvg.match(/stroke-linejoin="([^"]+)"/);

  metadata[id] = {
    viewBox,
    fill: fillMatch?.[1],
    stroke: strokeMatch?.[1],
    strokeWidth: strokeWidthMatch?.[1],
    strokeLinecap: strokeLinecapMatch?.[1],
    strokeLinejoin: strokeLinejoinMatch?.[1],
  };

  iconNames.push(id);

  const innerContent = optimizedSvg
    .replace(/<svg[^>]*>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(
      /<path\s+stroke="none"\s+d="M0 0h24v24H0z"\s+fill="none"\s*\/>/g,
      "",
    )
    .trim();

  const fill = fillMatch?.[1];
  const stroke = strokeMatch?.[1];
  const strokeLinecap = strokeLinecapMatch?.[1];
  const strokeLinejoin = strokeLinejoinMatch?.[1];

  const attrs = [
    `id="${id}"`,
    `viewBox="${viewBox}"`,
    fill ? `fill="${fill}"` : "",
    stroke ? `stroke="${stroke}"` : "",
    strokeLinecap ? `stroke-linecap="${strokeLinecap}"` : "",
    strokeLinejoin ? `stroke-linejoin="${strokeLinejoin}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `
  <symbol ${attrs}>
    ${innerContent}
  </symbol>`;
});

/* ----------------------------- sprite.svg ----------------------------- */

const sprite = `<svg xmlns="http://www.w3.org/2000/svg">
${symbols.join("\n")}
</svg>
`;

writeFileSync(SPRITE_OUTPUT, sprite);

/* ------------------------------ icons.ts ------------------------------ */

const iconsTs = `export const icons = [
${iconNames.map((name) => `  "${name}"`).join(",\n")}
] as const;

export type IconName = typeof icons[number];
`;

writeFileSync(join(GENERATED_DIR, "icons.ts"), iconsTs);

/* ----------------------------- icons.json ----------------------------- */

writeFileSync(
  join(GENERATED_DIR, "icons.json"),
  JSON.stringify(iconNames, null, 2),
);

/* --------------------------- metadata.json ---------------------------- */

writeFileSync(
  join(GENERATED_DIR, "metadata.json"),
  JSON.stringify(metadata, null, 2),
);

/* ------------------------------ index.ts ------------------------------ */

const indexTs = `export * from "./icons";
`;

writeFileSync(join(GENERATED_DIR, "index.ts"), indexTs);

/* --------------------------- preview.html --------------------------- */

const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Stirod Icons Preview</title>

<style>
body {
    font-family: sans-serif;
    padding: 2rem;
}

h1 {
    margin-bottom: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
}

svg {
    width: 48px;
    height: 48px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.name {
    margin-top: 1rem;
    font-size: 14px;
}
</style>

</head>

<body>

<h1>Stirod Icons</h1>

<div class="grid">

${iconNames
  .map(
    (name) => `
<div class="card">
    <svg>
        <use href="../../public/icons/sprite.svg#${name}">
    </svg>

    <div class="name">${name}</div>
</div>
`,
  )
  .join("")}

</div>

</body>
</html>
`;

writeFileSync(join(GENERATED_DIR, "preview.html"), previewHtml);

/* -------------------------------- Logs -------------------------------- */

console.log("");
console.log("🚀 Stirod Icons Build");
console.log("──────────────────────");
console.log(`✅ sprite.svg`);
console.log(`✅ icons.ts`);
console.log(`✅ icons.json`);
console.log(`✅ metadata.json`);
console.log(`✅ index.ts`);
console.log(`✅ preview.html`);
console.log(`📦 Total iconos: ${iconNames.length}`);
console.log("");
