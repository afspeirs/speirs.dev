import debounce from "./debounce";

const Nav = {
	menubtn: document.querySelector('#nav-toggle'),
	container: document.querySelector('#container'),
	content: [...document.querySelectorAll('.content')],
	navLinks: document.querySelectorAll('#nav-wrap a'),

	init: function () {
		// Toggle Mobile navigation menu on click
		Nav.menubtn.addEventListener('click', () => {
			Nav.menubtn.parentNode.classList.toggle('open');
		});

		// Run on page load to show which section the user is at
		Nav.activeNavSection(window.location.hash.substr(1) || Nav.content[0].id);

		// Check for scroll event and add active to navigation
		window.addEventListener('scroll', debounce(Nav.onScroll));
	},
	// Sets the current section active
	activeNavSection: function (compare) {
		Nav.navLinks.forEach(a => {
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
	onScroll: function () {
		const y = window.scrollY + 5;

		for (let i = 0; i < Nav.content.length; i++) {
			if ((i !== Nav.content.length - 1 && Nav.content[i].offsetTop < y && Nav.content[i + 1].offsetTop > y) ||
				(i === Nav.content.length - 1 && Nav.content[i].offsetTop < y)) {
				Nav.activeNavSection(Nav.content[i].id);
			}
		}
	}
};

export default Nav;
