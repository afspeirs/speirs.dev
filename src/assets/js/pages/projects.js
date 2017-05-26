window.addEventListener('load', function() {
	const screen = document.querySelectorAll('img[data-screen]'),
	      imgLeft = document.querySelectorAll('#img-left'),
	      imgRight = document.querySelectorAll('#img-right'),
	      watch = document.querySelectorAll('.watch'),
	      flipButton = document.querySelectorAll('#flip-button');

	function decrementScreenshot() {
		var img = this.parentNode.firstChild;
		var array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if(array[3] == 1) {
			if(img.dataset.screen === "Aplite") {
				array[3] = img.dataset.aplite;
			}
			if(img.dataset.screen === "Basalt") {
				array[3] = img.dataset.basalt;
			}
			if(img.dataset.screen === "Chalk") {
				array[3] = img.dataset.chalk;
			}
		} else {
			array[3]--;
		}

		img.setAttribute('src', array.join(''));
	}

	function incrementScreenshot() {
		var img = this.parentNode.firstChild;
		var array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		if((img.dataset.screen === "Aplite" && array[3] === img.dataset.aplite) ||
		   (img.dataset.screen === "Basalt" && array[3] === img.dataset.basalt) ||
		   (img.dataset.screen === "Chalk" && array[3] === img.dataset.chalk)) {
			array[3] = 1
		} else {
			array[3]++;
		}

		img.setAttribute('src', array.join(''));
	}

	function swapWatch() {
		const flipper = this.parentNode.parentNode.parentNode,
		      img = this.parentNode.parentNode.parentNode.firstChild.firstChild,
		      watch = this.dataset.watch;
		var array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		array[1] = watch;
		array[3] = 1;

		img.id = watch.toLowerCase();
		flipper.id = watch.toLowerCase();
		flipper.firstChild.id = watch.toLowerCase();
		flipper.lastChild.id = watch.toLowerCase();
		img.setAttribute('src', array.join(''));

		// Flip back to watchface
		flipper.parentNode.classList.toggle('flip');
	}


	imgLeft.forEach(function(e) {
		e.addEventListener('click', decrementScreenshot);
	});

	imgRight.forEach(function(e) {
		e.addEventListener('click', incrementScreenshot);
	});

	watch.forEach(function(e) {
		e.addEventListener('click', swapWatch);
	});

	flipButton.forEach(function(e) {
		e.addEventListener('click', function() {
			this.parentNode.classList.toggle('flip');	// Settings
		});
	});
});
