const Screenshot = {
	imgLeft: document.querySelectorAll('.img-left'),
	imgRight: document.querySelectorAll('.img-right'),

	init: function () {
		Screenshot.imgLeft.forEach(e => e.addEventListener('click', Screenshot.decrementScreenshot));
		Screenshot.imgRight.forEach(e => e.addEventListener('click', Screenshot.incrementScreenshot));
	},
	decrementScreenshot: function () {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/, '/,' + '$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',.' + '$1').split(',');

		// Decrement the current image number by one unless it is the first one
		array[3] === '1' ? (array[3] = img.dataset.imgcount) : array[3]--;

		img.setAttribute('src', array.join(''));
	},
	incrementScreenshot: function () {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/, '/,' + '$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',.' + '$1').split(',');

		// Increment the current image number by one unless it is the last one
		array[3] === img.dataset.imgcount ? (array[3] = 1) : array[3]++;

		img.setAttribute('src', array.join(''));
	}
};

export default Screenshot;
