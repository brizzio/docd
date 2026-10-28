const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.style.boxShadow =
    window.scrollY > 20
      ? '0 12px 32px rgba(0,0,0,.05)'
      : 'none';
});