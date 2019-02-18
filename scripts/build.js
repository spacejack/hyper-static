const fs = require('fs')
const path = require('path')
const h = require('hyperscript')

// Barebones static site generator

/** All pages to generate */
const pages = {
	'index': require('../src/index')
	//'page/index'
}
const pageKeys = Object.keys(pages)

const src = path.resolve(__dirname, '../src')
const pub = path.resolve(__dirname, '../public')

/** Create all needed directories */
function mkDirs() {
	if (!fs.existsSync(pub)) {
		fs.mkdirSync(pub)
		console.log(`Created directory '${pub}'`)
	}
	for (const pg of pageKeys) {
		const parts = pg.split('/')
		if (parts.length > 1) {
			const dir = pub + '/' + parts[0]
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
		renderFile(`${pub}/${page}.html`, pages[page](h))
	}
}

// Script starts

mkDirs()
renderPages()
process.exit()
