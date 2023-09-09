let userInfo = {
    email: 'abc@gmail.com',
    password: '1234567890',
}

let emailChecker = function(Dets){
    let myEmail = Dets.email;
    if((myEmail.includes('@')) && (myEmail.length > 6)){
        return true;
    }
    return false;
}

let passChecker = function(Dets){
    let myPass = Dets.password;
    if((myPass.includes('123')) && (myPass.length > 8)){
        return true;
    }
    return false;
}