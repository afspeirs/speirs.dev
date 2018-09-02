import Nav from './modules/nav';
import Gallery from './modules/gallery';
import Screenshot from './modules/screenshot';
import Watchface from './modules/watchface';
import Tab from './modules/tab';

window.addEventListener('load', () => {
	// Module Init
	Nav.init();
	Gallery.init();
	Screenshot.init();
	Tab.init();
	Watchface.init();

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
