# dead-simple-js-sass-workflow

The smallest "just works" setup for writing vanilla ES6 or TS + SASS with webpack.

- ES6 modules (imports/exports) or TS
- TypeScript (optional)
- SASS/SCSS support
- Dev server with live reload + source maps
- Copies static/ into dist/ so you can use a plain HTML file

## Requirements

- Node.js + npm

## Install

```sh
npm install
```

## Start (dev server)

```sh
npm start
```

Then open:

- http://localhost:8080

What to edit:

- src/index.js (your JS entry)
- src/index.ts (optional TS entry — if this file exists, webpack will use it)
- src/style.scss (your styles)
- static/index.html (your HTML — demo writes into the <p id="output"> element)

## Build (writes to dist/)

```sh
npm run build
```

Output:

- dist/index.js (bundled JS)
- dist/index.js.map (source map)
- dist/index.html (copied from static/index.html)

Want a production build without changing scripts?

```sh
npx webpack --mode=production
```

## How it works (60 seconds)

### JS / ES6 (or TS) modules

Webpack starts at your entry file and follows your imports.

- If src/index.ts exists, it uses that.
- Otherwise it falls back to src/index.js.

Example patterns already in this repo:

- Named export import: import { AlertBox } from './alert-box/alert-box';
- Default export import: import writeText from './write-text/write-text';

To add more JS:

1. Create a file anywhere under src/.
2. Export something from it.
3. Import it from your entry (or another imported module).

### TypeScript (optional)

You have two simple options:

1. Add a .ts file and import it from JS:

- Create src/something.ts
- Import it from src/index.js

2. Switch the whole entry to TypeScript (no config change needed):

- Create src/index.ts (webpack automatically prefers it)

You can mix .js and .ts in the same project.

### SASS / SCSS

SASS is enabled via this line in your entry file:

```js
import "./style.scss";
```

That import is the whole trick: it tells webpack to compile SASS and inject the resulting CSS into the page during dev.

### HTML

static/ is served by the dev server and also copied into dist/ on build, so static/index.html becomes dist/index.html.

## Project structure

```text
src/
  index.js        # JS entry (used if index.ts is missing)
  index.ts        # Optional TS entry (preferred if present)
  style.scss      # Global styles (imported by entry)
  alert-box/      # Example ES6/TS module
  write-text/     # Example ES6/TS module

static/
  index.html      # Plain HTML template copied to dist/

dist/             # Build output (generated)
```

## Common tweaks

- Change dev server port: edit devServer.port in webpack.config.js.
- Add more static files (images, favicon, etc.): drop them into static/.
