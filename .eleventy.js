const htmlmin = require('html-minifier');
const helpers = require('./helpers');

module.exports = (eleventyConfig) => {
	eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
		if (!outputPath) return;
		if (outputPath.endsWith('.html')) {
			const minified = htmlmin.minify(content, {
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}
		return content;
	});

	Object.keys(helpers).forEach((helper) => {
		eleventyConfig.addHandlebarsShortcode(helper, helpers[helper]);
	});

	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/*');

	return {
		dir: {
			input: 'src',
			output: 'dist',
			data: 'data',
			includes: 'templates/includes',
			layouts: 'templates/layouts',
		},
		templateFormats: ['hbs', 'md'],
		htmlTemplateEngine: 'hbs',
	}
}
