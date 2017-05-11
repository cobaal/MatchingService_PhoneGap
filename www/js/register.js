
$(document).ready(function() {

	$("#registerButton").click(function() {
		var _id = $("#id_input").val();
		var _name = $("#name_input").val();
		var _password1 = $("#password1_input").val();
		var _password2 = $("#password2_input").val();
		var _studentNum = $("#studentNum_input").val();
		var _email = $("#email_input").val();

		if(_id == "") {
			alert("아이디를 입력하세요");

		} else if(_name == "") {
			alert("이름을 입력하세요");			
		
		} else if(_password1 == "") {
			alert("비밀번호를 입력하세요");
		
		} else if(_studentNum == "") {
			alert("학번을 입력하세요");
		
		} else if(_email == "") {
			alert("이메일을 입력하세요");
		
		} else if(_password1 != _password2) {
			alert("비밀번호가 일치하지 않습니다.");

		} else {
			$.ajax({
				type: 'POST',
				dataType: 'text',
				url: 'http://221.158.213.34:1700/sql.php',
				data: {index: '1', name:_name, id:_id, passwd:_password1, studentNum:_studentNum, email:_email},
				success: function (data) {
					if(data == "Exist,id") {
						alert("이미 존재하는 아이디 입니다");	
					
					} else if(data == "Success") {
						alert("회원가입 되었습니다. 로그인 해주세요.");
						location.href="index.html";
					}
					
				},
				error: function (request, status, error) {
					alert('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
				}
			});
		}

	});

});



