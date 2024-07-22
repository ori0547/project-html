let fullname = document.getElementById('nameInput');
let username = document.getElementById('userNameInput');
let email = document.getElementById('emailInput');
let pass = document.getElementById('passwordInput');
let registerBtn = document.getElementById('registerButton');


function containLetter(input) {
    for (let i = 0; i < input.length; i++) {
        if ((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')) {
            return true;
        }
    }
    return false;
}
function containSymbol(input) {
    let sybols = "!@#$%^&*()_+=-[]{};':\"\\|,.<>/?"
    for (let char of input) {
        if (sybols.includes(char)) {
            return true;
        }
    }
    return false;
}
function validateFields(name, username, password, email) {
    if (name.length < 2) {
        alert('you mast have 2 letters on your name')
        return false;
    }
    if (username.length < 2) {
        alert('you mast have 2 letters on your username')
        return false;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find((user) => user.username == username);
    if (foundUser) {
        alert('this user name alrady taken');
        return false;
    }
    let foundEmail = users.find((user) => user.email == email);
    if (foundEmail) {
        alert('this email alrady taken');
        return false;
    }

    if (password.length < 8 || password.length > 20 || !containLetter(password) || !containSymbol(password)) {
        alert('you mast have password with 8-20 lerrer and minimum 1 symbol')
        return false;
    }
    return true;
}
function registerUser(name, username, email, password) {
    let date = new Date()
    let user = {
        name: name,
        username: username,
        email: email,
        password: password,
        isAdmin: false,
        lastLogged: date,
    };
    let users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
        users = [];
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location = "index.html"
}
registerBtn.addEventListener('click', () => {
    if (validateFields(fullname.value, username.value, pass.value, email.value) == true) {
        registerUser(fullname.value, username.value, email.value, pass.value)
    } else {
        return;
    }
})