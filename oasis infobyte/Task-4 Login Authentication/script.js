const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const securedPage = document.getElementById('secured-page');

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // In a real-world scenario, you would perform server-side authentication here

    // For simplicity, let's assume a valid user is 'user' with password 'password'
    if (username === 'user' && password === 'password') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        securedPage.style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // In a real-world scenario, you would send this information to the server to create a new user

    alert(`User ${username} registered successfully!`);
}

function logout() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    securedPage.style.display = 'none';
}
