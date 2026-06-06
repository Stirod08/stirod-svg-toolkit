#!/usr/bin/env node

const command = process.argv[2];

switch (command) {
  case "init":
    await import("./init.js");
    break;

  case "build":
    await import("../core/sprite-generator.js");
    break;

  default:
    console.log(`
stirod-svg-toolkit

Usage:

  stirod-svg-toolkit init
  stirod-svg-toolkit build
`);
}
