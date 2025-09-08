// Main JavaScript - Demo interaksi sederhana
document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Selamat belajar Frontend di SMK!');
    });
  }
});