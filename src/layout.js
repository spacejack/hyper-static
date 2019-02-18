module.exports = (h, p) => h('html',
	{lang: 'en'},
	h('head',
		h('meta', {'http-equiv': 'content-type', content: 'text/html; charset=utf-8'}),
		h('meta', {name: 'viewport', content: 'initial-scale=1, width=device-width'}),
		h('title', 'Hyper-Static Site'),
		h('link', {rel: 'stylesheet', type: 'text/css', href: '/style.css'})
	),
	h('body',
		h('nav',
			h('a', {href: '/'}, 'Home'),
			' | ',
			h('a', {href: '/about'}, 'About')
		),
		p.content
	)
)
