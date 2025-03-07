// const button = document.getElementById('login');
// const login = 'login.htm'; // Replace with your actual file name

// button.addEventListener('click', () => {
//     window.location.href = login;
// });
let a = document.querySelector("#login");
a.onclick = () => {
    alert("hi");
    window.location.href = "login.htm";
}