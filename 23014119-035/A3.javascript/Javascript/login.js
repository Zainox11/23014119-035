function initLoginForm() {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            showLoading();
            
            // Simulate authentication
            setTimeout(() => {
                hideLoading();
                alert('Login successful! Redirecting...');
                window.location.href = 'index.html';
            }, 1500);
        });
    }
}

function initSocialLogins() {
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.textContent.trim().split(' ').pop();
            showLoading();
            
            setTimeout(() => {
                hideLoading();
                alert(`Redirecting to ${provider} authentication`);
            }, 1000);
        });
    });
}

function initPasswordToggle() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const toggleIcon = document.createElement('i');
        toggleIcon.className = 'fas fa-eye password-toggle';
        toggleIcon.style.position = 'absolute';
        toggleIcon.style.right = '15px';
        toggleIcon.style.top = '50%';
        toggleIcon.style.transform = 'translateY(-50%)';
        toggleIcon.style.cursor = 'pointer';
        
        passwordInput.parentNode.style.position = 'relative';
        passwordInput.parentNode.appendChild(toggleIcon);
        
        toggleIcon.addEventListener('click', function() {
            togglePasswordVisibility('password', 'password-toggle');
        });
    }
}