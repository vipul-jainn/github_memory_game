// For background music 
let bgsong = document.getElementById("background-song");

function bgpause() {
    bgsong.pause();
}

function bgstart() {
    bgsong.play();
}

setTimeout(bgstart, 1000);


// For popups[Setting, hint, retry]
let popup = document.getElementById("setting-box-pop-up");
let hintpopup = document.getElementById("hint-box-pop-up");
let backarea = document.getElementById("backgroung-area");
let retrypopup = document.getElementById("retry-box-pop-up");

// setting popup
function show_setting_popup() {
    popup.classList.add("show-setting-popup");
    backarea.classList.add("backgroung-area-blur");
}

function close_setting_popup() {
    popup.classList.remove("show-setting-popup");
    backarea.classList.remove("backgroung-area-blur");
}

function switch_to_hint() {
    close_setting_popup();
    show_hint_popup();
    backarea.classList.add("backgroung-area-blur");
}

function switch_to_help() {
    close_setting_popup();
    show_help_popup();
    backarea.classList.add("backgroung-area-blur");
}

//hint popup
function show_hint_popup() {
    hintpopup.classList.add("show-hint-popup");
    backarea.classList.add("backgroung-area-blur");
}

function close_hint_popup() {
    hintpopup.classList.remove("show-hint-popup");
    backarea.classList.remove("backgroung-area-blur");
}

function switch_to_settting() {
    close_hint_popup();
    show_setting_popup();
    backarea.classList.add("backgroung-area-blur");
}

//retry popup
function show_retry_popup() {
    retrypopup.classList.add("show-retry-popup");
    backarea.classList.add("backgroung-area-blur");
}

function close_retry_popup() {
    retrypopup.classList.remove("show-retry-popup");
}

function restart() {
    window.location.reload();
}

function restart_andhide_popup() {
    close_retry_popup();
    restart();
}

function switch_to_settting_andremove_retry_popup() {
    close_retry_popup();
    show_setting_popup();
}


// Fliping card , checking card & counting moves
const cards = document.querySelectorAll('.g-card')
let score = document.getElementById("score");
let flippedcard = false;
let lockboard = false;
let firstcard, secondcard;
let movecount = 0;

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
        movecount += 1;
    }
    score.innerHTML = `Moves: ${movecount}`;

    // show win score
    scoreshow.innerHTML = "Moves: " + movecount;
}


//function to check whether cards are same or not
let winpopup = [];
function checkmatch() {
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
        disablecard();
        winpopup.push(1);
        movecount -= 1;
    } else {
        unflip();
    }
    if (winpopup.length == 6) {
        setTimeout(() => {
            show_win_popup()
        }, 800);
    }
}

//function to remove eventlistener
function disablecard() {
    firstcard.removeEventListener('click', flipcard);
    secondcard.removeEventListener('click', flipcard);
    resetboard()
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


cards.forEach(card => card.addEventListener('click', flipcard));


// shuffling images
function shuffle() {
    cards.forEach(card => {
        let random_number = Math.floor(Math.random() * 16);
        card.style.order = random_number;
    })
};

setTimeout(shuffle, 100);


// For seeing next level view
let preview = document.getElementById("previewshow");

function showpreview() {
    preview.classList.add("show-preview-popup")
    backarea.classList.add("backgroung-area-blur")
}

function close_preview_popup() {
    preview.classList.remove("show-preview-popup")
    backarea.classList.remove("backgroung-area-blur")
}


// For win popup
let scoreshow = document.getElementById("win-score");
let win = document.getElementById("winy");

function show_win_popup() {
    win.classList.add("show-win-popup");
    backarea.classList.add("backgroung-area-blur");
}

