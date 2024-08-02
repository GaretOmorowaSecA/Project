document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Reset index if it exceeds the number of slides
    slides[slideIndex-1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
