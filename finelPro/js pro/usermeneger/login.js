document.getElementById('loginButton').addEventListener('click', () => {
    let usernameInput = document.getElementById('usernameInput').value;
    let passwordInput = document.getElementById('passwordInput').value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newDate = new Date();
    let isLogin = users.find((user) => user.username == usernameInput && user.password == passwordInput);

    if (isLogin) {
        isLogin.lastLogged = newDate;
        let updatedUsers = users.map((user) =>
            user.username == usernameInput ? isLogin : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("current", JSON.stringify(isLogin));
        if (isLogin.isAdmin) {
            window.location = "adminCrm.html";
        } else {
            window.location = "index.html";
        }
    } else {
        alert('The password or username you gave are wrong');
    }
});