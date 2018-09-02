const Gallery = {
	imgMain: document.querySelector('.gallery-main img'),
	imgSecondary: [...document.querySelectorAll('.gallery-secondary .img-wrap img')],
	imgLeft: document.querySelector('.gallery-arrows .img-left'),
	imgRight: document.querySelector('.gallery-arrows .img-right'),
	modalGalleryTitle: document.querySelector('#modal-gallery-title'),
	modalGalleryImage: document.querySelector('#modal-gallery-image'),
	init() {
		this.imgSecondary.forEach(image => image.addEventListener('click', this.imageSelect));
		this.imgLeft.addEventListener('click', this.prevImage);
		this.imgRight.addEventListener('click', this.nextImage);
	},
	updateModalImageFromIndex(currentIndex) {
		const newImage = Gallery.imgSecondary
			.filter(image => parseInt(image.dataset.index, 10) === currentIndex)[0];
		const arrayModal = Gallery.modalGalleryImage.src.replace(/\/([^/]*)$/, '/,$1').split(',');
		arrayModal[1] = newImage.dataset.image;
		Gallery.modalGalleryImage.src = arrayModal.join('');
		Gallery.modalGalleryImage.alt = newImage.dataset.name;
		Gallery.modalGalleryTitle.innerHTML = newImage.dataset.name;
	},
	updateImageFromIndex(currentIndex) {
		const newImage = Gallery.imgSecondary
			.filter(image => parseInt(image.dataset.index, 10) === currentIndex)[0];
		Gallery.imgMain.src = newImage.src;
		Gallery.imgMain.alt = newImage.dataset.name;
		Gallery.imgMain.dataset.index = newImage.dataset.index;
		Gallery.updateModalImageFromIndex(currentIndex);
	},
	imageSelect() {
		Gallery.updateImageFromIndex(parseInt(this.dataset.index, 10));
	},
	prevImage() {
		let currentIndex = parseInt(Gallery.imgMain.dataset.index, 10);
		if (currentIndex === 0) {
			currentIndex = Gallery.imgSecondary.length;
		}
		Gallery.updateImageFromIndex(currentIndex - 1);
	},
	nextImage() {
		let currentIndex = parseInt(Gallery.imgMain.dataset.index, 10);
		if (currentIndex === Gallery.imgSecondary.length - 1) {
			currentIndex = -1;
		}
		Gallery.updateImageFromIndex(currentIndex + 1);
	},
};

export default Gallery;
