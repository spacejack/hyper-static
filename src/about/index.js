const path = require('path')
const md = require('../lib/md')
const layout = require('../layout')

const mdFilename = path.resolve(__dirname, 'index.md')

/**
 * @param h {Hyperscript} The Hyperscript function
 * @param p {object} Params - a dictionary of data
 */
module.exports = (h, p) => {
	return layout(h, {
		content: md(mdFilename, h('.page'))
	})
}
