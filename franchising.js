document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
        timeElement.textContent = now.toLocaleTimeString();
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
