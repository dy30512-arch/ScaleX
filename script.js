// Navbar Scroll Effect
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Mobile Menu Toggle (Simplified)
function toggleMenu() {
    // Add logic here if you add a mobile menu div
    console.log("Menu toggled");
}