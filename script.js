// ==========================================
// Immanuel Mbiyu Gaming Portfolio JavaScript
// ==========================================

// Welcome message
window.addEventListener("load", function () {
    setTimeout(() => {
        alert("🎮 Welcome to Immanuel Mbiyu's Gaming Portfolio!");
    }, 500);
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you for your message! I'll get back to you soon.");

    form.reset();

});

// Navbar Background on Scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#000";

        header.style.boxShadow = "0 0 20px cyan";

    } else {

        header.style.background = "rgba(0,0,0,0.9)";

        header.style.boxShadow = "none";

    }

});

// Hero Title Glow Animation
const heroTitle = document.querySelector(".hero h1");

setInterval(() => {

    heroTitle.classList.toggle("glow");

}, 1000);

// Console Message
console.log("🎮 Immanuel Mbiyu Gaming Portfolio Loaded Successfully!");