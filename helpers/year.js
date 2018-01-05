module.exports.register = (handlebars) => {
	// Returns the current year
	handlebars.registerHelper('year', () => new Date().getFullYear());
};
