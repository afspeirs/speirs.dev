const Gallery = {
	imgMain: document.querySelector('.gallery-main img'),
	imgSecondary: [...document.querySelectorAll('.gallery-secondary .img-wrap img')],
	imgLeft: document.querySelector('.gallery-arrows .img-left'),
	imgRight: document.querySelector('.gallery-arrows .img-right'),
	init() {
		this.imgSecondary.forEach(image => image.addEventListener('click', this.imageSelect));
		this.imgLeft.addEventListener('click', this.prevImage);
		this.imgRight.addEventListener('click', this.nextImage);
	},
	imageSelect() {
		const array = Gallery.imgMain.src.replace(/\/([^\/]*)$/, '/,' + '$1').split(',');
		array[1] = this.dataset.image;
		Gallery.imgMain.setAttribute('src', array.join(''));
		Gallery.imgMain.alt = this.dataset.name;
		Gallery.imgMain.dataset.index = this.dataset.index;
	},
	prevImage() {
		let currentIndex = parseInt(Gallery.imgMain.dataset.index, 10);
		if (currentIndex === 0) {
			currentIndex = Gallery.imgSecondary.length;
		}
		const newImage = Gallery.imgSecondary.filter(image => parseInt(image.dataset.index, 10) === currentIndex - 1)[0];
		Gallery.imgMain.src = newImage.src;
		Gallery.imgMain.alt = newImage.dataset.name;
		Gallery.imgMain.dataset.index = newImage.dataset.index;
	},
	nextImage() {
		let currentIndex = parseInt(Gallery.imgMain.dataset.index, 10);
		if (currentIndex === Gallery.imgSecondary.length - 1) {
			currentIndex = -1;
		}
		const newImage = Gallery.imgSecondary.filter(image => parseInt(image.dataset.index, 10) === currentIndex + 1)[0];
		Gallery.imgMain.src = newImage.src;
		Gallery.imgMain.alt = newImage.dataset.name;
		Gallery.imgMain.dataset.index = newImage.dataset.index;
	},
};

export default Gallery;
