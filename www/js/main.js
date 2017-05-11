
$(document).ready(function() {

  var name = getCookie("userInfo");
  $("#name_button").attr("value", name + " 님");
  alert(name);

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
      visible();
      setTimeout(visible, 500);
    }else{
      blackPanel.fadeIn();
      $("body").css({overflow:"hidden"}).bind("touchmove", function(e){e.preventDefault()});
      $("#arrow_1").css("display", "none");
      $("#arrow_2").css("display", "none");
      $("#arrow_3").css("display", "none");
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
    }
  })

  function visible() {
    $("#arrow_1").css("display", "block");
    $("#arrow_2").css("display", "block");
    $("#arrow_3").css("display", "block");
  }

  $("#logout_button").click(function() {
    deleteCookie("userInfo");
    location.href="index.html";
  });

  $("#matching_button").click(function() {
    location.href="matching_list.html";
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

