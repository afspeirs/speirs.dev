const container = document.querySelector('#container');
let debug = sessionStorage.getItem('debug') || sessionStorage.setItem('debug', 'false');

function getDebugState() {
	if (debug === 'true') container.classList.add('debug');
}
function toggleDebug() {
	if (debug === 'true') {
		sessionStorage.setItem('debug', 'false');
		container.classList.remove('debug');
		debug = 'false';
	} else {
		sessionStorage.setItem('debug', 'true');
		container.classList.add('debug');
		debug = 'true';
	}
}
function keyPress(key) {
	// Press both Shift and D to togle the debug class on the container
	if (key.keyCode === 68 && key.shiftKey) toggleDebug();
}

getDebugState();
document.addEventListener('keydown', keyPress, false);

// TODO - make a module
