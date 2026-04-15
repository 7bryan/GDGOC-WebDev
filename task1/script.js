// 1. Fitur Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Ubah teks tombol sesuai tema
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});

// 2. Fitur Form Handling & Validasi
const regForm = document.getElementById('regForm');
const successMsg = document.getElementById('success-msg');

regForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah reload halaman

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    // Manipulasi DOM: Tampilkan pesan sukses dan sembunyikan form
    regForm.classList.add('hidden');
    successMsg.classList.remove('hidden');

    // Alert sederhana sesuai permintaan tugas
    alert(`Halo ${name}, pendaftaran berhasil dikirim!`);
    console.log(`Pendaftaran: ${name} (${email})`);
  } else {
    alert("Mohon isi semua field!");
  }
});
