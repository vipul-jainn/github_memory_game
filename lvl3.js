let popup = document.getElementById("setting-box-pop-up");
let hintpopup = document.getElementById("hint-box-pop-up");
let retrypopup = document.getElementById("retry-box-pop-up");
let bgsong = document.getElementById("background-song");
const timer = document.getElementById("showtimebox");
let backarea = document.getElementById("backgroung-area");
let score = document.getElementById("score");
let rulelvl3 = document.getElementById("firstrule");

// setting popup 
// this function add setting-popup to screen 
function show_setting_popup() {
    popup.classList.add("show-setting-popup");
    backarea.classList.add("backgroung-area-blur");
    clearInterval(myinterval);
}
// this function remove setting-popup from screen 
function close_setting_popup() {
    popup.classList.remove("show-setting-popup");
    backarea.classList.remove("backgroung-area-blur");
    starttime();
}
// switching from setting popup to hint popup
function switch_to_hint() {
    close_setting_popup();
    show_hint_popup();
    backarea.classList.add("backgroung-area-blur");
}
// switching from setting popup to help popup
function switch_to_help() {
    close_setting_popup();
    show_help_popup();
    backarea.classList.add("backgroung-area-blur");
}


//hint popup
// this function add hint-popup to screen 
function show_hint_popup() {
    hintpopup.classList.add("show-hint-popup");
    backarea.classList.add("backgroung-area-blur");
    clearInterval(myinterval);
}
// this function remove hint-popup from screen 
function close_hint_popup() {
    hintpopup.classList.remove("show-hint-popup");
    backarea.classList.remove("backgroung-area-blur");
    starttime();
}
// switching from hint popup to setting popup
function switch_to_settting() {
    close_hint_popup();
    show_setting_popup();
    backarea.classList.add("backgroung-area-blur");
}


//retry popup
// this function add retry popup
function show_retry_popup() {
    retrypopup.classList.add("show-retry-popup");
    backarea.classList.add("backgroung-area-blur");
}
// add retry popup after 8 minutes
// this function remove retry-popup from screen 
function close_retry_popup() {
    retrypopup.classList.remove("show-retry-popup");
}
// restart
function restart() {
    window.location.reload();
}
//retry popup restart btn
function restart_andhide_popup() {
    close_retry_popup();
    restart();
}
//switch_to_settting_andremove_retry_popup()
function switch_to_settting_andremove_retry_popup() {
    close_retry_popup();
    show_setting_popup();
}


// background music 
// function to pause the background music 
function bgpause() {
    bgsong.pause();
}
// function to play the background music 
function bgstart() {
    bgsong.play();
}
// default music
setTimeout(bgstart, 1000);


// time box 
const start = 3;
let time = start * 60;
function update() {
    if(time == 0){
        clearInterval(myinterval);
        setTimeout(show_retry_popup, 800) ;
    }
    const min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec;
    timer.innerHTML = `${min} : ${sec}`
    time--
}

function starttime() {
    myinterval = setInterval(update, 1000);
}


// lvl 3 rule popup 
function show_lvl3_popup() {
    rulelvl3.classList.add("show-rule");
    backarea.classList.add("backgroung-area-blur");
}

function close_lvl3_popup() {
    rulelvl3.classList.remove("show-rule");
    backarea.classList.remove("backgroung-area-blur");
    starttime();
}

setTimeout(show_lvl3_popup, 1500);



// show preview
function showpreview() {
}

//show win popup
function show_win_popup() {
    win.classList.add("show-win-popup");
    backarea.classList.add("backgroung-area-blur");
}


// shuffle button
function shuffle() {
    cards.forEach(card => {
        let randomnum = Math.floor(Math.random() * 16);
        card.style.order = randomnum;
    })
};
// so that at very start the images should be rearranged
setTimeout(shuffle, 100);


// to flip cards 
const cards = document.querySelectorAll('.g-card')
let flippedcard = false;
let lockboard = false;
let firstcard, secondcard;
let movecount = 30;

function flipcard() {

    if (lockboard) return;
    if (this === firstcard) return;
    this.classList.add('flip');
    if (!flippedcard) {
        flippedcard = true;
        firstcard = this;
    } else {
        secondcard = this;
        checkmatch()
    }
    if (this) {
        movecount -= 1;
    }
    score.innerHTML = `Moves: ${movecount}`;
    if (movecount == 0) {
        setTimeout(() => {
            show_retry_popup()
        }, 800);
    }
}



//function to check whether cardsare same or not
let winpopup = [];
function checkmatch() {
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
        disablecard();
        winpopup.push(1);
        movecount += 1;
    } else {
        unflip()
    }
    if (winpopup.length == 10) {
        setTimeout(() => {
            show_win_popup()
        }, 800);
    }
}


//function to remove eventlistener
function disablecard() {
    firstcard.removeEventListener('click', flipcard)
    secondcard.removeEventListener('click', flipcard)
    resetboard();
}


//removing flip class
function unflip() {
    lockboard = true;
    setTimeout(() => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetboard()
    }, 1000);
}

function resetboard() {
    [flippedcard, lockboard] = [false, false];
    [firstcard, secondcard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipcard))


// For win popup
let scoreshow = document.getElementById("win-score");
let win = document.getElementById("winy");

function show_win_popup() {
    win.classList.add("show-win-popup");
    backarea.classList.add("backgroung-area-blur");
}
