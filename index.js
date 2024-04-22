function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            displayUsers(data.data);
            toggleVisibility();
            toggleVisibilityP()
        })
        .catch(error => {
            console.error(error);
        });
}

function displayUsers(users) {
    const userData = document.querySelector('.user-data');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        const userAvatar = document.createElement('img');
        const userName = document.createElement('h4');
        const userEmail = document.createElement('p');

        userName.textContent = `Name : ${user.first_name} ${user.last_name}`;
        userEmail.textContent = `Email : ${user.email}`;
        userAvatar.src = user.avatar;
        userAvatar.alt = `${user.first_name} ${user.last_name}`;

        userDiv.appendChild(userAvatar);
        userDiv.appendChild(userName);
        userDiv.appendChild(userEmail);
        userData.appendChild(userDiv);
    });
}
function toggleVisibility(){
    const  fetchUsersBtn = document.getElementById('fetchUserBtn')
    fetchUsersBtn.style.display = 'none';
}
function toggleVisibilityP(){
    const toggleP = document.querySelector('p')
    toggleP.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersBtn = document.getElementById('fetchUserBtn');

    fetchUsersBtn.addEventListener('click', () => {
        fetchData();
    });
});
