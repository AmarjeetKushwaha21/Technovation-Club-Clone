/*============ Mobile Navigation ===========*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

}

//==============================
// Navbar | Back To Top | Reveal
//==============================

const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");

const sections = document.querySelectorAll(
    ".about,.mission,.stats,.domains,.events,.gallery,.team,.contact"
);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = ".8s";
});

function revealSections() {

    sections.forEach(section => {

        if (section.getBoundingClientRect().top < window.innerHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", () => {

    if (navbar) {

        navbar.style.boxShadow =
            window.scrollY > 50
                ? "0 6px 18px rgba(0,0,0,.15)"
                : "0 2px 10px rgba(0,0,0,.08)";

    }

    if (topBtn) {

        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";

    }

    revealSections();

});

window.addEventListener("load", revealSections);

/*========== Back To Top Button ==============*/

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*============ Smooth Scrolling ===========*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/*============ Hero Button Animation ===========*/

const heroBtn = document.querySelector(".btn");

if (heroBtn) {

    heroBtn.addEventListener("mouseenter", () => {
        heroBtn.style.transform = "scale(1.05)";
    });

    heroBtn.addEventListener("mouseleave", () => {
        heroBtn.style.transform = "scale(1)";
    });

}

/*============ event button ===========*/

document.querySelectorAll(".event-content button").forEach(button => {

    button.addEventListener("click", () => {

        alert("More event details will be available soon.");

    });

});

/*============ Contact Form ===========*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (!name || !email || !message) {

            alert("Please fill in all required fields.");
            return;

        }

        alert(`Thank you, ${name}!

Your query has been submitted successfully.

Our Technovation Club team will contact you soon.`);

        this.reset();

    });

}

/*============ Website Loaded ===========*/

console.log("🚀 Technovation Club Website Loaded Successfully");