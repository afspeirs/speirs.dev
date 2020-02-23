// Returns a lowercased string with no spaces
module.exports = function simplify(options) {
	return options.toLowerCase().replace(/ /g, '');
};
