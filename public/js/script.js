
function openMainPage() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
}


document.getElementById('start-button').addEventListener('click', openMainPage);
