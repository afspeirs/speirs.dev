const Watchface = {
	watch: document.querySelectorAll('.watch'),
	flipButton: document.querySelectorAll('.flip-button'),

	init: function () {
		Watchface.watch.forEach(e => e.addEventListener('click', Watchface.swapWatch));

		Watchface.flipButton.forEach(e => {
			e.addEventListener('click', () => {
				e.parentNode.classList.toggle('flip'); // Settings
			});
		});
	},
	swapWatch: function () {
		const flipper = this.parentNode.parentNode.parentNode;
		const img = this.parentNode.parentNode.parentNode.firstChild.firstChild;
		const dataWatch = this.dataset.watch;
		const array = img.src.replace(/\/([^\/]*)$/, '/,' + '$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',.' + '$1').split(',');

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
};

export default Watchface;
