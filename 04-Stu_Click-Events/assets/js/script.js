var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

function getPasswordChar() {

    return  String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

function passwordGenerator(num) {
    var password = '';

    for (let i = 0; i < num; i++) {
        password += getPasswordChar();
    }
    return password;
}

passwordBtnEl.on('click', function () {
    var newPassword = passwordGenerator(15);   
    passwordDisplayEl.text(newPassword);
    
})