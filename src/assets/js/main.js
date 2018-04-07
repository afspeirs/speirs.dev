import Nav from './modules/nav';
import Screenshot from './modules/screenshot';
import Watchface from './modules/watchface';

window.addEventListener('load', function() {
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
