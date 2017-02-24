window.addEventListener('load', function (){
	const imgdiv = document.querySelector('#gallery');
	for (var i = 1; i <= 4; i++) {
		imgdiv.innerHTML += '<a class="img-wrap" href="../img/gallery/large/img_' + i + '.jpg"><img src="../img/gallery/img_' + i + '.jpg"></img></a>';
	}
});