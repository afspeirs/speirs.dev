import Nav from './modules/nav';
import Screenshot from './modules/screenshot';
import Watchface from './modules/watchface';

window.addEventListener('load', function() {
	// Lazy load images
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});

	Nav.init();
	Screenshot.init();
	Watchface.init();

	// const scrollToTop = _ => {
	// 	const c = document.documentElement.scrollTop || document.body.scrollTop;
	// 	if (c > 0) {
	// 		window.requestAnimationFrame(scrollToTop);
	// 		window.scrollTo(0, c - c/8);
	// 	}
	// }
	// scrollToTop();
});
