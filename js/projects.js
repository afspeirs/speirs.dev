const screen = document.querySelector('img[data-screen]');
const watch = document.querySelectorAll('.watch');

screen.addEventListener('click', function(e) {
    let array = this.src.replace(/_/g, "_,").replace(/\./g, ",.").split(",");

    if (this.classList.contains('rect') && array[1] == 5 ||
        this.classList.contains('round') && array[1] == 4) {
        array[1] = 1;
    } else {
        array[1]++;
    }

    array = array.join('');
    this.setAttribute("src", array)
});

Array.from(watch).forEach(button => {
    button.addEventListener('click', function(e) {
        let array = screen.src.replace(/\/([^\/]*)$/,'\/,'+'$1').replace(/_/g, ",").split(",");

        array[1] = this.dataset.watch + "_1"
        array[2] = array[2].slice(-4);
        array = array.join('');
        screen.setAttribute("src", array);

        if(this.dataset.screen != screen.classList) {
            screen.classList.remove(screen.classList);
            screen.classList.add(this.dataset.screen);
            // console.log(this.dataset.screen);
        }
    });
});