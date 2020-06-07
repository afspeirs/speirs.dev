const htmlmin = require('html-minifier');
const helpers = require('./helpers');

module.exports = (eleventyConfig) => {
	// Minify HTML files
	eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
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

	eleventyConfig.addHandlebarsShortcode('simplify', helpers.simplify);
	eleventyConfig.addHandlebarsShortcode('year', helpers.year);
	eleventyConfig.addHandlebarsShortcode('ifeq', helpers.ifeq);

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
