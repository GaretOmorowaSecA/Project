document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('.carousel-images');
    
    carouselImages.forEach(carousel => {
        const items = Array.from(carousel.children);

        function shuffleItems() {
            let shuffledItems = items.slice();
            for (let i = shuffledItems.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
            }

            while (carousel.firstChild) {
                carousel.removeChild(carousel.firstChild);
            }
            shuffledItems.forEach(item => carousel.appendChild(item));
        }

        shuffleItems();

        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollDelay = 10; 

        function autoScroll() {
            carousel.scrollLeft += scrollStep;
            scrollAmount += scrollStep;

            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollLeft = 0;
            }

            requestAnimationFrame(autoScroll);
        }

        autoScroll();
    });
});
function searchMenu() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let items = document.querySelectorAll('.carousel-item');

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
