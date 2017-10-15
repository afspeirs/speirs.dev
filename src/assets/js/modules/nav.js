window.addEventListener('load', () => {
	const menubtn = document.querySelector('#menu-btn');
	const navmenu = document.querySelector('.mobile-nav-menu');

	// Toggle Mobile navigation menu on click
	menubtn.addEventListener('click', () => {
		menubtn.classList.toggle('open');
		navmenu.classList.toggle('expand');
	});
});

