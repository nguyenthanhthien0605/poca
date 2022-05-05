// var check = false;
$(document).ready(function () {

    var txtName = $("#name");
    function checkName(){
        var re = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/; //
        console.log(txtName.val());
        if (txtName.val() == "")
        {
            alert("Bắt buộc nhập");
            return false;
        }
            
        if (!re.test(txtName.val()))
        {
            alert("Các kí tự đầu tiên phải được viết hoa");
            return false;
        }
            return true;
    };
    txtName.blur(checkName);
    var txtUserName = $("#username");
    function checkUserName(){
            var re = /^([a-z0-9]){3,50}$/;//
            if (txtUserName.val() == "")
            {
                alert("Bắt buộc nhập");
                return false;
            }
            if (!re.test(txtUserName.val()))
            {
                alert("Username phải ít nhất 3 ký tự ");
                return false;
            }
            return true;
    };
    txtUserName.blur(checkUserName);
    
    var txtEmail = $("#Email");
    function checkEmail(){
        
        if(txtEmail.val() == "")
        {
            alert("Bắt buộc nhập");
            return false;
        }
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if( !re.test(txtEmail.val()))
        {
            alert("Email không đúng định dạng");
            return false;
        }
        return true;
    };
    txtEmail.blur(checkEmail);
    
    var txtPassword = $("#pswd");
    function checkPassWord(){
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(txtPassword.val() == "")
        {
            alert("Bắt buộc nhập");
            return false;
        }
        if( !re.test(txtPassword.val()))
        {
            alert("Mật khẩu phải có ít nhất 1 chữ cái và 1 chữ số, độ dài tối thiếu 8 ký tự ");
            return false;
        }
        return true;
    };
    txtPassword.blur(checkPassWord);

    // $("signup").click(function(){
        function check(){
            if(!checkUserName || !checkName || !checkPassWord || !checkEmail)
            {
                alert("nhập lại");
                return false;
            }
            // check = true;
            return true;
        };
});

    function signUp(){
        var tk= $("#username");
        var ps= $("#pswd");
        if(localStorage.user)
        {
                var re= JSON.parse(localStorage.user);
                re.push({username: tk.val(), password: ps.val()});
                localStorage.user= JSON.stringify(re);
                $("#myModal_signin").modal('show');
                $("#myModal_signup").modal('hide');
                alert("Sign Up Successfully");
                return true;
        }
        else
        {
            localStorage.user= JSON.stringify([{username: tk.val(), password: ps.val()}]);
            // alert("Sign Up Unsuccessfully");
            return false;
        }
    };

    function signIn(){
        var tk= $("#user_name");
        var ps= $("#pwd");
        // localStorage.user= JSON.stringify({username: "Thanh Thien", password: "123"});
        console.log(JSON.parse(localStorage.user));
        var check= false;
        var useList= JSON.parse(localStorage.user);
        useList.forEach(value=> {
            if(value.username == tk.val() && value.password == ps.val())
            {
                check = true;
                window.localStorage.setItem('username', tk.val());
            }
        })
        // console.log(check);
        console.log(tk.val(), ps.val());
        if(check == true)
        {
            alert("Sign In Successfully");
            $("#myModal_signin").modal('hide');
            loadUser();
        }
        else
            alert("Sign In Unsuccessfully");

    };
    
    function logout(){
        window.localStorage.removeItem('username');
		location.reload();
    };

    function loadUser(){
        if(window.localStorage.getItem('username') != null){
			document.getElementById("signup").innerHTML = window.localStorage.getItem('username');
			document.getElementById("logout").style = "display:inline-block;";
			document.getElementById("login").style = "display:none;";
		}
    }