const DarkTheme = (function DarkTheme() {
	let currentTheme = localStorage.getItem('theme') || null;
	const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

	function switchTheme(event) {
		if (event.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
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

export default DarkTheme;
