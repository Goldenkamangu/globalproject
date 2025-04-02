// This script auto-closes the hamburger menu when any navigation link is clicked.
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});
