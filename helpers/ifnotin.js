module.exports = function not(elem, list, options) {
	if (list.indexOf(elem) === -1) {
		return options.fn(this);
	}
	return options.inverse(this);
};
