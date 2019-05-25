// Returns the options if the two parameters are equal
module.exports = (a, b, options) => ((a === b) ? options.fn(this) : options.inverse(this));
