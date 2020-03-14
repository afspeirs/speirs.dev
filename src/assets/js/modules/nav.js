export default (function Nav() {
	const headerLogo = document.querySelector('.header__logo');
	const nav = document.querySelector('.nav');
	const navLinks = [...document.querySelectorAll('.nav__link')];
	const navToggle = document.querySelector('.nav__toggle');
	const sections = [...document.querySelectorAll('section')];

	const sectionObserverOptions = {
		threshold: 0.55,
	};

	const highlightNavLink = (section) => {
		navLinks.forEach((link) => {
			if (link.hash === section) {
				link.classList.add('current');
			} else if (link.classList.contains('current')) {
				link.classList.remove('current');
			}
		});
	};

	const handleNavLinkClick = (event) => {
		setTimeout(() => {
			highlightNavLink(event.target.hash);
		}, 500);
	};

	const handleNavToggle = () => nav.classList.toggle('opened');

	const handleHeaderLogoObserver = (entries) => entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
	});

	const handleSectionObserver = (entries) => entries.forEach((entry) => {
		if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			const section = `#${entry.target.id}`;

			highlightNavLink(section);
		}
	});

	function init() {
		const headerLogoObserver = new IntersectionObserver(handleHeaderLogoObserver);
		const sectionObserver = new IntersectionObserver(handleSectionObserver, sectionObserverOptions);

		sections.forEach((section) => sectionObserver.observe(section));
		headerLogoObserver.observe(headerLogo);

		navLinks.forEach((link) => link.addEventListener('click', handleNavLinkClick));
		navToggle.addEventListener('click', handleNavToggle);
	}

	return {
		init,
	};
}());
