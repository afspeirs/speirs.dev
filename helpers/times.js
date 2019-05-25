// Returns the options n number of times
module.exports = (n, options) => {
	let times = '';

	if (isNaN(n)) {
		console.log('Not a number');
		return 'Not a number';
	} else if (!options.fn) {
		console.log('not a block statement');
		return 'Not a block statement';
	}

	for (let i = 1; i <= n; i++) {
		times += options.fn(i);
	}

	return times;
};
