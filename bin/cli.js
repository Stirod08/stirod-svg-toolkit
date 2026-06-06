#!/usr/bin/env node

const command = process.argv[2];

switch (command) {
  case "build":
    await import("../core/sprite-generator.js");
    break;

  default:
    console.log(`
stirod-svg-toolkit

Usage:

  stirod-svg-toolkit build
`);
}
