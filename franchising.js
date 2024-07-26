$(document).ready(function() {
    function updateDateTime() {
        const now = new Date();
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        
        $('#date').text(now.toLocaleDateString(undefined, optionsDate));
        $('#time').text(now.toLocaleTimeString(undefined, optionsTime));
    }

    setInterval(updateDateTime, 1000);

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

    $('form.contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Thank you! We will contact you via email regarding your interest.');
    });

    $('#orderBtn').on('click', function() {
        alert('Your order has been placed!');
    });
});
