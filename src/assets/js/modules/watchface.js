const Watchface = function() {
	const watch = document.querySelectorAll('.watch');
	const flipButton = document.querySelectorAll('.flip-button');

	function swapWatch() {
		const flipper = this.parentNode.parentNode.parentNode;
		const img = this.parentNode.parentNode.parentNode.firstChild.firstChild;
		const dataWatch = this.dataset.watch;
		const array = img.src.replace(/\/([^/]*)$/, '/,$1').replace(/_/g, ',_,').replace(/\.([^.]*)$/, ',.$1').split(',');

		// Change the watch type
		array[1] = dataWatch;
		// Reset current image number to 1
		array[3] = 1;

		img.setAttribute('src', array.join(''));

		// Set the class of the image to the watch type
		img.classList = dataWatch.toLowerCase();

		// Set the image count based on the watch type
		if (dataWatch.toLowerCase() === 'aplite') {
			img.dataset.imgcount = img.dataset.aplite;
		} else if (dataWatch.toLowerCase() === 'basalt') {
			img.dataset.imgcount = img.dataset.basalt;
		} else if (dataWatch.toLowerCase() === 'chalk') {
			img.dataset.imgcount = img.dataset.chalk;
		}

		// Flip back to watchface
		flipper.parentNode.classList.toggle('flip');
	}
	function init() {
		watch.forEach(e => e.addEventListener('click', swapWatch));

		flipButton.forEach((e) => {
			e.addEventListener('click', () => {
				e.parentNode.classList.toggle('flip'); // Settings
			});
		});
	}

	return { init };
}();

export default Watchface;
