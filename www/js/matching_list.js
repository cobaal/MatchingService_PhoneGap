
$(document).ready(function() {

  var name = getCookie("userInfo");
  $("#name_button").attr("value", name + " 님");

  $("#back_button").click(function() {
    history.back();
  });

  $("#menu_button").click(function() {
    var submenu = $("#navigation");
    var blackPanel = $("#black");

    if( submenu.is(":visible") ){
      submenu.slideUp();
    }else{
      submenu.slideDown();
    }

    if( blackPanel.is(":visible") ){
      blackPanel.fadeOut();
      $("body").unbind("touchmove");
      setTimeout(visible, 500);
    }else{
      blackPanel.fadeIn();
      $("body").css({overflow:"hidden"}).bind("touchmove", function(e){e.preventDefault()});
      $(".floating_button").css("display", "none");
    }
  })

  $("#black").click(function() {
    var submenu = $("#navigation");
    var blackPanel = $("#black");

    if( submenu.is(":visible") ){
      submenu.slideUp();
    }else{
      submenu.slideDown();
    }

    if( blackPanel.is(":visible") ){
      blackPanel.fadeOut();
      $("body").unbind("touchmove");
      setTimeout(visible, 500);
    }else{
      blackPanel.fadeIn();
      $("body").css({overflow:"hidden"}).bind("touchmove", function(e){e.preventDefault()});
      $(".floating_button").css("display", "none");
    }
  })

  function visible() {
    $(".floating_button").css("display", "block");
  }

  $("#logout_button").click(function() {
    deleteCookie("userInfo");
    location.href="index.html";
  });

  $("#edit_button").click(function() {
    if($(this).attr("value") == "편집") {
      $(this).attr("value", "완료");
      $(this).css("color", "#F44949");

    } else {
      $(this).attr("value", "편집");  
      $(this).css("color", "#a3a3a3");
    }
    
  });

  $(".floating_button").click(function() {
    location.href="matching_make.html";
  });

  function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
  }

  function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
  }

  function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
      start += cookieName.length;
      var end = cookieData.indexOf(';', start);
      if(end == -1)end = cookieData.length;
      cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
  }

});
















// window.onload= init;

// var edit_state = false;

// function init() {
// }

// function backButtonClick() {
//   history.back();
// }

// function editButtonClick(e) {
//   var clicked_button = document.getElementById(e.id);

//   if (!edit_state) {
//     clicked_button.value = "완료";
//     clicked_button.style.color = "#F44949";
//     edit_state = true;

//   } else {
//     clicked_button.value = "편집";
//     clicked_button.style.color = "#a3a3a3";
//     edit_state = false;
//   }
// }

// function floatingButtonClick() {
//   location.href="matching_make.html";
// }
