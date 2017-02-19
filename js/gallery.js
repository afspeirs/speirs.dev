window.onload = function() { 
    const imgdiv = document.querySelector('#gallery');
    for (var i = 1; i <= 4; i++) {
        imgdiv.innerHTML += '<img src="../img/gallery/img_' + i + '.jpg"></img>';			
    }

    const imgtest = document.querySelector('img');

    imgtest.addEventListener('click', function(e) {
        console.log(this);
        imgtest.style.width = this.naturalWidth /3;
        // .add('width', this.naturalWidth / 3);
        console.log(imgtest.naturalWidth);
    });
};