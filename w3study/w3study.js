function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-icon');

    // Toggle active class
    menu.classList.toggle('active');
    
    // Icon change karna
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Cross icon
    } else {
        hamburger.innerHTML = '&#9776;'; // Three lines icon
    }
}
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('active');
  });
});
document.getElementById('footer-year').textContent = new Date().getFullYear();

