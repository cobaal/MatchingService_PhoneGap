window.onload= init;

var edit_state = false;

function init() {
}

function backButtonClick() {
  history.back();
}

function editButtonClick(e) {
  var clicked_button = document.getElementById(e.id);

  if (!edit_state) {
    clicked_button.value = "완료";
    clicked_button.style.color = "#F44949";
    edit_state = true;

  } else {
    clicked_button.value = "편집";
    clicked_button.style.color = "#a3a3a3";
    edit_state = false;
  }
}

function floatingButtonClick() {
  location.href="matching_make.html";
}

