// register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const usernameInput = document.getElementById('reg-username');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const confirmPasswordInput = document.getElementById('reg-confirm-password');
    const errorMessage = document.getElementById('register-error');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        errorMessage.style.display = 'none'; // Hide previous errors
        errorMessage.textContent = ''; // Clear previous error text

        // Basic Client-Side Validation
        if (!username || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'All fields are required.';
            errorMessage.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return;
        }

        // Simple email format validation (more robust regex is often used)
        if (!email.includes('@') || !email.includes('.')) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        // Password strength (optional, basic example)
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // --- Mock Registration (for frontend demo) ---
        // In a real application, you would send this data to your backend API
        // (e.g., using fetch() with POST method to /api/register).

        // Simulate a successful registration
        console.log('Registration successful!');
        // For demonstration, you might store a mock user in localStorage,
        // but for security, never store plain passwords.
        const mockUser = { username, email, password }; // DO NOT DO THIS IN PRODUCTION!
        console.log('Mock Registered User:', mockUser);

        // Redirect to the login page after successful registration
        alert('Registration successful! Please log in with your new account.');
        window.location.href = 'login.html';
    });
});