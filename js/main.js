// Αρχικοποίηση Animations (AOS)
AOS.init({
  duration: 800,
  once: true // Το animation γίνεται μόνο την πρώτη φορά που σκρολάρεις
});

// Αρχικοποίηση Lightbox (για τις εικόνες των έργων)
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
});

// Κλείσιμο του μενού στα κινητά όταν πατηθεί ένας σύνδεσμος
const navLinks = document.querySelectorAll('.nav-item .nav-link');
const menuToggle = document.getElementById('navbarNav');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle.classList.contains('show')) {
      // Χρησιμοποιούμε το Bootstrap API για να κλείσουμε το μενού
      let bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false
      });
      bsCollapse.hide();
    }
  });
});