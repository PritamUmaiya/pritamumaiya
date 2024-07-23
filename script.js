document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        addMessage('user', message);
        respondToMessage(message);
        userInput.value = '';
    }
}

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    document.getElementById('modal-body').scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

function respondToMessage(message) {
    let response = "Sorry, I didn't understand that.";

    if (message.toLowerCase().includes('name')) {
        response = "Your name is Pritam Jaiswal.";
    } else if (message.toLowerCase().includes('email')) {
        response = "Your email is pritam-jaiswal@outlook.com.";
    } else if (message.toLowerCase().includes('goal')) {
        response = "Your goal is to become a full-stack developer and enjoy life by traveling, meeting new people, and making friends.";
    } else if (message.toLowerCase().includes('routine')) {
        response = "Your routine includes waking up at 5:00 AM, light exercise, studying, working on projects, and going to bed at 10 PM.";
    }

    setTimeout(() => {
        addMessage('bot', response);
    }, 500);
}
