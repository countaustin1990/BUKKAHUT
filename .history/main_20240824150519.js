const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Animate the scroll
const scrollContainer = document.querySelector('.animate-scroll');

function startScrolling() {
  const width = scrollContainer.scrollWidth;
  scrollContainer.style.animation = `scroll ${width / 100}s linear infinite`;
}

// Start the scroll animation once the DOM is fully loaded
window.addEventListener('load', startScrolling);

document.addEventListener("DOMContentLoaded", function() {
  function toggleText(buttonId, textId) {
    const button = document.getElementById(buttonId);
    const text = document.getElementById(textId);
    button.addEventListener("click", function(event) {
      event.preventDefault();
      if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        button.textContent = "Read Less";
      } else {
        text.classList.add("hidden");
        button.textContent = "Read More";
      }
    });
  }

  toggleText("toggleButton4", "moreText4");
  toggleText("toggleButton1", "moreText1");
  toggleText("toggleButton2", "moreText2");
  toggleText("toggleButton3", "moreText3");
});


// JavaScript to handle "Back to Top" button visibility and functionality
const backToTopButton = document.getElementById('backToTop');

// Show button when scrolled down 100px from the top
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

