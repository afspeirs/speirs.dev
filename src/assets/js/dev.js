const container = document.querySelector('#container');
let debug = sessionStorage.getItem('debug') || sessionStorage.setItem('debug', 'false');

const getDebugState = () => (debug === 'true') && container.classList.add('debug');

const toggleDebug = () => {
	if (debug === 'true') {
		sessionStorage.setItem('debug', 'false');
		container.classList.remove('debug');
		debug = 'false';
	} else {
		sessionStorage.setItem('debug', 'true');
		container.classList.add('debug');
		debug = 'true';
	}
};

const handleKeyDown = (event) => {
	// SHIFT + D = Toggle debug class on #container
	if (event.shiftKey && event.code === 'KeyD') {
		toggleDebug();
	}
};

getDebugState();
document.addEventListener('keydown', handleKeyDown, false);
