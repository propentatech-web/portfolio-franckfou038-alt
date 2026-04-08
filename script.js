const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Animation de bienvenue
const welcomeText = document.getElementById('welcome-text');
const originalText = welcomeText.textContent;
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    welcomeText.textContent = originalText.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 50);
  }
}

setTimeout(typeWriter, 1000);

// Mode sombre/clair
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    themeToggle.textContent = '🌙';
  }
});

// Défaut sombre
body.classList.add('dark');
