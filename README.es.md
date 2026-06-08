# 🚀 Stirod SVG Toolkit

<p align="center">
  <strong>CLI agnóstico al framework para generar sprites SVG, metadatos y tipos TypeScript.</strong>
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

## ✨ Descripción

**Stirod SVG Toolkit** es una herramienta CLI que transforma una carpeta de archivos SVG en un kit completo de iconos.

A partir de una única fuente, genera automáticamente:

- Sprite SVG
- Definiciones TypeScript
- Catálogo JSON de iconos
- Metadatos
- Página de previsualización

Compatible con Astro, React, Vue, Svelte, Next.js o cualquier proyecto frontend moderno.

---

## 🚀 Características

- ⚡ Optimización de SVG mediante SVGO
- 🎨 Generación automática de sprites SVG
- 📦 Tipos TypeScript para autocompletado
- 📋 Catálogo de iconos en formato JSON
- 🏷️ Generación de metadatos
- 👀 Página de previsualización automática
- 🧩 Independiente del framework
- 🛠️ Flujo de trabajo mediante CLI
- 🔧 Salidas configurables
- 📁 Colecciones de iconos específicas por proyecto

---

## 📦 Instalación

Instala la herramienta como dependencia de desarrollo:

```bash
pnpm add -D github:Stirod08/stirod-svg-toolkit
```

---

## 🚀 Inicio Rápido

### 1. Inicializar la herramienta

Ejecuta:

```bash
pnpm exec stirod-svg-toolkit init
```

Este comando creará:

```txt
svg-icons/
└── .gitkeep

stirod.config.js
```

---

### 2. Agregar tus iconos SVG

Coloca todos tus archivos SVG dentro de:

```txt
svg-icons/
├── logo.svg
├── search.svg
├── menu.svg
└── user.svg
```

Esta carpeta será la fuente principal de tus iconos.

---

### 3. Generar el sprite y archivos auxiliares

Ejecuta:

```bash
pnpm exec stirod-svg-toolkit build
```

La herramienta:

- Leerá los SVG de `svg-icons/`
- Optimizará los archivos usando SVGO
- Generará un sprite SVG
- Generará tipos TypeScript
- Generará metadatos
- Generará una página de previsualización

---

## 🔄 Cómo Funciona

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

## 📁 Archivos Generados

Después de ejecutar:

```bash
pnpm exec stirod-svg-toolkit build
```

Se generarán los siguientes archivos:

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

## ⚠️ Importante

No modifiques manualmente los archivos generados.

Los archivos ubicados en:

```txt
public/icons/
src/generated/
```

se regeneran automáticamente cada vez que ejecutes:

```bash
pnpm exec stirod-svg-toolkit build
```

---

## 📂 Estructura del Proyecto

Después de ejecutar el comando de inicialización, tu proyecto tendrá:

```txt
svg-icons/
└── .gitkeep

stirod.config.js
```

### svg-icons/

Directorio donde debes almacenar todos los archivos SVG.

Agrega aquí todos los iconos antes de ejecutar el comando de compilación.

### stirod.config.js

Archivo de configuración de la herramienta.

Permite personalizar:

- Directorio de origen de los SVG
- Ruta de salida del sprite
- Ruta de generación de archivos auxiliares

---

## 🛠️ Scripts Opcionales

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

## ⚙️ Configuración

Configuración generada por defecto:

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

## 🧩 Uso

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

Generado automáticamente:

```ts
export const icons = ["search", "menu", "user"] as const;

export type IconName = (typeof icons)[number];
```

---

## 🖼️ Previsualización

La herramienta genera automáticamente una página de previsualización:

```txt
src/generated/preview.html
```

Ábrela en tu navegador para visualizar todos los iconos generados.

---

## 📄 Licencia

Licencia MIT © Stirod
