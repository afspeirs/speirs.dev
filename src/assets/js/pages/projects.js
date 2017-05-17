window.addEventListener('load', function() {
	const screen = document.querySelector('img[data-screen]'),
	      watch = Array.from(document.querySelectorAll('.watch'));
	var array = screen.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

	function incrementScreenshot(e) {
		if (this.classList.contains('rect') && array[3] == 5 || this.classList.contains('round') && array[3] == 4) {
			array[3] = 1;
		} else {
			array[3]++;
		}

		this.setAttribute('src', array.join(''));
	}

	function swapWatch() {
		array[1] = this.dataset.watch;
		array[3] = 1;

		screen.setAttribute('src', array.join(''));

		if(this.dataset.screen != screen.classList) {
			screen.classList.remove(screen.classList);
			screen.classList.add(this.dataset.screen);
		}
	}

	screen.addEventListener('click', incrementScreenshot);

	for(i = 0; i < watch.length; i++) {
		watch[i].addEventListener('click', swapWatch);
	}

	const flipButton = document.querySelectorAll('#flip-button');

	flipButton.forEach(function(e) {
		e.addEventListener('click', function() {
			// console.log(this.parentNode.parentNode.parentNode);
			this.parentNode.parentNode.parentNode.classList.toggle('flip')
		});
	})
});
