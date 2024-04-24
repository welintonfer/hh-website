document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    // Verifica se a página foi rolada mais do que 50 pixels
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});
