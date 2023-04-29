let preview1 = document.getElementById("previewshow");
let preview2 = document.getElementById("showpreview2");
let preview3 = document.getElementById("showpreview3");

function showpreview() {
    preview1.classList.add("show-preview-popup")
    backarea.classList.add("backgroung-area-blur")
}

function close_preview_popup() {
    preview1.classList.remove("show-preview-popup")
    backarea.classList.remove("backgroung-area-blur")
}

function show2(){
    preview2.classList.add("show-preview-popup")
    backarea.classList.add("backgroung-area-blur")
}

function close2() {
    preview2.classList.remove("show-preview-popup")
    backarea.classList.remove("backgroung-area-blur")
}

function show3(){
    preview3.classList.add("show-preview-popup")
    backarea.classList.add("backgroung-area-blur")
}

function close3() {
    preview3.classList.remove("show-preview-popup")
    backarea.classList.remove("backgroung-area-blur")
}