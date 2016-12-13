//” œ‰≈–∂œ
function testEmail(email) {
    var a = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z][a-z.]{2,8}$/;
    return a.test(email)
}

// ÷ª˙∫≈¬Î≈–∂œ
function chkPhone(phoneNum){
    var re = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;
    var phone = phoneNum;
    if(!re.test(phone)){
        return false;
    }else if(phone.length < 11){
        return false;
    }else if(phone.length>11){
        return false;
    }
    return true;
}

//”√ªß√˚≈–∂œ
function checkUsername(name){
    var n=/^[a-zA-Z]\w{6,12}$/ig;
    return n.test(name);
}
//√‹¬Î≈–∂œ
function pwdRight(pwdBox,pwdFromDB){
    if(pwdBox.val()===pwdFromDB){
        return true;
    }else{
        return false;
    }
}

