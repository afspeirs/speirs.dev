window.addEventListener("load", function () {
	const e = document.querySelector("#gallery");
	for (var a = 1; a <= 4; a++) e.innerHTML += '<a class="img-wrap" href="assets/img/gallery/large/img_' + a + '.jpg"><img src="assets/img/gallery/img_' + a + '.jpg"></img></a>'
});