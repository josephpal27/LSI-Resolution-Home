// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})

console.log(scrollY);


// JavaScript for animating the number count
document.addEventListener('DOMContentLoaded', () => {
    const countElements = document.querySelectorAll('.project-image span');
    let hasAnimated = false; // Flag to prevent multiple triggers
  
    const startCounting = (element) => {
      const targetCount = parseInt(element.getAttribute('data-count'), 10);
      let currentCount = 0;
      const duration = 1000; // Total duration of the animation in milliseconds (4 seconds)
      const startTime = performance.now(); // Get the current time
  
      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure the progress does not exceed 1
        currentCount = Math.floor(progress * targetCount);
  
        element.textContent = currentCount.toLocaleString();
  
        if (progress < 1) {
          requestAnimationFrame(updateCount); // Continue animation
        } else {
          element.textContent = targetCount.toLocaleString(); // Ensure final value is displayed
        }
      };
  
      requestAnimationFrame(updateCount); // Start the animation
    };
  
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 3000; // Set your trigger scroll position
  
      if (scrollPosition >= triggerPosition && !hasAnimated) {
        countElements.forEach((element) => {
          startCounting(element);
        });
        hasAnimated = true; // Ensure the animation runs only once
      }
    };
  
    window.addEventListener('scroll', checkScrollPosition);
  });