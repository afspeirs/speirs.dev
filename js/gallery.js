window.onload = function() { 
    const imgdiv = document.querySelector('#gallery');
    for (var i = 1; i <= 4; i++) {
        imgdiv.innerHTML += '<a class="img-wrap" href="../img/gallery/large/img_' + i + '.jpg"><img src="../img/gallery/img_' + i + '.jpg"></img></a>';
    }
};

window.onresize = function(e) {
    const imgwrap = document.querySelector('img').naturalWidth;
    const imgwrapArray = Array.from(document.getElementsByClassName("img-wrap"));

    if(imgwrap > window.innerWidth) {
        let imgwidth = document.querySelector('img').getBoundingClientRect().width;

        imgwrapArray.forEach(function(element) {
            element.style.height = imgwidth * 0.75 + 'px';
        });
    } else {
        imgwrapArray.forEach(function(element) {
            element.style.height = 'initial';
        });
    }
}