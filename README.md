# Stirod Icons

SVG Sprite Generator para proyectos web.

## Características

- Generación automática de SVG Sprite.
- Generación de tipos TypeScript.
- Generación de metadata.
- Preview automática de iconos.
- Independiente del framework.
- Compatible con Astro, React, Vue, Svelte o HTML puro.

## Estructura

```txt
icons/
├── facebook.svg
├── github.svg
└── search.svg
```

## Generar archivos

```bash
pnpm build:sprite
```

Archivos generados:

```txt
dist/
├── sprite.svg
├── icons.ts
├── icons.json
├── metadata.json
├── index.ts
└── preview.html
```

## Uso

```html
<svg>
  <use href="/sprite.svg#facebook"></use>
</svg>
```

## Desarrollo

Agregar SVG dentro de:

```txt
icons/
```

Luego ejecutar:

```bash
pnpm build:sprite
```
