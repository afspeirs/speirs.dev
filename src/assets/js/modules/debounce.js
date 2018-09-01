// A debouce function to limit the number of times a function is run
function debounce(func, wait) {
	let timeout;
	return (...args) => {
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(context, args), wait);
	};
}

export default debounce;
