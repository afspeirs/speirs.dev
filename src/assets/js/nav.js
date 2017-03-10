window.addEventListener('load', function (){
	const menubtn = document.querySelector('#menu-btn');
	const navmenu = document.querySelector('.nav-menu');

	// Toggle Mobile navigation menu on click
	menubtn.addEventListener('click', function(e) {
		navmenu.classList.toggle('expand');
		menubtn.classList.toggle('open');
	});
});