document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const items = Array.from(carouselImages.children);
    
    // Function to shuffle items
    function shuffleItems() {
        // Clone the array to avoid modifying the original order
        let shuffledItems = items.slice();
        
        // Shuffle the array using Fisher-Yates algorithm
        for (let i = shuffledItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        }
        
        // Remove all items from the container
        while (carouselImages.firstChild) {
            carouselImages.removeChild(carouselImages.firstChild);
        }
        
        // Append shuffled items to the container
        shuffledItems.forEach(item => carouselImages.appendChild(item));
    }
    
    // Shuffle items on page load
    shuffleItems();
});
