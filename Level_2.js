let winy = document.getElementById("winyy");

// win popup
// this function to show win popup
function show_winy_popup() {
    winy.classList.add("show-win-popup");
    backarea.classList.add("backgroung-area-blur");
}

//function to check whether cards are same or not
let winypopup = [ ];
function checkmatch() {
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
        disablecard();
        movecount -= 1;
        winypopup.push(1);
    } else {
        unflip();
    }
    if(winypopup.length == 8){
        setTimeout(() => {
            show_winy_popup()
        }, 800);
    }
}
