// Mengambil elemen dengan kelas 'navbar-nav' dan elemen dengan id 'hamburger-menu'
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Fungsi untuk menampilkan atau menyembunyikan menu navigasi
hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
};

// Menambahkan event listener untuk menutup menu jika klik di luar area menu atau hamburger
document.addEventListener('click', function(e) {
    // Memastikan klik tidak terjadi di dalam menu atau pada ikon hamburger
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
