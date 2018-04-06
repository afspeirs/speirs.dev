import Nav from './modules/nav';

window.addEventListener('load', function() {
	Nav.init();
	const imgLeft = document.querySelectorAll('.img-left');
	const imgRight = document.querySelectorAll('.img-right');
	const watch = document.querySelectorAll('.watch');
	const flipButton = document.querySelectorAll('.flip-button');

	function decrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/, '/,' + '$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',.' + '$1').split(',');

		// Decrement the current image number by one unless it is the first one
		array[3] === '1' ? (array[3] = img.dataset.imgcount) : array[3]--;

		img.setAttribute('src', array.join(''));
	}

	function incrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/, '/,' + '$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',.' + '$1').split(',');

		// Increment the current image number by one unless it is the last one
		array[3] === img.dataset.imgcount ? (array[3] = 1) : array[3]++;

		img.setAttribute('src', array.join(''));
	}

	function swapWatch() {
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

	// const scrollToTop = _ => {
	// 	const c = document.documentElement.scrollTop || document.body.scrollTop;
	// 	if (c > 0) {
	// 		window.requestAnimationFrame(scrollToTop);
	// 		window.scrollTo(0, c - c/8);
	// 	}
	// }
	// scrollToTop();

	imgLeft.forEach(e => e.addEventListener('click', decrementScreenshot));

	imgRight.forEach(e => e.addEventListener('click', incrementScreenshot));

	watch.forEach(e => e.addEventListener('click', swapWatch));

	flipButton.forEach(e => {
		e.addEventListener('click', () => {
			e.parentNode.classList.toggle('flip'); // Settings
		});
	});
});
