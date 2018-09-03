import Nav from './modules/nav';
import Gallery from './modules/gallery';
import Modal from './modules/modal';
import Screenshot from './modules/screenshot';
import Tab from './modules/tab';
import Watchface from './modules/watchface';

window.addEventListener('load', () => {
	// Module Init
	Nav.init();
	Gallery.init();
	Modal.init();
	Screenshot.init();
	Tab.init();
	Watchface.init();

	// Lazy load images
	[].forEach.call(document.querySelectorAll('img[data-src]'), (image) => {
		image.setAttribute('src', image.getAttribute('data-src'));
		image.removeAttribute('data-src');
	});

	// Set a random title angle for the logo
	const tileAngle = 25;
	document.documentElement.style.setProperty('--logo-tilt-degree', `${Math.floor(Math.random() * (tileAngle - -tileAngle)) + -tileAngle}deg`);

	// // Change colour
	// var start = 0x000000;
	// var end = 0xFFFFFF;
	// var value;
	// var intervalFillColour = setInterval(function(){
	// 	if (start === end) {
	// 		clearInterval(intervalFillColour)
	// 	}
	// 	value = start.toString(16);
	// 	if (value.length < 8) {
	// 		value = "000000".substring(0, 6 - value.length) + value;
	// 	}
	// 	start++;
	// 	document.documentElement.style.setProperty('--svg-fill-colour', `#${value}`);
	// }, 400);
});
