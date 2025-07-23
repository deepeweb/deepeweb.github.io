// Is js code se ham html page par dusre pages ko dynamically load kar rhe hai, isme hame html me ek div create karke usme ek unique id deni hogi or us id ko ham is js code me add kare or us html page ka link add karege

fetch('../dynamic-containers.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('dynamic-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));
  
  // sabhi content page ke liye jo folder ke andar hai, footer ke liye
  fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));
  
fetch('../dynamic-containers.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('dynamic-containers').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));

// IWT side nav 
  fetch('side-nav-iwt.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('side-nav-iwt').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));

/* IWT side nav for Android Pages
  fetch('side-nav-android.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('side-nav-android').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error)); */

  
  // blogs side nav 
  fetch('../IWT/side-nav-iwt.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('side-nav-blog').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));
  
   //  Advanced Java side nav 
  fetch('side-nav-advanced-java.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('side-nav-advanced-java').innerHTML = data;
  })
  .catch(error => console.error('Error loading container:', error));
  
