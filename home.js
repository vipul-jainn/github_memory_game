let help_popup = document.getElementById("help-box-pop-up");
let rules_popup = document.getElementById("rules-box-pop-up");

// help popup 
// this function add help-popup to screen 
function show_help_popup(){
    help_popup.classList.add("show-help-popup");
    backarea.classList.add("backgroung-area-blur");
}
// this function remove help-popup from screen 
function close_help_popup(){
    help_popup.classList.remove("show-help-popup");
    backarea.classList.remove("backgroung-area-blur");
}
// switching from help popup to setting popup
function switch_to_settting_from_help() {
    close_help_popup();
    show_setting_popup();
}
// rules popup 
// this function add rules-popup to screen 
function show_rules_popup(){
    close_help_popup();
    rules_popup.classList.add("show-rules-popup")
    backarea.classList.add("backgroung-area-blur")
}
// this function remove rules-popup from screen 
function close_rules_popup(){
    rules_popup.classList.remove("show-rules-popup")
    backarea.classList.remove("backgroung-area-blur")
}   