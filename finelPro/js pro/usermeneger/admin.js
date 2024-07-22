let users = JSON.parse(localStorage.getItem('users')) || [];
let dataForTable = "";
users.forEach((user, index) => {
    dataForTable += `
            <tr>
               <td>${user.name}</td> 
               <td>${user.username}</td> 
               <td>${user.email}</td> 
               <td>${user.lastLogged}</td> 
               <td>${user.isAdmin}</td> 
               <td>
                <button onclick="deleteUser(${index})">DELETE</button>
            </td> 
            </tr>
            `;
})
let tableBody = document.getElementById('tableDataBody');
tableBody.innerHTML = dataForTable;
function deleteUser(index) {
    if (confirm("are you sure you want to delete this user?")) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
}