// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

//SKILLS SECTION
// Function to reveal skills with staggered animation
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

function revealSkills() {
  const skills = document.querySelectorAll('.skill');
  skills.forEach((el, index) => {
    if (isInViewport(el) && !el.classList.contains('visible')) {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 100); // delay to stagger each skill
    }
  });
}

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);


//PROJECT SECTION
// Function to reveal project cards in batches
// Helper function to check if element is in the viewport

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

const projects = document.querySelectorAll('.project-card');
let revealedBatches = [];

function revealProjectsInRows() {
  const batchSize = 3;
  for (let i = 0; i < projects.length; i += batchSize) {
    const batchIndex = i / batchSize;
    if (revealedBatches.includes(batchIndex)) continue;

    const batch = [...projects].slice(i, i + batchSize);
    if (batch.some(el => isInViewport(el))) {
      batch.forEach(el => el.classList.add('visible'));
      revealedBatches.push(batchIndex);
    }
  }
}

// Trigger on scroll and on load
window.addEventListener('scroll', revealProjectsInRows);
window.addEventListener('load', revealProjectsInRows);




  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

