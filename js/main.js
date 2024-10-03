document.addEventListener('DOMContentLoaded', () => {
    // Toggle Theme Functions
    const theme = localStorage.getItem('theme');
    const themeToggler = document.querySelector('#themeToggler');

    // Set the initial theme based on local storage or current time
    if (theme) {
        document.body.setAttribute('data-bs-theme', theme);
        if (themeToggler) {
            themeToggler.checked = (theme === 'dark');
        }
    } else {
        const currentHour = new Date().getHours();
        const initialTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
        document.body.setAttribute('data-bs-theme', initialTheme);
        localStorage.setItem('theme', initialTheme); // Store the default theme
    }

    // Change theme on button click
    if (themeToggler) {
        themeToggler.addEventListener('click', () => {
            // Get the current theme from the document, not the initial theme variable
            const currentTheme = document.body.getAttribute('data-bs-theme');
            const newTheme = (currentTheme === 'light') ? 'dark' : 'light';

            // Apply the new theme and save it to localStorage
            document.body.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
