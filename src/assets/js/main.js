import Nav from './modules/nav';
import Screenshot from './modules/screenshot';
import Watchface from './modules/watchface';
import Tab from './modules/tab';

window.addEventListener('load', function () {
	// Lazy load images
	[].forEach.call(document.querySelectorAll('img[data-src]'), function (image) {
		image.setAttribute('src', image.getAttribute('data-src'));
		image.onload = function () {
			image.removeAttribute('data-src');
		};
	});

	// Set a random title angle for the logo
	const tileAngle = 25;
	document.documentElement.style.setProperty(`--logo-tilt-degree`, `${Math.floor(Math.random() * (tileAngle - -tileAngle)) + -tileAngle}deg`);

	Nav.init();
	Screenshot.init();
	Tab.init();
	Watchface.init();

	// const scrollToTop = _ => {
	// 	const c = document.documentElement.scrollTop || document.body.scrollTop;
	// 	if (c > 0) {
	// 		window.requestAnimationFrame(scrollToTop);
	// 		window.scrollTo(0, c - c / 8);
	// 	}
	// }
	// scrollToTop();
});
