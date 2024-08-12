let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let animations = ['slide-up', 'slide-left', 'slide-right'];

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove(...animations);  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  

    let currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";  
    currentSlide.classList.add(animations[slideIndex - 1]);  

    setTimeout(showSlides, 5000); 
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('responseMessage').style.display = 'block';

    document.getElementById('contactForm').style.display = 'none';
    let modal = document.getElementById('verificationModal');
    modal.style.display = "block";


    document.querySelector('.close').onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    setTimeout(function() {
        modal.style.display = "none";
    }, 5000); 
});


const modalHtml = `
<div id="verificationModal" class="modal" style="display:none;">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>A verification email has been sent to you.</p>
    </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalHtml);

