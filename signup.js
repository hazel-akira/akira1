document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the 'active' class on the navigation links
    });
});


function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    var isValid = true;

    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate username
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword.trim() === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}