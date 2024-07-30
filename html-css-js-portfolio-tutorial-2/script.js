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


const sentences = [
  "Software Engineer.",
  "Problem Solver.",
  "Leader.",
  "Critical Thinker.",
  "WHAT AM I???"
];

const prefix = "I am a... ";
const typingSpeed = 100; // Typing speed in milliseconds
const deletingSpeed = 50; // Speed of deleting in milliseconds
const pauseBetweenCycles = 1000; // Pause between typing and deleting

let sentenceIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText() {
  const currentSentence = sentences[sentenceIndex];
  const textToDisplay = prefix + (deleting 
    ? currentSentence.substring(0, charIndex - 1) 
    : currentSentence.substring(0, charIndex + 1)
  );

  document.getElementById('text').textContent = textToDisplay;

  if (!deleting && charIndex === currentSentence.length) {
    setTimeout(() => {
      deleting = true;
      typeText(); // Continue to deleting
    }, pauseBetweenCycles);
  } else if (deleting && charIndex === 0) {
    deleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(typeText, pauseBetweenCycles); // Pause before typing the next sentence
  } else {
    charIndex += deleting ? -1 : 1;
    setTimeout(typeText, deleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeText();
});
