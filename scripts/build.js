// @ts-check

// Entry point of static site generation

'use strict'

const fs = require('fs')
const path = require('path')
const h = require('hyperscript')

// Barebones static site generator

/** All pages to generate */
const pages = {
	'index': require('../src/index'),
	'about/index': require('../src/about/index')
}
const pageKeys = Object.keys(pages)

/** Directory to publish to */
const pubDir = path.resolve(__dirname, '..', 'public')

/** Create all needed directories */
function mkDirs() {
	if (!fs.existsSync(pubDir)) {
		fs.mkdirSync(pubDir)
		console.log(`Created directory '${pubDir}'`)
	}
	for (const pg of pageKeys) {
		for (const dirPart of pg.split('/').slice(0, -1)) {
			const dir = path.join(pubDir, dirPart)
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir)
				console.log(`Created directory "${dir}"`)
			}
		}
	}
}

/** Render dom to html and write to file */
function renderFile (filename, dom) {
	const html = '<!doctype html>' + dom.outerHTML
	fs.writeFileSync(filename, html, {encoding: 'utf8'})
	console.log(`wrote: "${filename}"`)
}

function renderPages() {
	for (const page of pageKeys) {
		renderFile(`${pubDir}/${page}.html`, pages[page](h))
	}
}

/** Delete all generated html */
function clean() {
	if (!fs.existsSync(pubDir)) {
		return
	}
	for (const pg of pageKeys) {
		for (const dirPart of pg.split('/').slice(0, -1)) {
			const dir = path.join(pubDir, dirPart)
			if (fs.existsSync(dir)) {
				const f = path.join(dir, 'index.html')
				if (fs.existsSync(f)) {
					fs.unlinkSync(f)
				}
				fs.rmdirSync(dir)
			}
		}
	}
	const f = path.join(pubDir, 'index.html')
	if (fs.existsSync(f)) {
		fs.unlinkSync(f)
	}
}

// Script starts
if (process.argv[2] === 'clean') {
	// Clean build artifacts
	clean()
} else {
	// Normal build
	mkDirs()
	renderPages()
}

process.exit()
