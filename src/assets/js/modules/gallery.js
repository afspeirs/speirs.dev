export default (function Gallery() {
	const imgMain = [...document.querySelectorAll('.gallery-main')];
	const imgSecondary = [...document.querySelectorAll('.gallery-secondary .img-wrap img')];

	function imageSelect() {
		imgMain.forEach((img) => {
			if (img.dataset.index === this.dataset.index) {
				img.classList.add('selected');
			} else {
				img.classList.remove('selected');
			}
		});
	}

	function init() {
		// Add class of selected to the first main image
		imgMain[0].classList.add('selected');

		// Update the selected main image onClick of a secondary image
		imgSecondary.forEach((image) => image.addEventListener('click', imageSelect, false));
	}

	return {
		init,
	};
}());
