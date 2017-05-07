window.addEventListener('load', function () {
	const screen = document.querySelector('img[data-screen]');
	const watch = Array.from(document.querySelectorAll('.watch'));
	let array = screen.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ",_,").replace(/\.([^\.]*)$/, ',\.'+'$1').split(",");

	function incrementScreenshot(e) {
		if (this.classList.contains('rect') && array[3] == 5 ||
			this.classList.contains('round') && array[3] == 4) {
			array[3] = 1;
		} else {
			array[3]++;
		}

		this.setAttribute("src", array.join(''));
	}

	function swapWatch(e) {    
		array[1] = this.dataset.watch;
		array[3] = 1;

		screen.setAttribute("src", array.join(''));

		if(this.dataset.screen != screen.classList) {
			screen.classList.remove(screen.classList);
			screen.classList.add(this.dataset.screen);
		}
	}

	screen.addEventListener('click', incrementScreenshot);

	watch.forEach(button => {
		button.addEventListener('click', swapWatch);
	});
});
