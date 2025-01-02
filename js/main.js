document.addEventListener('DOMContentLoaded', () => {
    // Toggle Theme Functions
    const currentHour = new Date().getHours();
    const initialTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', initialTheme);

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const form = event.target;
        const formData = new FormData(form);
        const modalTitle = document.getElementById("feedbackModalLabel");
        const modalMessage = document.getElementById("feedbackMessage");
        const feedbackModal = new bootstrap.Modal(document.getElementById("feedbackModal"));
      
        try {
          const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          });
      
          if (response.ok) {
            modalTitle.textContent = "Success!";
            modalMessage.textContent = "Your message has been sent successfully.";
            form.reset(); // Clear the form fields
          } else {
            modalTitle.textContent = "Error";
            modalMessage.textContent = "Something went wrong. Please try again.";
          }
        } catch (error) {
          modalTitle.textContent = "Error";
          modalMessage.textContent = "An error occurred. Please check your internet connection and try again.";
        }
      
        feedbackModal.show();
    });
      
      
});
