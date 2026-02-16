document.addEventListener('DOMContentLoaded', () => {
  const alertButton = document.getElementById('alertButton');
  const popup = document.getElementById('alertPopup');
  const closeBtn = document.querySelector('.close-btn');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const logo = document.getElementById("siteLogo");

  /* ================= ALERT POPUP ================= */

  if (alertButton && popup) {

    // Toggle popup
    alertButton.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.style.display =
        popup.style.display === 'block' ? 'none' : 'block';
    });

    // Close button
    closeBtn?.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close when clicking outside
    document.addEventListener('click', (event) => {
      if (!popup.contains(event.target) && event.target !== alertButton) {
        popup.style.display = 'none';
      }
    });
  }

  /* ================= DARK MODE ================= */

  function updateLogo() {
    if (!logo) return;

    if (document.body.classList.contains("dark-mode")) {
      logo.src = "/assets/icons/Gryphon Dark mode.svg";
    } else {
      logo.src = "/assets/icons/Gryphon.svg";
    }
  }

  // On page load → apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle?.classList.add('active');
  }

  // Update logo immediately on load
  updateLogo();

  // Toggle dark mode
  darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    darkModeToggle.classList.toggle('active', isDark);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    updateLogo(); // THIS was missing
  });

});
