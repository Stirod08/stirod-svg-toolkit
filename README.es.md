# 🚀 Stirod SVG Toolkit

<p align="center">
  <strong>Herramienta CLI agnóstica al framework para generar sprites SVG, metadatos y tipos TypeScript.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Stirod08/stirod-svg-toolkit" alt="Licencia">
  <img src="https://img.shields.io/github/stars/Stirod08/stirod-svg-toolkit" alt="Estrellas">
  <img src="https://img.shields.io/github/issues/Stirod08/stirod-svg-toolkit" alt="Issues">
  <img src="https://img.shields.io/github/repo-size/Stirod08/stirod-svg-toolkit" alt="Tamaño del repositorio">
  <img src="https://img.shields.io/badge/Framework-Agnostic-blue" alt="Agnóstico al Framework">
  <img src="https://img.shields.io/badge/CLI-Ready-success" alt="CLI Ready">
</p>

---

## ✨ Descripción

**Stirod SVG Toolkit** es una herramienta CLI que transforma una carpeta de archivos SVG en un completo sistema de iconos para tu proyecto.

A partir de una única colección de archivos SVG, genera automáticamente:

- Sprite SVG
- Tipos TypeScript
- Catálogo JSON de iconos
- Metadatos
- Página de previsualización

Ideal para proyectos desarrollados con Astro, React, Vue, Svelte, Next.js o cualquier framework moderno.

---

## 🚀 Características

- ⚡ Optimización de SVG mediante SVGO
- 🎨 Generación automática de sprites SVG
- 📦 Tipos TypeScript generados automáticamente
- 📋 Catálogo JSON de iconos
- 🏷️ Generación de metadatos
- 👀 Página de previsualización automática
- 🧩 Compatible con cualquier framework
- 🛠️ Flujo de trabajo basado en CLI
- 🔧 Directorios de salida configurables
- 📁 Colecciones de iconos personalizadas por proyecto

---

## 📦 Instalación

### Desde GitHub

```bash
pnpm add -D github:Stirod08/stirod-svg-toolkit
```

---

## 🚀 Inicio rápido

### Inicializar el toolkit

```bash
stirod-svg-toolkit init
```

Esto generará:

```txt
icons/
└── .gitkeep

stirod.config.js
```

---

### Agregar iconos SVG

```txt
icons/
├── logo.svg
├── buscar.svg
├── menu.svg
└── usuario.svg
```

---

### Generar los archivos

```bash
stirod-svg-toolkit build
```

---

## ⚙️ Configuración

Archivo generado automáticamente:

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

## 📂 Estructura de salida

Después de ejecutar:

```bash
stirod-svg-toolkit build
```

se generarán los siguientes archivos:

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

## 🧩 Uso

### HTML

```html
<svg width="24" height="24">
  <use href="/icons/sprite.svg#buscar"></use>
</svg>
```

---

### Astro

```astro
<svg width="24" height="24">
  <use href="/icons/sprite.svg#buscar" />
</svg>
```

---

### React

```tsx
export function Icon() {
  return (
    <svg width="24" height="24">
      <use href="/icons/sprite.svg#buscar" />
    </svg>
  );
}
```

---

### TypeScript

```ts
import type { IconName } from "./generated/icons";
```

Tipos generados automáticamente:

```ts
export const icons = ["buscar", "menu", "usuario"] as const;

export type IconName = (typeof icons)[number];
```

---

## 🖼️ Vista previa

El toolkit genera automáticamente una página de previsualización:

```txt
src/generated/preview.html
```

Ábrela en tu navegador para visualizar todos los iconos disponibles y validar que el sprite fue generado correctamente.

---

## 💡 Proximas Versiones

### v1.1

- Mensajes de error más amigables para SVG inválidos
- Modo observador (watch mode)
- Comando `init` interactivo
- Mejoras en la página de previsualización

### v2.0

- Adaptador para Astro
- Adaptador para React
- Adaptador para Vue
- Adaptador para Svelte
- Generación automática de componentes de iconos

---

## 🤝 Contribuciones

Las contribuciones, ideas y sugerencias son bienvenidas.

Si encuentras un problema o tienes una mejora en mente, puedes abrir un Issue o enviar un Pull Request.

---

## 📄 Licencia

Licencia MIT © Stirod
