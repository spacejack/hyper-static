const fs = require('fs')
const h = require('hyperscript')
const marked = require('marked')

/**
 * Markdown parser helper
 * @param {string} filename Filename of .md file
 * @param {HyperscriptElement?} Optional element to contain output
 * @returns {*} A Hyperscript element
 */
module.exports = function md (filename, dom) {
	// TODO: How not to wrap in container element?
	dom = dom || h('div')
	dom.innerHTML = marked(fs.readFileSync(filename, 'utf8'))
	return dom
}
