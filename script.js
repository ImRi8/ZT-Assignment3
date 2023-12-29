document.getElementById('username').addEventListener('input', function() {
    document.getElementById('username-error').textContent = ''; // Clear the username error message on input change
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('password-error').textContent = ''; // Clear the password error message on input change
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Email format validation using a regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailValid = emailRegex.test(username);

    // Password requirements
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    let isPasswordValid = passwordRegex.test(password);

    if (isEmailValid && isPasswordValid) {
        window.location.href = '#';
    } else {
        if (!isEmailValid) {
            document.getElementById('username-error').textContent = 'Please enter a valid email address.';
        }
        if (!isPasswordValid) {
            document.getElementById('password-error').textContent = 'Password must contain an uppercase letter and a number. Special characters other than "@" are not allowed.';
        }
    }
});
