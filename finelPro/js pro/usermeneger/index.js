let P = document.getElementById('greeting');
let Current = JSON.parse(localStorage.getItem('current'));
if (!Current) {
    location.href = "./login.html";
};
P.innerText = `welcome ${Current.name}`
let backToLogIn = document.getElementById('logoutButton');
backToLogIn.addEventListener('click', () => {
    localStorage.removeItem('current');
    location.href = "./login.html";
});