# Stirod Icons

Framework-agnostic SVG Sprite Generator and Icon Toolkit.

Build, organize and distribute SVG icon libraries from a single source of truth.

## Features

- SVG Sprite generation
- TypeScript definitions
- JSON icon catalog
- Metadata generation
- Automatic icon preview page
- Framework agnostic
- GitHub friendly workflow

## Project Structure

```txt
stirod-icons/
├── icons/
├── scripts/
└── dist/
```

### Source Icons

Place SVG files inside:

```txt
icons/
```

Example:

```txt
icons/
├── facebook.svg
├── github.svg
└── search.svg
```

## Build

Generate all artifacts:

```bash
pnpm build:sprite
```

Generated output:

```txt
dist/
├── sprite.svg
├── icons.ts
├── icons.json
├── metadata.json
├── index.ts
└── preview.html
```

## Usage

### HTML

```html
<svg>
  <use href="/sprite.svg#facebook"></use>
</svg>
```

### TypeScript

```ts
import type { IconName } from "./dist/icons";
```

## Preview

After running the build command, open:

```txt
dist/preview.html
```

to browse all available icons.

## License

MIT
