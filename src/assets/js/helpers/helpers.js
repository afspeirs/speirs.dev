module.exports.register = (handlebars) => {
	// Returns the options if the two parameters are equal
	handlebars.registerHelper('ifEquals', (a, b, options) => (a === b) ? options.fn(this) : options.inverse(this));
	// Returns the options n number of times
	handlebars.registerHelper('times', (n, options) => {
		var times = '';

		if (isNaN(n)) {
			console.log('Not a number');
			return 'Not a number';
		} else if (!options.fn) {
			console.log('not a block statement');
			return 'Not a block statement';
		}

		for (var i = 1; i <= n; i++) {
			times += options.fn(i);
		}

		return times;
	});
	// Returns the options for each themepark
	handlebars.registerHelper('forEachThemepark', (options) => {
		var fs = require('fs');
		var files = fs.readdirSync('./src/assets/data/');
		var themepark = '';
		
		for (var i = 0; i < files.length; i++) {
			themepark += options.fn(files[i].replace('.json', ''));
		}
		
		// console.log(files);
		return themepark;
	});
	// Returns the title of a themepark
	handlebars.registerHelper('themeparkTitle', (root, name, options) => root[name].title);
	// Returns the current month
	handlebars.registerHelper('month', () => ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date().getMonth()]);
	// Returns a lowercased string with no spaces
	handlebars.registerHelper('simplify', (options) => options.toLowerCase().replace(' ', ''));
	// Removed spaces from the text
	handlebars.registerHelper('trim', (n, options) => n.replace(/ /g, ''));
	// Returns the current year
	handlebars.registerHelper('year', () => new Date().getFullYear());
};
