// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('login-error');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        errorMessage.style.display = 'none'; // Hide previous errors

        // Basic Client-Side Validation
        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username/email and password.';
            errorMessage.style.display = 'block';
            return;
        }

        // --- Mock Authentication (for frontend demo) ---
        // In a real application, you would send these credentials to your backend API
        // via a fetch() request (e.g., using POST method to /api/login).

        // Example: Hardcoded mock credentials
        const mockUsername = 'user@example.com';
        const mockPassword = 'password123';

        if (username === mockUsername && password === mockPassword) {
            // Simulate successful login
            console.log('Login successful!');
            localStorage.setItem('isLoggedIn', 'true'); // Store login state
            localStorage.setItem('currentUser', username); // Store current user (optional)

            // Redirect to the main shopping page
            window.location.href = 'index.html';
        } else {
            // Simulate failed login
            errorMessage.textContent = 'Invalid username/email or password. Please try again.';
            errorMessage.style.display = 'block';
        }
    });

    // Optional: Check if already logged in (e.g., if user revisits login page)
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // console.log('Already logged in, redirecting to home...');
        // window.location.href = 'index.html'; // Uncomment to auto-redirect
    }
});