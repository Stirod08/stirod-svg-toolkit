import { readFileSync } from "node:fs";
import { optimize } from "svgo";

const svg = readFileSync("./icons/astro.svg", "utf8");

const result = optimize(svg, {
  multipass: true,
});

console.log(result.data);
