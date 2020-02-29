export default (function DarkTheme() {
	let currentTheme = localStorage.getItem('theme') || null;
	const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

	function switchTheme(event) {
		if (event.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
			localStorage.removeItem('theme');
		}
	}

	function init() {
		if (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			currentTheme = 'dark';
		}

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);
			if (currentTheme === 'dark') {
				toggleSwitch.checked = true;
			}
		}

		toggleSwitch.addEventListener('change', switchTheme, false);
	}

	return {
		init,
	};
}());
