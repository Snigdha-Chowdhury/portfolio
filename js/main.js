// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Close mobile menu after navigation
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});