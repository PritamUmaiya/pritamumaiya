document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

const responses = {
    "hey": ["Hello, nice to meet you.", "Hey, What you want to know about Pritam?"],
    "hello": ["Hi, how can I assist you?.", "Hey, What you want to know about Pritam?"],
    "hi": ["Hi, how can I assist you?.", "Hey, What you want to know about Pritam?"],
    "name": ["My name is Pritam Jaiswal.", "I am called Pritam Jaiswal."],
    "email": ["My email is pritam-jaiswal@outlook.com.", "I can be reached at pritam-jaiswal@outlook.com."],
    "goal": [
        "My goal is to become a full-stack developer and enjoy life by traveling, meeting new people, and making friends.",
        "My aim is to be a full-stack developer and love traveling, meeting new people, and making friends."
    ],
    "routine": [
        "My routine includes waking up at 5:00 AM, light exercise, studying, working on projects, and going to bed at 10 PM.",
        "I wake up at 5:00 AM, do some light exercise, study, work on projects, and sleep at 10 PM."
    ]
};

function getRandomResponse(category) {
    const categoryResponses = responses[category];
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

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
        response = getRandomResponse('name');
    } else if (message.toLowerCase().includes('email')) {
        response = getRandomResponse('email');
    } else if (message.toLowerCase().includes('goal')) {
        response = getRandomResponse('goal');
    } else if (message.toLowerCase().includes('routine')) {
        response = getRandomResponse('routine');
    }

    setTimeout(() => {
        addMessage('bot', response);
    }, 500);
}
