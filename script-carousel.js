var counter = 1;
var intervalId;

function changeSlide() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}

function startAutoplay() {
  intervalId = setInterval(changeSlide, 5000);
}

startAutoplay(); // Start the initial autoplay

// Get references to all slide elements
var slides = document.querySelectorAll('.slide');
var slidesMobile = document.querySelectorAll('.slide-mobile');

// Add event listeners for mouse enter and mouse leave
slides.forEach(function(slide) {
  slide.addEventListener('mouseenter', function() {
    clearInterval(intervalId); // Pause the autoplay
  });

  slide.addEventListener('mouseleave', function() {
    startAutoplay(); // Resume the autoplay
  });
});

// Add event listeners for mobile view
slidesMobile.forEach(function(slide) {
  slide.addEventListener('mouseenter', function() {
    clearInterval(intervalId); // Pause the autoplay
  });

  slide.addEventListener('mouseleave', function() {
    startAutoplay(); // Resume the autoplay
  });
});