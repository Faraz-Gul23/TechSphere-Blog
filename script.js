  // Dark mode toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved user preference, if any
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            
            // Update toggle icon based on current theme
            if (currentTheme === 'dark-mode') {
                themeToggle.textContent = '🌞';
            }
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Change the icon based on theme
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '🌞';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                themeToggle.textContent = '🌓';
                localStorage.removeItem('theme');
            }
        });