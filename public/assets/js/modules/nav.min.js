window.addEventListener('load', () => {
	const menubtn = document.querySelector('#menu-btn');
	const navmenu = document.querySelector('.mobile-nav-menu');

	const container = document.querySelector('#container')
	const content = [...document.querySelectorAll('.content')];
	const navA = document.querySelectorAll('#navbar-wrap a')

	// Toggle Mobile navigation menu on click
	menubtn.addEventListener('click', () => {
		menubtn.classList.toggle('open');
		navmenu.classList.toggle('expand');
	});

	function debounce(func, wait, immediate) {
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
	};

	function activeNavSection(compare) {
		navA.forEach(a => {
			const id = a.href.substr(a.href.lastIndexOf('#') + 1);
			// console.log(id);
			a.classList.remove('active')
			if (compare === id) {
				// console.log(id);
				a.classList.add('active')
			}
		});
	}

	// Run on page load to show which section the user is at
	activeNavSection(window.location.hash.substr(1))

	// navA.forEach(e => e.addEventListener('click', function() {
	// 	// navA.forEach(a => a.classList.remove('active'));
	// 	// e.classList.add('active');
	// 	activeNavSection();
	// }))

	function scrollMe() {
		const y = container.scrollTop + 1;

		for (let i = 0; i < content.length; i++) {
			if ((i !== content.length - 1 && content[i].offsetTop < y && content[i + 1].offsetTop > y) ||
			    (i === content.length - 1 && content[i].offsetTop < y)) {
				activeNavSection(content[i].id)
			};
		}
	}

	container.addEventListener('scroll', debounce(scrollMe));
});

