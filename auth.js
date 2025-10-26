// --- KONFIGURASI ADMIN ---
// Ganti ini dengan username dan password yang Anda inginkan
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "miraiadmin123";

// Fungsi untuk menangani proses login
function handleLogin(event) {
    event.preventDefault(); // Mencegah form reload halaman

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Pengecekan kredensial
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Simpan informasi login ke sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);

        // Alihkan ke halaman admin
        window.location.href = 'admin.html';
    } else {
        // Tampilkan pesan error jika salah
        errorMessage.style.display = 'block';
        // Hapus pesan error setelah 3 detik
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}

// Fungsi untuk mengecek status login saat halaman dimuat
function checkAuthStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        // Jika tidak login, alihkan ke halaman login
        window.location.href = 'login.html';
    }
}

// Fungsi untuk logout
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Event listener untuk form login (hanya berjalan di halaman login.html)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}