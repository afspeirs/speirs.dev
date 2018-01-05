module.exports.register = (handlebars) => {
	// Returns the options for each json file
	handlebars.registerHelper('forEachData', (options) => {
		var fs = require('fs');
		var files = fs.readdirSync('./src/assets/data/');
		var returnString = '';
		
		for (var i = 0; i < files.length; i++) {
			returnString += options.fn(files[i].replace('.json', ''));
		}
		
		// console.log(files);
		return returnString;
	});
};
