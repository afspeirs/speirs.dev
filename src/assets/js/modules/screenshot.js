const Screenshot = (function Screenshot() {
	const imgLeft = document.querySelectorAll('.screenshot .img-left');
	const imgRight = document.querySelectorAll('.screenshot .img-right');

	function decrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^/]*)$/, '/,$1').replace(/_/g, ',_,').replace(/\.([^.]*)$/, ',.$1').split(',');

		// Decrement the current image number by one unless it is the first one
		if (array[3] === '1') {
			array[3] = img.dataset.imgcount;
		} else {
			array[3]--;
		}

		img.setAttribute('src', array.join(''));
	}
	function incrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^/]*)$/, '/,$1').replace(/_/g, ',_,').replace(/\.([^.]*)$/, ',.$1').split(',');

		// Increment the current image number by one unless it is the last one
		if (array[3] === img.dataset.imgcount) {
			array[3] = 1;
		} else {
			array[3]++;
		}

		img.setAttribute('src', array.join(''));
	}
	function init() {
		imgLeft.forEach(e => e.addEventListener('click', decrementScreenshot));
		imgRight.forEach(e => e.addEventListener('click', incrementScreenshot));
	}

	return { init };
}());

export default Screenshot;
