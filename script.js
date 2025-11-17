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
