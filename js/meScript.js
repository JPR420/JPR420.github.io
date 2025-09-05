

// Reveal sections
const meSections = document.querySelectorAll(".me-section");

function revealMeSections() {
    const windowHeight = window.innerHeight;
    meSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealMeSections);
window.addEventListener("load", revealMeSections);
revealMeSections();

const topButton = document.getElementById("top-button");


const isMePage = window.location.pathname.includes("me.html");


let isOn = isMePage;
updateButtonState();

function updateButtonState() {
    if (isOn) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
}


topButton.addEventListener("click", () => {
    isOn = !isOn;
    updateButtonState();
    setTimeout(() => {
        if (isOn && !isMePage) {
            window.location.href = "me.html";
        } else if (!isOn && isMePage) {
            window.location.href = "index.html";
        }
    }, 300);
});
