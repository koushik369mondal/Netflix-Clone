// Toggle dark mode
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Change icon 🌙 / ☀️
  this.textContent = document.body.classList.contains("dark-mode") ? "" : "";
});

// Scroll to top functionality
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();
