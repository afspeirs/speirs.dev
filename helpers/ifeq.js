// Returns true if the two inputs are equal
module.exports = function ifeq(a, b, opts) {
	if (a === b) return opts.fn(this);
	return opts.inverse(this);
};
