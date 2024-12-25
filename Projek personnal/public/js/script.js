// Function to handle redirect
function openMainPage() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        // Redirect to main page in the same tab
        window.location.href = "main.html";
    }, 1000);
}

// Add event listener to the button
document.getElementById('start-button').addEventListener('click', openMainPage);
