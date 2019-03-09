# Hyper-Static

A bare-bones static site generator using [Hyperscript](https://github.com/hyperhype/hyperscript), [Marked](https://github.com/markedjs/marked) and [PostCSS](https://github.com/postcss/postcss).

This is not a library or framework, it's a starter project that you can use as a base and customize for the site you're building. It's meant to be simple and transparent so that it's easy to change anything.

## Install

	npm install

## Usage

`scripts/build.js` is the top-level script that orchestrates page generation. You can change this code to do whatever you want. You can use this npm script to invoke it:

	npm run build

The `src` directory is intended to contain all sources for files that are generated:

* html (in the form of Hyperscript in .js files)
* markdown (in .md files) as content for html files
* css (PostCSS in .pcss files)

Organize them however you like.

Note that Javascript (or Typescript, etc.) compilation/bundling was considered too complex and opinionated so I leave that to you if you need it.

Source files will be compiled and output to the `public` directory.

### Handling static files

There are a couple of ways to handle static files (such as images, PDFs, media files, etc.) that are not generated or processed during the build.

One is to store them in the public directory. Images are the most obvious candidate, but you might wish to add fonts, media files, and so on. You'll need to edit the `.gitignore` file if you want to include additional directories or files under public in the git repo, and you'll have to take care that the npm `clean` script is kept up to date.

Alternately you might prefer to have a build script that outputs the entire site from scratch by copying all static files from `src` to `public`. This reduces the complexity of clean scripts and the .gitignore file. Choose whichever approach suits your project best.

## Develop

	npm start

This will compile the pages and styles and serve them through a local server at `http://localhost:3000`. The compiled CSS bundle will contain source maps for your .pcss sources. The browser will auto-refresh whenever layout, content or css changes are made to the sources.
