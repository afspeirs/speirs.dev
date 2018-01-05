module.exports.register = (handlebars) => {
	// Returns the current month
	handlebars.registerHelper('month', () => ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date().getMonth()]);
};
