import debounce from './debounce';

const Nav = (function Nav() {
	const menubtn = document.querySelector('#nav-toggle');
	const content = [...document.querySelectorAll('.content')];
	const navLinks = document.querySelectorAll('#nav-wrap a');

	// Sets the current section active
	function activeNavSection(compare) {
		navLinks.forEach((a) => {
			const id = a.href.substr(a.href.lastIndexOf('#') + 1);
			// console.log(id);
			a.classList.remove('active');
			if (compare === id) {
				// console.log(id);
				a.classList.add('active');
			}
		});
	}
	// Based on scroll position set the current section as active
	function onScroll() {
		const y = window.scrollY + 5;

		for (let i = 0; i < content.length; i++) {
			if ((i !== content.length - 1 && content[i].offsetTop < y && content[i + 1].offsetTop > y)
				|| (i === content.length - 1 && content[i].offsetTop < y)) {
				activeNavSection(content[i].id);
			}
		}
	}
	function init() {
		// Toggle Mobile navigation menu on click
		menubtn.addEventListener('click', () => {
			menubtn.parentNode.classList.toggle('open');
		});

		// Run on page load to show which section the user is at
		activeNavSection(window.location.hash.substr(1) || content[0].id);

		// Check for scroll event and add active to navigation
		window.addEventListener('scroll', debounce(onScroll));
	}

	return { init };
}());

export default Nav;
