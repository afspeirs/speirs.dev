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
		const img = this.parentNode.parentNode.parentNode.firstChild.firstChild;
		var array = img.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ',_,').replace(/\.([^\.]*)$/, ',\.'+'$1').split(',');

		array[1] = this.dataset.watch;
		array[3] = 1;

		img.dataset.screen = this.dataset.watch;
		img.setAttribute('src', array.join(''));

		if(img.dataset.screen != img.classList) {
			img.classList.remove(img.classList);
			img.classList.add(this.dataset.screen);
		}
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
			this.parentNode.parentNode.parentNode.classList.toggle('flip')
		});
	});
});
