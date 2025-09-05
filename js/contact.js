
(function() {
    emailjs.init("cY4gHh5pj63CFp-e6");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_8614mvs", "template_cl15k8l", this)
            .then(function() {
                alert("✅ Message sent successfully!");
                form.reset();
            }, function(error) {
                alert("❌ Failed to send message: " + JSON.stringify(error));
            });
    });
});