const fs = require('fs')
const h = require('hyperscript')
const marked = require('marked')

/**
 * Markdown parser helper
 * @param {string} filename Filename of .md file
 * @returns {*} A Hyperscript element
 */
module.exports = function md (filename) {
	const dom = h('div')
	dom.innerHTML = marked(fs.readFileSync(filename, 'utf8'))
	return dom
}
