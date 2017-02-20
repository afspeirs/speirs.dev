let imgWrapArray;

window.onload = function() { 
    const imgdiv = document.querySelector('#gallery');
    for (var i = 1; i <= 4; i++) {
        imgdiv.innerHTML += '<a class="img-wrap" href="../img/gallery/large/img_' + i + '.jpg"><img src="../img/gallery/img_' + i + '.jpg"></img></a>';
    }
    
    imgWrapArray = Array.from(document.getElementsByClassName("img-wrap"));
};

window.onresize = function(e) {
    const imgNaturalWidth = document.querySelector('img').naturalWidth;
    let img = document.querySelector('img').getBoundingClientRect();

    if(imgNaturalWidth > window.innerWidth) {
        imgWrapArray.forEach(function(element) {
            element.style.height = img.width * 0.75 + 'px';
        });
    } else if (img.height / img.width != 0.75){
        imgWrapArray.forEach(function(element) {
            element.style.height = '';
            console.log('boo');
        });
    }
    // console.log([imgNaturalWidth, img.width, img.height]);
}