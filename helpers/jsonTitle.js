module.exports.register = (handlebars) => {
	// Returns the title of a json
	handlebars.registerHelper('jsonTitle', (root, json, options) => root[json].title);
};
