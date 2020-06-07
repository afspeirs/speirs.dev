export default (function LogoTilt() {
	const logos = [...document.querySelectorAll('.logo')];
	const tiltAngle = 75;

	// Set a random angle for the logo
	const updateTilt = () => {
		const angle = `${Math.floor(Math.random() * (tiltAngle - -tiltAngle)) + -tiltAngle}deg`;
		document.documentElement.style.setProperty('--logo-tilt-angle', angle);
	};

	function init() {
		updateTilt();

		logos.forEach((logo) => logo.addEventListener('mouseout', updateTilt));
	}

	return {
		init,
	};
}());
