
function revealSections() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

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

document.getElementById("year").textContent = new Date().getFullYear();
