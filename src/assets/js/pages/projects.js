window.addEventListener('load', function() {
	// const screen = document.querySelectorAll('img[data-screen]');
	const imgLeft = document.querySelectorAll('#img-left');
	const imgRight = document.querySelectorAll('#img-right');
	const watch = document.querySelectorAll('.watch');
	const flipButton = document.querySelectorAll('#flip-button');

	function decrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if (array[3] === 1) {
			if (img.id === 'aplite') {
				array[3] = img.dataset.aplite;
			}
			if (img.id === 'basalt') {
				array[3] = img.dataset.basalt;
			}
			if (img.id === 'chalk') {
				array[3] = img.dataset.chalk;
			}
		} else {
			array[3] -= 1;
		}

		img.setAttribute('src', array.join(''));
	}

	function incrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if ((img.id === 'aplite' && array[3] === img.dataset.aplite) ||
			(img.id === 'basalt' && array[3] === img.dataset.basalt) ||
			(img.id === 'chalk' && array[3] === img.dataset.chalk)) {
			array[3] = 1;
		} else {
			array[3] += 1;
		}

		img.setAttribute('src', array.join(''));
	}

	function swapWatch() {
		const flipper = this.parentNode.parentNode.parentNode;
		const img = this.parentNode.parentNode.parentNode.firstChild.firstChild;
		const dataWatch = this.dataset.watch;
		const array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		array[1] = dataWatch;
		array[3] = 1;

		img.id = dataWatch.toLowerCase();
		flipper.id = dataWatch.toLowerCase();
		flipper.firstChild.id = dataWatch.toLowerCase();
		flipper.lastChild.id = dataWatch.toLowerCase();
		img.setAttribute('src', array.join(''));

		// Flip back to watchface
		flipper.parentNode.classList.toggle('flip');
	}


	imgLeft.forEach((e) => {
		e.addEventListener('click', decrementScreenshot);
	});

	imgRight.forEach((e) => {
		e.addEventListener('click', incrementScreenshot);
	});

	watch.forEach((e) => {
		e.addEventListener('click', swapWatch);
	});

	flipButton.forEach((e) => {
		e.addEventListener('click', () => {
			this.parentNode.classList.toggle('flip');	// Settings
		});
	});
});
