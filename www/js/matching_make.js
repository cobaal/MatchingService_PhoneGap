window.onload= init;

var gender_state = "전체성별";
var grade_state = [0, 0, 0, 0, 0];
var grade_tag = "";

var gender_all_button = document.getElementById("gender_all_button"); 
var gender_M_button = document.getElementById("gender_M_button"); 
var gender_F_button = document.getElementById("gender_F_button"); 

var grade_button = new Array(5);
grade_button[0] = document.getElementById("grade_all_button"); 
grade_button[1] = document.getElementById("grade_1_button"); 
grade_button[2] = document.getElementById("grade_2_button"); 
grade_button[3] = document.getElementById("grade_3_button"); 
grade_button[4] = document.getElementById("grade_4_button"); 

var grade_gap_button = new Array(6);
grade_gap_button[0] = document.getElementById("grade_gap_1"); 
grade_gap_button[1] = document.getElementById("grade_gap_2"); 
grade_gap_button[2] = document.getElementById("grade_gap_3"); 
grade_gap_button[3] = document.getElementById("grade_gap_4"); 
grade_gap_button[4] = document.getElementById("grade_gap_5"); 
grade_gap_button[5] = document.getElementById("grade_gap_6");

var keyword_input = document.getElementById("keyword_input");
var major_select = document.getElementById("major_select");
var number_input = document.getElementById("number_input");

function init() {  
  gender_all_button.click();
  grade_button[0].click();
}

function selectGenderButtonClick(e) 
{
  var clicked_button = document.getElementById(e.id);
  
  gender_all_button.style.color="#555555";
  gender_all_button.style.background="rgba(0,0,0,0)";
  gender_M_button.style.color="#555555";
  gender_M_button.style.background="rgba(0,0,0,0)";
  gender_F_button.style.color="#555555";
  gender_F_button.style.background="rgba(0,0,0,0)";
  
  clicked_button.style.color="#FFFFFF";
  clicked_button.style.background="#F44949";

  if (clicked_button.id == gender_all_button.id) {
    gender_state = "전체성별";

  } else if (clicked_button.id == gender_M_button.id) {
    gender_state = "남자";

  } else if (clicked_button.id == gender_F_button.id) {
    gender_state = "여자";
  }
}

function selectGradeButtonClick(e) 
{
  //init
  for (var i = 0; i < 5; i++) {
    grade_button[i].style.color="#555555";
    grade_button[i].style.background="rgba(0,0,0,0)";
  }

  for (var i = 0; i < 6; i++) {
    grade_gap_button[i].style.background="rgba(0,0,0,0)";
  }

  //find
  for (var i = 0; i < 5; i++) {
    if (e.id == grade_button[i].id) {
      if (i == 0) {
        grade_state[0] = 1;
        for (var k = 1; k < 5; k++)
          grade_state[k] = 0;

      } else {
        grade_state[i] = (grade_state[i] + 1) % 2;
        grade_state[0] = 0;

        if (grade_state[1] + grade_state[2] + grade_state[3] + grade_state[4] == 0 )
          grade_state[0] = 1;

        if (grade_state[1] + grade_state[2] + grade_state[3] + grade_state[4] == 4 ) {
          grade_state[0] = 1;
          grade_state[1] = 0;
          grade_state[2] = 0;
          grade_state[3] = 0;
          grade_state[4] = 0;
        }
      }

      for (var k = 0; k < 5; k++) {
        if (grade_state[k] == 1) {
          grade_button[k].style.color="#FFFFFF";
          grade_button[k].style.background="#F44949";
          grade_gap_button[k].style.background="#F44949";
          grade_gap_button[k + 1].style.background="#F44949";
        }
      }
    }
  }
  // alert(grade_state[0] + " " + grade_state[1] + " " + grade_state[2] + " " + grade_state[3] + " " + grade_state[4] + " ");
}

function backButtonClick() {
  history.back();
}

function startButton() {
  if (keyword_input.value == "") {
    alert("키워드를 입력하세요");
    return;
  }

  if (number_input.value == "") {
    alert("인원수를 입력하세요");
    return;
  }

  if (grade_state[0] == 1) {
    grade_tag = "전체";
  
  } else {
    grade_tag = "";
    for (var i = 1; i < 5; i++) {
      if (grade_state[i] == 1) {
        grade_tag += i + "_"
      }
    }
  }
  grade_tag += "학년";

  alert(keyword_input.value + " #" + gender_state + " #" + grade_tag + " #" +major_select.value + " #" + number_input.value + "명");
}
