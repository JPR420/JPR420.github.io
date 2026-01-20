




const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});


const topButton = document.getElementById("top-button");


const isMePage = window.location.pathname.includes("me.html");

function typeLineByLine(containerSelector, typingSpeed = 50, lineDelay = 500) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const elements = container.querySelectorAll('p');


    elements.forEach(el => {
        // Get original text from data-text attribute
        const originalText = el.getAttribute('data-text');
        const lines = originalText.split('<br>');
        el.innerHTML = '';

        let lineIndex = 0;

        function typeNextLine() {
            if (lineIndex >= lines.length) return;

            const line = lines[lineIndex];
            let charIndex = 0;
            const lineElement = document.createElement('span');
            lineElement.classList.add('typing'); // cursor class while typing
            el.appendChild(lineElement);

            function typeChar() {
                if (charIndex < line.length) {
                    lineElement.innerHTML += line.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, typingSpeed);
                } else {
                    lineElement.classList.remove('typing');
                    if (lineIndex < lines.length - 1) {
                        el.appendChild(document.createElement('br'));
                    }
                    lineIndex++;
                    setTimeout(typeNextLine, lineDelay);
                }
            }

            typeChar();
        }

        typeNextLine();
    });

}

// Call the function
typeLineByLine('.GreetingText', 110, 800);




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
