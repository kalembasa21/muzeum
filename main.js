    // Pobieranie elementów
    const menuButton = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    
    // Obsługa kliknięcia na przycisk menu
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuButton.classList.toggle('active');
    });