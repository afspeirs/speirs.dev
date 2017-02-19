const menubtn = document.querySelector('#menu-btn');
const navmenu = document.querySelector('.nav-menu');

menubtn.addEventListener('click', function(e) {
    navmenu.classList.toggle('expand');
});