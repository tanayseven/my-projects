document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            themeToggleBtn.textContent = 'Dark Mode';
        }
    });
});