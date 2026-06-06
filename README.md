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

### Using GitHub

```bash
pnpm add -D github:Stirod08/stirod-svg-toolkit
```

---

## 🚀 Quick Start

### Initialize toolkit

```bash
pnpm exec stirod-svg-toolkit init
```

Creates:

```txt
icons/
└── .gitkeep

stirod.config.js
```

---

### Add your SVG files

```txt
icons/
├── logo.svg
├── search.svg
├── menu.svg
└── user.svg
```

---

### Generate outputs

```bash
pnpm exec stirod-svg-toolkit build
```

## Scripts opcionales

Para simplificar el flujo de trabajo puedes agregar scripts a tu proyecto:

```json
{
  "scripts": {
    "icons:init": "stirod-svg-toolkit init",
    "icons:build": "stirod-svg-toolkit build"
  }
}
```

Luego podrás ejecutar:

```bash
pnpm icons:init
pnpm icons:build
```

---

## ⚙️ Configuration

Generated configuration:

```js
export default {
  iconsDir: "./icons",

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

## 📂 Output Structure

After running:

```bash
stirod-svg-toolkit build
```

Generated files:

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

## 🛣️ Roadmap

### v1.1

- Better SVG validation messages
- Watch mode
- Interactive init command
- Improved preview experience

### v2.0

- Astro adapter
- React adapter
- Vue adapter
- Svelte adapter
- Icon component generators

---

## 🤝 Contributing

Contributions, ideas and improvements are welcome.

Feel free to open an issue or submit a pull request.

---

## 📄 License

MIT License © Stirod
