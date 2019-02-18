# Hyper-Static

A bare-bones static site generator using [Hyperscript](https://github.com/hyperhype/hyperscript) and [Marked](https://github.com/markedjs/marked).

This is not a library, it's a starter project that you can turn into your own static site generator.

## Install

	npm install

`scripts/build.js` is the top-level script that orchestrates page generation. You can change this to use whatever logic you want.

The `src` directory contains all page sources:

* html (in the form of Hyperscript in .js files)
* markdown (in .md files)
* css (PostCSS in .pcss files)

Organize them however you like.

## Develop

	npm start

This will compile the pages and styles and serve them through a local server at `http://localhost:3000`. The browser will auto-refresh whenever layout, content or css changes are made to the sources.

## Build

	npm run build

Outputs generated site to a `public` folder.
