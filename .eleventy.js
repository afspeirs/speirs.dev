const helpers = require('./helpers');
const htmlmin = require('html-minifier');

const paths = {
	input: 'src',
	output: '.tmp',
	data: 'data',
	includes: 'templates/includes',
	layouts: 'templates/layouts',
};

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

	eleventyConfig.addPassthroughCopy('src/images/**/*.{png,svg}');
	eleventyConfig.addPassthroughCopy('src/scripts/**/*.js');
	eleventyConfig.addPassthroughCopy('src/styles/**/*.scss');
	eleventyConfig.addPassthroughCopy({ 'src/root/*': '/' });

	eleventyConfig.setBrowserSyncConfig({
		port: 3000,
		serveStatic: ['dist']
	});

	return {
		dir: paths,
		templateFormats: ['hbs', 'md'],
		htmlTemplateEngine: 'hbs',
	}
}
