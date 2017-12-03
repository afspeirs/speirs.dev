window.addEventListener('load', function() {
	const imgLeft = document.querySelectorAll('.img-left');
	const imgRight = document.querySelectorAll('.img-right');
	const watch = document.querySelectorAll('.watch');
	const flipButton = document.querySelectorAll('.flip-button');

	function decrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if (array[3] === '1') {
			array[3] = img.dataset.imgcount;
		} else {
			array[3]--;
		}

		img.setAttribute('src', array.join(''));
	}

	function incrementScreenshot() {
		const img = this.parentNode.firstChild;
		const array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if (img.dataset.imgcount && array[3] === img.dataset.imgcount) {
			array[3] = 1;
		} else {
			array[3]++;
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

		img.setAttribute('src', array.join(''));

		img.classList = dataWatch.toLowerCase();
		if (img.classList.value === 'aplite') { img.dataset.imgcount = img.dataset.aplite; }
		else if (img.classList.value === 'basalt') { img.dataset.imgcount = img.dataset.basalt; }
		else if (img.classList.value === 'chalk') { img.dataset.imgcount = img.dataset.chalk; }

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
			e.parentNode.classList.toggle('flip');	// Settings
		});
	});
});
