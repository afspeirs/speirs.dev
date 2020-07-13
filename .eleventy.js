const helpers = require('./helpers');
const htmlmin = require('html-minifier');
const pluginSass = require('eleventy-plugin-sass');

const paths = {
	input: 'src',
	output: 'dist',
	data: 'data',
	includes: 'templates/includes',
	layouts: 'templates/layouts',
};

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginSass, {
		watch: [`${paths.input}/**/*.{scss,sass}`, '!node_modules/**'],
	});

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
	eleventyConfig.addPassthroughCopy({ 'src/root/*': '/' });

	eleventyConfig.addWatchTarget(`./${paths.input}/scripts/`);

	eleventyConfig.setBrowserSyncConfig({
		port: 3000,
	});

	return {
		dir: paths,
		templateFormats: ['hbs', 'md'],
		htmlTemplateEngine: 'hbs',
	}
}
