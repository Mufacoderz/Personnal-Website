document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
        const pupil = eye.querySelector(".pupil");
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const maxDistance = (eyeRect.width / 2) - (pupil.offsetWidth / 2);
        
        const x = Math.cos(angle) * maxDistance;
        const y = Math.sin(angle) * maxDistance;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});