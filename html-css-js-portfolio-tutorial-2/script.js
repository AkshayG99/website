function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-btn-learn').forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent '.details-container'
      const detailsContainer = this.closest('.details-container');
      // Find the corresponding '.expand-text' within this '.details-container'
      const expandTextEL = detailsContainer.querySelector('.expand-text');

      if (this.classList.contains('open')) {
        // Shrink the box and show the original text
        expandTextEL.innerText = expandTextEL.getAttribute('data-original-text');
        this.innerText = "Show More";
        // Remove the class "open"
        this.classList.remove('open');
      } else {
        // Expand the box and show the custom text
        expandTextEL.innerText = this.getAttribute('data-expand-text');
        this.innerText = "Show Less";
        // Add the class "open"
        this.classList.add('open');
      }
    });
  });
});

const text = "Welcome to My Website!"; // Text to display and delete
const speed = 100; // Typing speed in milliseconds

let index = 0;
let deleting = false;

function typeText() {
  const currentText = deleting ? text.substring(0, index - 1) : text.substring(0, index + 1);
  document.getElementById('text').textContent = currentText;

  if (!deleting && index === text.length) {
    deleting = true;
    setTimeout(typeText, speed + 1000);
  } else if (deleting && index === 0) {
    deleting = false;
  }

  index += deleting ? -1 : 1;
  setTimeout(typeText, deleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", function() {
  typeText();
});