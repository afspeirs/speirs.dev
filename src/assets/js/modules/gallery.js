export default (function Gallery() {
	const imgMain = document.querySelector('.gallery-main img');
	const imgSecondary = [...document.querySelectorAll('.gallery-secondary .img-wrap img')];
	const modalGalleryTitle = document.querySelector('#modal-gallery-title');
	const modalGalleryImage = document.querySelector('#modal-gallery-image');

	function updateModalImageFromIndex(currentIndex) {
		const newImage = imgSecondary
			.filter((image) => parseInt(image.dataset.index, 10) === currentIndex)[0];
		const arrayModal = modalGalleryImage.src.replace(/\/([^/]*)$/, '/,$1').split(',');
		arrayModal[1] = newImage.dataset.image;
		modalGalleryImage.src = arrayModal.join('');
		modalGalleryImage.alt = newImage.dataset.name;
		modalGalleryTitle.innerHTML = newImage.dataset.name;
	}
	function updateImageFromIndex(currentIndex) {
		const newImage = imgSecondary
			.filter((image) => parseInt(image.dataset.index, 10) === currentIndex)[0];
		imgMain.src = newImage.src;
		imgMain.alt = newImage.dataset.name;
		imgMain.dataset.index = newImage.dataset.index;
		updateModalImageFromIndex(currentIndex);
	}
	function imageSelect() {
		updateImageFromIndex(parseInt(this.dataset.index, 10));
	}
	function init() {
		imgSecondary.forEach((image) => image.addEventListener('click', imageSelect));
	}

	return {
		init,
	};
}());
