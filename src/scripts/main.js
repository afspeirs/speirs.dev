import LogoTilt from './modules/logo-tilt';
import Nav from './modules/nav';

// Remove no-js class as JavaScript is being used
document.documentElement.classList.remove('no-js');

LogoTilt.init();
Nav.init();
