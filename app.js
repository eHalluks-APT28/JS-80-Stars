document.addEventListener("DOMContentLoaded", function(){
    const starsNumber = 200;
    const skyNight = document.querySelector(".sky-night");
    for (let i = 0; i < starsNumber; i++){
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = (Math.random() * window.innerHeight) + "px";
        star.style.left = (Math.random() * window.innerWidth) + "px";
        const blinkDuration = Math.random() * (5 - 1) + 1;
        const moveDuration = Math.random() * (5 - 1) + 5;
        const moveDirection = Math.random() < 0.5 ? 'moveLeft' : 'moveRight';
        star.style.animation = `blink ${blinkDuration}s infinite, ${moveDirection} ${moveDuration}s infinite`;
        skyNight.appendChild(star);
        star.addEventListener('mouseenter', function() {
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            const rect = star.getBoundingClientRect();
            tooltip.textContent = `Gwiazda AT(${i})\nPozycja X: ${Math.round(rect.left)}\nPozycja Y: ${Math.round(rect.top)}`;
            star.appendChild(tooltip);
            star.style.backgroundColor = "turquoise";
            star.style.transform = "scale(19.5)";
        });
        star.addEventListener('mouseleave', function() {
            if (star.querySelector(".tooltip")) {
                star.removeChild(star.querySelector(".tooltip"));
            }
            star.style.backgroundColor = "white";
            star.style.transform = "scale(1)";
        });
    }
});



