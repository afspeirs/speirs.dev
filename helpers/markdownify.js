const MarkdownIt = require('markdown-it');

const markdownItRenderer = new MarkdownIt().disable('code');

// Returns a lowercased string with no spaces
module.exports = function simplify(str) {
	return markdownItRenderer.render(str);
};
