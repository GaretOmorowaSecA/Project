let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let animations = ['slide-up', 'slide-left', 'slide-right'];

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
        slides[i].classList.remove(...animations);  // Remove previous animation classes
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Reset index if it exceeds the number of slides

    let currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";  // Show the current slide
    currentSlide.classList.add(animations[slideIndex - 1]);  // Add animation class

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
