document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menuToggle');
    const menuSection = document.getElementById('menuSection');
    
    menuToggle.addEventListener('click', function() {
      if (menuSection.style.display === 'none') {
        menuSection.style.display = 'block';
      } else {
        menuSection.style.display = 'none';
      }
    });
  
 
    function updateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);
        document.getElementById('date').textContent = `Date: ${dateString}`;
    }

  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById('time').textContent = `Time: ${timeString}`;
    }

    setInterval(() => {
      updateDate();
      updateTime();
    }, 1000);
    
    updateDate();
    updateTime();
});

