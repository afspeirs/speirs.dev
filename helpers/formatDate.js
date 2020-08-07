const dayjs = require('dayjs');

// Returns the date in the format specified
module.exports = function formatDate(options) {
	const { hash: { date, format } } = options;
	return dayjs(date).format(format);
};
