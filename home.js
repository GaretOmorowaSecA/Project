document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });  
});
const banner = document.getElementById('animated-banner');
    if (banner) {
        banner.classList.add('animate');
    }

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        // Use setTimeout to delay the addition of the 'show' class
        setTimeout(() => {
            heroSection.classList.add('show');
        }, 100); // Delay in milliseconds (100ms for a quick delay)
    }
;