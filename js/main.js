document.addEventListener('DOMContentLoaded', () => {
    // Toggle Theme Functions
    const currentHour = new Date().getHours();
    const initialTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', initialTheme);
});
