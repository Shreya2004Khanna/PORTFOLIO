// Debounced scroll handling for Education section
let educationScrollTimeout;
document.addEventListener('scroll', function () {
  clearTimeout(educationScrollTimeout);
  educationScrollTimeout = setTimeout(() => {
    const educationSection = document.querySelector('.education-section');
    if (educationSection && isInViewport(educationSection)) {
      educationSection.classList.add('active');
    }
  }, 100);
});

// Optional: Initial trigger to check if already in view
setTimeout(() => {
  const educationSection = document.querySelector('.education-section');
  if (educationSection && isInViewport(educationSection)) {
    educationSection.classList.add('active');
  }
}, 1);

// Helper function to check if element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}
