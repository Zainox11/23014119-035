function initOfficeTabs() {
    const officeHeaders = document.querySelectorAll('.office-header');
    officeHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');
            
            if (!validateEmail(email.value)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (message.value.trim().length < 10) {
                alert('Please enter a message with at least 10 characters');
                return;
            }
            
            showLoading();
            
            setTimeout(() => {
                hideLoading();
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }, 1500);
        });
    });
}

function copyEmail(element) {
    const email = element.textContent || element.getAttribute('href').replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
        alert(`Copied to clipboard: ${email}`);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
        alert('Failed to copy email. Please try again.');
    });
}