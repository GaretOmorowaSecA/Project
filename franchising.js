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

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Show the response message
    document.getElementById('responseMessage').style.display = 'block';

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Show the popup modal
    let modal = document.getElementById('verificationModal');
    modal.style.display = "block";

    // Close the modal when the user clicks the 'X'
    document.querySelector('.close').onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Automatically hide the modal after a few seconds if desired
    setTimeout(function() {
        modal.style.display = "none";
    }, 5000); // Hide after 5 seconds
});

// Popup Modal HTML
const modalHtml = `
<div id="verificationModal" class="modal" style="display:none;">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>A verification email has been sent to you.</p>
    </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalHtml);

