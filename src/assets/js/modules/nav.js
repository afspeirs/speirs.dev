const Nav = {
	menubtn: document.querySelector('#nav-toggle'),
	container: document.querySelector('#container'),
	content: [...document.querySelectorAll('.content')],
	navA: document.querySelectorAll('#navbar-wrap a'),

	init: function() {
		// Toggle Mobile navigation menu on click
		Nav.menubtn.addEventListener('click', () => {
			Nav.menubtn.parentNode.classList.toggle('open');
		});

		Nav.tiltLogo();

		// Run on page load to show which section the user is at
		Nav.activeNavSection(window.location.hash.substr(1) || Nav.content[0].id);

		// Check for scroll event and add active to navigation
		document.addEventListener('scroll', Nav.debounce(Nav.onScroll));
	},
	// A debouce function to limit the number of times a function is run
	debounce: function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},
	// Sets the current section active
	activeNavSection: function(compare) {
		Nav.navA.forEach(a => {
			const id = a.href.substr(a.href.lastIndexOf('#') + 1);
			// console.log(id);
			a.classList.remove('active');
			if (compare === id) {
				// console.log(id);
				a.classList.add('active');
			}
		});
	},
	// Based on scroll position set the current section as active
	onScroll: function() {
		// const y = container.scrollTop + 1;
		const y = window.scrollY + 1;

		for (let i = 0; i < Nav.content.length; i++) {
			if ((i !== Nav.content.length - 1 && Nav.content[i].offsetTop < y && Nav.content[i + 1].offsetTop > y) ||
				(i === Nav.content.length - 1 && Nav.content[i].offsetTop < y)) {
				Nav.activeNavSection(Nav.content[i].id);
			}
		}
	},
	// Set a random title angle for the logo
	tiltLogo: function(params) {
		// Randomly tilt logo
		const tileAngle = 25;
		document.documentElement.style.setProperty(`--logo-tilt-degree`, `${Math.floor(Math.random() * (tileAngle - -tileAngle)) + -tileAngle}deg`);
	}
};

export default Nav;
