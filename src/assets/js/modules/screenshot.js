const Screenshot = {
	imgLeft: document.querySelectorAll('.screenshot .img-left'),
	imgRight: document.querySelectorAll('.screenshot .img-right'),

	init() {
		Screenshot.imgLeft.forEach(e => e.addEventListener('click', Screenshot.decrementScreenshot));
		Screenshot.imgRight.forEach(e => e.addEventListener('click', Screenshot.incrementScreenshot));
	},
	decrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^/]*)$/, '/,$1').replace(/_/g, ',_,').replace(/\.([^.]*)$/, ',.$1').split(',');

		// Decrement the current image number by one unless it is the first one
		if (array[3] === '1') {
			array[3] = img.dataset.imgcount;
		} else {
			array[3] -= 1;
		}

		img.setAttribute('src', array.join(''));
	},
	incrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^/]*)$/, '/,$1').replace(/_/g, ',_,').replace(/\.([^.]*)$/, ',.$1').split(',');

		// Increment the current image number by one unless it is the last one
		if (array[3] === img.dataset.imgcount) {
			array[3] = 1;
		} else {
			array[3] += 1;
		}

		img.setAttribute('src', array.join(''));
	},
};

export default Screenshot;
