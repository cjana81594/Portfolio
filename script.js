// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Toggle details for qualifications
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => toggleDetails(btn));

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDetails(btn);
      }
    });
  });

  function toggleDetails(button) {
    const header = button.closest('.qual-item');
    if (!header) return;
    const details = header.querySelector('.qual-details');
    const expanded = button.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      details.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Details';
    } else {
      details.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Hide';
    }
  }
});
