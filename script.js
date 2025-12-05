// script.js
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');  
    navLinks.classList.toggle("show");
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Example JavaScript file
// You can use this to add custom behavior, analytics, or interactivity

// Log when the page loads
window.addEventListener('load', () => {
  console.log("Calendly booking page loaded successfully!");
});

// Example: Smooth scroll to Calendly widget when header is clicked
document.querySelector('header').addEventListener('click', () => {
  document.querySelector('.calendly-container').scrollIntoView({ behavior: 'smooth' });
});
