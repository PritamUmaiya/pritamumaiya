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

    const myToast = new bootstrap.Toast(document.getElementById('myToast'));
    const differenceDate = document.getElementById('differenceDate');
    const difference = calculateDateDifference("2017-01-13");

    // Update the innerHTML with correct singular/plural for years, months, and days
    const yearsText = difference.years === 1 ? 'year' : 'years';
    const monthsText = difference.months === 1 ? 'month' : 'months';
    const daysText = difference.days === 1 ? 'day' : 'days';

    differenceDate.innerHTML = `${difference.years} ${yearsText}, ${difference.months} ${monthsText} & ${difference.days} ${daysText}`;
    myToast.show();
});

function calculateDateDifference(date) {
    const today = new Date();
    const pastDate = new Date(date);
  
    let years = today.getFullYear() - pastDate.getFullYear();
    let months = today.getMonth() - pastDate.getMonth();
    let days = today.getDate() - pastDate.getDate();
  
    // Adjust for negative values
    if (days < 0) {
      const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += daysInLastMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
  
    return { years, months, days };
}
