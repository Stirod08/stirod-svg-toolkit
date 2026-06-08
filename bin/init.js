import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ICONS_DIR = "./svg-icons";
const CONFIG_FILE = "./stirod.config.js";

if (!existsSync(ICONS_DIR)) {
  mkdirSync(ICONS_DIR, { recursive: true });

  writeFileSync(join(ICONS_DIR, ".gitkeep"), "");

  console.log("✅ Created icons/");
} else {
  console.log("ℹ️ icons/ already exists");
}

if (!existsSync(CONFIG_FILE)) {
  const template = readFileSync(
    new URL("../templates/stirod.config.js", import.meta.url),
    "utf8",
  );

  writeFileSync(CONFIG_FILE, template);

  console.log("✅ Created stirod.config.js");
} else {
  console.log("ℹ️ stirod.config.js already exists");
}
