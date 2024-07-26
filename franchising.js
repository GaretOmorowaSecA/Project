$(document).ready(function() {
    // Update Date and Time
    function updateDateTime() {
        const now = new Date();
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        
        $('#date-time').html(`${now.toLocaleDateString(undefined, optionsDate)} <br> ${now.toLocaleTimeString(undefined, optionsTime)}`);
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to set date and time immediately

    // Daily Quote
    const quotes = [
        "Food is the ingredient that binds us together.",
        "Life is uncertain. Eat dessert first.",
        "Food is not just eating energy. It’s an experience.",
        "There is no sincere love than the love of food.",
        "Good food is the foundation of genuine happiness."
    ];

    function updateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $('#daily-quote').text(quotes[randomIndex]);
    }

    updateQuote();
    setInterval(updateQuote, 24 * 60 * 60 * 1000); // Change quote daily

    // Form Submission
    $('form.contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Thank you! We will contact you via email regarding your interest.');
    });

    // Order Button
    $('#orderBtn').on('click', function() {
        alert('Your order has been placed!');
    });

    // Fetch and Set Hero Image from Unsplash API
    fetch('https://api.unsplash.com/search/photos?query=food&client_id=YOUR_ACCESS_KEY')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.results[0].urls.regular;
            $('.hero').css('background-image', `url(${imageUrl})`);
        });
});
