document.addEventListener('DOMContentLoaded', () => {
    // Toggle Theme Functions
    const currentHour = new Date().getHours();
    const initialTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', initialTheme);
});

function submitFormAndDownload() {
    // Create a FormData object from the form
    const form = document.getElementById('diary-download-form');
    const formData = new FormData(form);
    
    // Send form data asynchronously via fetch
    fetch("/", {
      method: "POST",
      body: formData,
    })
    .then(() => {
      // After successful form submission, trigger the file download
      window.location.href = 'Dear_Umaiya.pdf';
    })
    .catch((error) => console.error('Error:', error));
}
