const htmlmin = require('html-minifier');
const helpers = require('./helpers');

module.exports = (eleventyConfig) => {
	eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
		if (!outputPath) return;
		if (outputPath.endsWith('.html')) {
			const minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}
		return content;
	});

	eleventyConfig.addHandlebarsShortcode('ifeq', helpers.ifeq);
	eleventyConfig.addHandlebarsShortcode('simplify', helpers.simplify);
	eleventyConfig.addHandlebarsShortcode('year', helpers.year);

	return {
		dir: {
			input: 'src',
			output: 'dist',
			data: 'assets/data',
			includes: 'templates/partials',
			layouts: 'templates/layouts',
		},
		templateFormats: ['hbs', 'md'],
		htmlTemplateEngine: 'hbs',
	}
}
