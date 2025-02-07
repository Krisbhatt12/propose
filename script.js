const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// Function to move the "No" button when the mouse gets close
function moveNoButton(event) {
    const noButton = document.querySelector('.no-button');
    const rect = noButton.getBoundingClientRect();

    // Calculate distance between mouse and button
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
        Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2)
    );

    // If the cursor is within 100px of the button, move it to a new random position
    if (distance < 100) {
        const newTop = Math.random() * 80 + "%";
        const newLeft = Math.random() * 80 + "%";
        noButton.style.position = "absolute";
        noButton.style.top = newTop;
        noButton.style.left = newLeft;
    }
}

// Change the "No" button text and increase "Yes" button size
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`; // Increase by 20%
}

// Redirect to another page when "Yes" is clicked
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Add event listener to move the button when the mouse gets close
document.querySelector('.no-button').addEventListener('mousemove', moveNoButton);
