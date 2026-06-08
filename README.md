# 🚀 Stirod SVG Toolkit

<p align="center">
  <strong>Framework-agnostic SVG toolkit for generating sprites, metadata and TypeScript types.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Stirod08/stirod-svg-toolkit" alt="License">
  <img src="https://img.shields.io/github/stars/Stirod08/stirod-svg-toolkit" alt="Stars">
  <img src="https://img.shields.io/github/issues/Stirod08/stirod-svg-toolkit" alt="Issues">
  <img src="https://img.shields.io/github/repo-size/Stirod08/stirod-svg-toolkit" alt="Repo Size">
  <img src="https://img.shields.io/badge/Framework-Agnostic-blue" alt="Framework Agnostic">
  <img src="https://img.shields.io/badge/CLI-Ready-success" alt="CLI Ready">
</p>

---

## ✨ Overview

**Stirod SVG Toolkit** is a framework-agnostic CLI that transforms a folder of SVG files into a complete icon toolkit.

From a single source of truth, it automatically generates:

- SVG Sprite
- TypeScript definitions
- JSON icon catalog
- Metadata
- Preview page

Perfect for Astro, React, Vue, Svelte, Next.js or any modern frontend project.

---

## 🚀 Features

- ⚡ SVG optimization with SVGO
- 🎨 SVG sprite generation
- 📦 TypeScript icon types
- 📋 JSON icon catalog
- 🏷️ Metadata generation
- 👀 Automatic preview page
- 🧩 Framework agnostic
- 🛠️ CLI workflow
- 🔧 Configurable outputs
- 📁 Project-specific icon collections

---

## 📦 Installation

Install the toolkit as a development dependency:

```bash
pnpm add -D github:Stirod08/stirod-svg-toolkit
```

---

## 🚀 Quick Start

### 1. Initialize the toolkit

Run:

```bash
pnpm exec stirod-svg-toolkit init
```

This command creates:

```txt
svg-icons/
└── .gitkeep

stirod.config.js
```

---

### 2. Add your SVG files

Place all your SVG files inside:

```txt
svg-icons/
├── logo.svg
├── search.svg
├── menu.svg
└── user.svg
```

This folder is the **source of truth** for your icons.

---

### 3. Generate the sprite and metadata

Run:

```bash
pnpm exec stirod-svg-toolkit build
```

The toolkit will:

- Read SVG files from `svg-icons/`
- Optimize them using SVGO
- Generate a sprite
- Generate TypeScript types
- Generate metadata
- Generate a preview page

---

## 🔄 How It Works

```txt
svg-icons/
├── search.svg
├── menu.svg
└── user.svg

       │
       ▼

stirod-svg-toolkit build

       │
       ▼

public/icons/sprite.svg

src/generated/
├── icons.ts
├── icons.json
├── metadata.json
├── index.ts
└── preview.html
```

---

## 📁 Generated Files

After running:

```bash
pnpm exec stirod-svg-toolkit build
```

The following files are generated:

```txt
public/
└── icons/
    └── sprite.svg

src/
└── generated/
    ├── icons.ts
    ├── icons.json
    ├── metadata.json
    ├── index.ts
    └── preview.html
```

---

## ⚠️ Important

Do not edit generated files manually.

Files inside:

```txt
public/icons/
src/generated/
```

are automatically regenerated every time you run:

```bash
pnpm exec stirod-svg-toolkit build
```

---

## 📂 Project Structure

After initialization your project will contain:

```txt
svg-icons/
└── .gitkeep

stirod.config.js
```

### svg-icons/

Source directory for your SVG files.

Add all icons here before running the build command.

### stirod.config.js

Toolkit configuration file.

Used to configure:

- Source SVG directory
- Sprite output location
- Generated files location

---

## 🛠️ Optional Scripts

To simplify your workflow, add scripts to your project:

```json
{
  "scripts": {
    "icons:init": "stirod-svg-toolkit init",
    "icons:build": "stirod-svg-toolkit build"
  }
}
```

Then run:

```bash
pnpm icons:init
pnpm icons:build
```

---

## ⚙️ Configuration

Generated configuration:

```js
export default {
  iconsDir: "./svg-icons",

  output: {
    sprite: "./public/icons/sprite.svg",
    generated: "./src/generated",
  },

  generate: {
    types: true,
    metadata: true,
    preview: true,
  },
};
```

---

## 🧩 Usage

### HTML

```html
<svg width="24" height="24">
  <use href="/icons/sprite.svg#search"></use>
</svg>
```

---

### Astro

```astro
<svg width="24" height="24">
  <use href="/icons/sprite.svg#search" />
</svg>
```

---

### React

```tsx
export function Icon() {
  return (
    <svg width="24" height="24">
      <use href="/icons/sprite.svg#search" />
    </svg>
  );
}
```

---

### TypeScript

```ts
import type { IconName } from "./generated/icons";
```

Generated:

```ts
export const icons = ["search", "menu", "user"] as const;

export type IconName = (typeof icons)[number];
```

---

## 🖼️ Preview

A preview page is automatically generated:

```txt
src/generated/preview.html
```

Open it in your browser to inspect all generated icons.

---

## 📄 License

MIT License © Stirod
