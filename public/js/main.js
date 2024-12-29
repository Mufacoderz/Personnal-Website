

// Vanta.js animasi backgorundnya
VANTA.GLOBE({
    el: document.getElementById('vanta-globe'),
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0149FF,
    color2: 0xffffff,
    backgroundColor: 0x272524
});



// animasi perofesinya
// Profession texts array
const professions = [
    "Front-End Developer",
    "Information Systems Student",
    "React Developer",
    "Chat GPT Programmer"
];

let currentProfessionIndex = 0;

// Function to type the text one by one
function typeProfession() {
    const professionTextElement = document.getElementById('profession-text');
    let profession = professions[currentProfessionIndex];
    let i = 0;

    professionTextElement.textContent = ''; // Clear previous text

    // Typing effect
    const typingInterval = setInterval(() => {
        professionTextElement.textContent += profession[i];
        i++;
        if (i === profession.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
                typeProfession(); // Restart the typing animation with the next profession
            }, 1000); // Wait before starting the next profession
        }
    }, 50); // Speed of typing
}

// Start the typing effect
typeProfession();