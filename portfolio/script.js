// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Function to check if the element is partially in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0
  );
}

// Debounce the scroll event to optimize performance
let scrollTimeout;
document.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Trigger fade-in effects when the element is in the viewport
    const educationSection = document.querySelector('.education-section');
    if (isInViewport(educationSection)) {
      educationSection.classList.add('active');
    }

    // For skill elements fade-in
    const skillElements = document.querySelectorAll(".skill");
    skillElements.forEach((el, index) => {
      if (isInViewport(el)) {
        // Delay increases for each element (for one-by-one effect)
        setTimeout(() => {
          el.classList.add("visible");
        }, index * 200); // Delay for each skill element
      }
    });
  }, 100); // Debounce delay
});

// Trigger the scroll handler once to check if any elements are already in view
setTimeout(() => {
  document.querySelectorAll('.skill').forEach(el => {
    if (isInViewport(el)) el.classList.add("visible");
  });
}, 1);

