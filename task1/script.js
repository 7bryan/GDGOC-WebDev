// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// checking for user prefrence
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.textContent = 'Switch to Light Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Ubah teks tombol dan simpan preferensi
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark'); // Simpan status dark
  } else {
    themeToggle.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light'); // Simpan status light
  }
});


// Form Handling and Validation
const regForm = document.getElementById('regForm');
const successMsg = document.getElementById('success-msg');
const headerH1 = document.querySelector('header h1'); // Contoh manipulasi DOM extra

regForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah reload halaman

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // Validation
  if (nameInput.value.trim() && emailInput.value.trim()) {

    // DOM Manipulation 
    // hide Form
    regForm.classList.add('hidden');
    // show succesful messagge with smooth animeation (via CSS class)
    successMsg.classList.remove('hidden');

    // 3. change header title (Manipulasi DOM extra)
    headerH1.innerHTML = `Welcome, <span>${nameInput.value.split(' ')[0]}</span>!`;

    // Alert 
    // alert(`Halo ${nameInput.value}, pendaftaran kamu berhasil dikirim!`);

    console.log(`Pendaftaran Berhasil: ${nameInput.value} (${emailInput.value})`);
  } else {
    alert("Mohon isi semua field dengan benar!");
  }
});
