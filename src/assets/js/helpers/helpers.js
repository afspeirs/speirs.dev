module.exports.register = (handlebars) => {
	handlebars.registerHelper('log', (options) => {
		console.log(options);
		return '';
	});
	handlebars.registerHelper('ifEquals', (a, b, options) => {
		if (a === b) return options.fn(this);
		return options.inverse(this);
	});
	handlebars.registerHelper('times', (n, options) => {
		var times = '';
		var i;
		for (i = 1; i <= n; i++) {
			times += options.fn(i);
		}
		return times;
	});
	handlebars.registerHelper('trim', (n, options) => {
		return n.replace(/ /g, '');
	});
	handlebars.registerHelper('month', () => {
		var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return months[new Date().getMonth()];
	});
	handlebars.registerHelper('year', () => {
		return new Date().getFullYear();
	});
	handlebars.registerHelper( 'simplify', (e) => {
		return e.toLowerCase().replace(' ', '');
	});
};
