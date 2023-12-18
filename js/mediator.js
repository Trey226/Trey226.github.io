// Simple JavaScript to control slideshow - Add your own logic
let currentSlide = 0;
const slides = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image paths

function showSlide(index) {
    const slideContainer = document.querySelector('.slideshow-container');
    slideContainer.style.backgroundImage = `url(${slides[index]})`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
