// this js code for home page only 
 
   function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Cross icon (X)
    } else {
        hamburger.innerHTML = '&#9776;'; // Three lines icon
    }
}

// is code se content ke niche le links dynamic load ho rhe hai
fetch('../dynamic-containers.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('dynamic-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));

  
  document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('active');
  });
});

// Load Dynamically Footer Year like 2025 (currunt year)
document.getElementById('footer-year').textContent = new Date().getFullYear();