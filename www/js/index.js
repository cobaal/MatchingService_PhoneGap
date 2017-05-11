
$(document).ready(function() {

  if(getCookie("userInfo") != "") {
    location.href="main.html";
  }

  $("#loginButton").click(function() {
    var _id = $("#id_input").val();
    var _password = $("#password_input").val();

    if(_id == "") {
      alert("아이디를 입력하세요");

    } else if(_password == "") {
      alert("비밀번호를 입력하세요");

    } else {
      $.ajax({
        type: 'POST',
        dataType: 'text',
        url: 'http://221.158.213.34:1700/sql.php',
        data: {index: '2', id:_id, passwd:_password},
        success: function (data) {
          if(data == "Fail") {
            alert("잘못된 정보입니다."); 

          } else if(data == "Success") {
            setCookie("userInfo", _id, 90);
            location.href="main.html";
          }
          
        },
        error: function (request, status, error) {
          alert('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
        }
      });
    }

  });

  $("#registerButton").click(function() {
    location.href="register.html";
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

