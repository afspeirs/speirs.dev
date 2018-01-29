module.exports.register = (handlebars) => {
	// Returns a lowercased string with no spaces
	handlebars.registerHelper('simplify', (options) => options.toLowerCase().replace(/ /g, ''));
};
