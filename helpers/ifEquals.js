module.exports.register = (handlebars) => {
	// Returns the options if the two parameters are equal
	handlebars.registerHelper('ifEquals', (a, b, options) => (a === b) ? options.fn(this) : options.inverse(this));
};
