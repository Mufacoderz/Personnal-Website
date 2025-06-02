

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
    color: 0x1573ff,
    color2: 0xffffff,
    backgroundColor: 0x272524
});


//biar nav nya gk ilang
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    nav.classList.remove("-translate-y-full", "opacity-0");
  });

//open dan close menu hamburger
function openNavLink() {
    document.getElementById("hamburgerNav").style.display = "block";
}
function closeNavLink() {
    document.getElementById("hamburgerNav").style.display = "none";
}


//upen dan close modal service
function openModalService() {
    document.getElementById("modal").style.display = "block";
}
function closeModalService() {
    document.getElementById("modal").style.display = "none";
}


//open dan close modal porto
  function openModalPorto(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').classList.remove('hidden');
  }
  function closeModalPorto() {
    document.getElementById('imageModal').classList.add('hidden');
  }

  

//=======================================RUNNING TEXT CODE BY CHATGPT=========================================================
// animasi perofesinya
// Profession texts array
const professions = [
    "Front-End Developer",
    "Information Systems Student",
    "React Developer",
    "Programmer Chat GPT"
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
//==========================================================================================================================
