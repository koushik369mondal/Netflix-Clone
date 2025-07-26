// privacy.js

// Toggle dark mode
document.querySelector('.toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scrollspy: highlight active section in sidebar
const sections = document.querySelectorAll('.scroll-section');
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll on sidebar link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    if (text.includes(searchText)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});
