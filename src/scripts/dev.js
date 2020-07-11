const { body } = document;
let debug = sessionStorage.getItem('debug') || sessionStorage.setItem('debug', 'false');

const getDebugState = () => (debug === 'true') && body.classList.add('debug');

const toggleDebug = () => {
	if (debug === 'true') {
		sessionStorage.setItem('debug', 'false');
		body.classList.remove('debug');
		debug = 'false';
	} else {
		sessionStorage.setItem('debug', 'true');
		body.classList.add('debug');
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
document.addEventListener('keydown', handleKeyDown);
