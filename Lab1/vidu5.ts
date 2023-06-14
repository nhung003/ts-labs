function kiemtra(){
    var username = document.frmlogin.username.value;
    var password = document.frmlogin.password.value;
    console.log(username, password);
    if(password == "" && username == ""){
        document.getElementById("baoloi").innerHTML = "Ban chua nhap username và password";
        return false;
    }else if(password == ""){
        document.getElementById("baoloi").innerHTML = "Ban chua nhap password";
        return false;
    }else if(username == ""){
        document.getElementById("baoloi").innerHTML = "Ban chua nhap username";
        return false;
    }else if(password != "" && username != ""){
        document.getElementById("baoloi").innerHTML = "Dang nhap thanh cong";
        return false;
    }
    return true;
}