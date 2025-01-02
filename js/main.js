document.addEventListener('DOMContentLoaded', () => {
    // Toggle Theme Functions
    const currentHour = new Date().getHours();
    const initialTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', initialTheme);

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission (page reload)

        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Send data to the backend API
        fetch('https://pritamumaiya.vercel.app/api/send-email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set the content type to JSON
        },
        body: JSON.stringify(formObject)  // Convert the form data to a JSON string
        })
        .then(response => response.json())  // Parse JSON response from the server
        .then(data => {
            // Handle success or display a message
            alert('Message sent successfully!');
        })
        .catch(error => {
            // Handle errors if any
            alert('Error sending message. Please try again later.');
            console.error(error);
        });
    });

});
