document.addEventListener('DOMContentLoaded', () => {
    const locations = document.querySelectorAll('.location');
    locations.forEach(location => {
        location.classList.add('show');
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('footer .social a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Social link clicked:', this.href);
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
});


