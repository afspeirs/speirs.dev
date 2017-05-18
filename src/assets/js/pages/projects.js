window.addEventListener('load', function() {
	const screen = document.querySelectorAll('img[data-screen]'),
	      watch = document.querySelectorAll('.watch'),
	      flipButton = document.querySelectorAll('#flip-button');

	function incrementScreenshot() {
		var array = this.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		array[3]++;
		this.setAttribute('src', array.join(''));

		this.onerror = function() {
			array[3] = 1
			this.setAttribute('src', array.join(''));
		}
	}

	function swapWatch() {
		const img = this.parentNode.parentNode.parentNode.firstChild.firstChild;
		var array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		array[1] = this.dataset.watch;
		array[3] = 1;

		img.setAttribute('src', array.join(''));

		if(img.dataset.screen != img.classList) {
			img.classList.remove(img.classList);
			img.classList.add(this.dataset.screen);
		}
	}


	screen.forEach(function(e) {
		e.addEventListener('click', incrementScreenshot);
	});

	watch.forEach(function(e) {
		e.addEventListener('click', swapWatch);
	});

	flipButton.forEach(function(e) {
		e.addEventListener('click', function() {
			this.parentNode.parentNode.parentNode.classList.toggle('flip')
		});
	});
});
