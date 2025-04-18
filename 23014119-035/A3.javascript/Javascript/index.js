// Player controls initialization
function initPlayerControls() {
    const playButtons = document.querySelectorAll('.group');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const songTitle = this.querySelector('h4').textContent;
            console.log('Now playing:', songTitle);
            // Show loading spinner
            showLoading();
            
            // Simulate loading
            setTimeout(() => {
                hideLoading();
                alert(`Now playing: ${songTitle}`);
            }, 1000);
        });
    });
}

// Navigation initialization
function initNavigation() {
    // Handle sidebar navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            console.log('Navigating to:', target);
            
            // Show loading spinner
            showLoading();
            
            // Simulate page load
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
    
    // Handle theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

// Search functionality
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input').value.trim();
            if (query) {
                console.log('Searching for:', query);
                alert(`Search results for: ${query}`);
            }
        });
    }
}

// Quick navigation between sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}