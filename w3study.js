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
 document.addEventListener("DOMContentLoaded", async function () {
  let pages = [];
/*
  // 🔹 Step 1: Agar homepage se <a> tags bhi scan karne hain, uncomment karo:
   document.querySelectorAll("a").forEach(link => {
     let url = link.getAttribute("href");
     let title = link.innerText || url;
     if (url && !url.startsWith("http")) {
       pages.push({ title, url });
     }
   });
*/
  // 🔹 Step 2: Extra pages ko scan karo
  let extraPages = ["../all_notes.html"]; // Yahan aur pages add kar sakte ho
  for (let page of extraPages) {
    await fetch(page)
      .then(response => response.text())
      .then(html => {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        tempDiv.querySelectorAll("a").forEach(link => {
          let url = link.getAttribute("href");
          let title = link.innerText || url;
          if (url && !url.startsWith("http")) {
            pages.push({ title, url });
          }
        });
      })
      .catch(error => console.error(`Error loading ${page}:`, error));
  }

  // 🔹 Step 3: Search function
  window.searchNotes = function () {
    let query = document.getElementById('searchBox').value.toLowerCase();
    let resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "";

    if (query === "") return;

    let filteredResults = pages.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.url.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
      resultsDiv.innerHTML = "<p style='color: black;'>No results found</p>";
      return;
    }

    filteredResults.forEach(page => {
      let resultItem = document.createElement("div");
      resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
      resultsDiv.appendChild(resultItem);
    });
  };

  // 🔹 Step 4: Clear button show/hide logic
  window.handleInputChange = function () {
    const searchBox = document.getElementById('searchBox');
    const clearButton = document.getElementById('clearButton');
    if (searchBox.value.trim() !== '') {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  };

  // 🔹 Step 5: Clear search input and results
  window.clearSearch = function () {
    const searchBox = document.getElementById('searchBox');
    const clearButton = document.getElementById('clearButton');
    searchBox.value = '';
    clearButton.style.display = 'none';
    document.getElementById('searchResults').innerHTML = '';
  };
});
// ye js code jab kisi # bale url par click kiya jata hai to ye code use rokta hai jaise #index.html
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });

          // Remove hash from URL
          if (history.pushState) {
            history.pushState(null, null, window.location.pathname);
          }
        }
      });
    });
  });
  const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');

searchBox.addEventListener('input', function() {
  if (searchBox.value.trim() !== "") {
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "hide";
  }
});
function closeAd() {
    document.getElementById("footerAd").style.display = "none";
}
