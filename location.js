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
});
