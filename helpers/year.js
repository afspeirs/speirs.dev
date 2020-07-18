// Returns the year of the date provided or the current year
module.exports = function year(date) {
	if (date) return new Date(date).getFullYear();
	return new Date().getFullYear();
};
