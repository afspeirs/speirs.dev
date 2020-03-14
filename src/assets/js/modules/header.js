export default (function Header() {
	const headerLogo = document.querySelector('.header__logo');
	const nav = document.querySelector('.nav');

	const headerLogoOptions = {};

	function handleHeaderLogoObserver(entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				nav.classList.add('scrolled');
			} else {
				nav.classList.remove('scrolled');
			}
		});
	}

	const headerLogoObserver = new IntersectionObserver(handleHeaderLogoObserver, headerLogoOptions);

	function init() {
		headerLogoObserver.observe(headerLogo);
	}

	return {
		init,
	};
}());
