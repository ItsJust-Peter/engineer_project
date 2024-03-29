// Funkcja do ładowania szablonu HTML
function loadTemplate(templatePath, placeholderId, callback) {
  fetch(templatePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading the template:", error));
}

// Ładowanie navbaru i stopki
loadTemplate(
  "assets/templates/navbar/navbar.html",
  "navbar-placeholder",
  setupNavbar
);
loadTemplate("assets/templates/footer/footer.html", "footer-placeholder");
