// Smooth scroll when clicking "Learn More" button
document.getElementById("learnMore").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Responsive Navigation Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});