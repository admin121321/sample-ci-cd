// Mengambil elemen DOM
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Fungsi untuk toggle menu hamburger
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Menutup menu navigasi secara otomatis saat salah satu link diklik (khusus mode mobile)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});