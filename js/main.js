const yearNode = document.getElementById("year");
if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}

const exploreButton = document.querySelector('[data-scroll-target="#work"]');
const workSection = document.getElementById("work");

if (exploreButton && workSection) {
    exploreButton.addEventListener("click", (event) => {
        event.preventDefault();

        const targetTop = workSection.getBoundingClientRect().top + window.scrollY - 80;

        window.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });

        workSection.classList.remove("pulse-highlight");
        void workSection.offsetWidth;
        workSection.classList.add("pulse-highlight");

        setTimeout(() => {
            workSection.classList.remove("pulse-highlight");
        }, 1200);
    });
}
