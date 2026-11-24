

localStorage.setItem("email", "test@gmail.com");
localStorage.setItem("password", "12345");

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        document.getElementById("msg").innerHTML = "Login Successful";
    } else {
        document.getElementById("msg").innerHTML = "Invalid email or password";
    }
}
