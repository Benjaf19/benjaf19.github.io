/*let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.querySelector('.portfolio-container').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

showSlide(currentSlide);*/
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slides = slider.querySelector('.slides');
        const images = slides.querySelectorAll('img');
        const nextBtn = slider.querySelector('.right');
        const prevBtn = slider.querySelector('.left');
        let currentIndex = 0;

        // Function to update the slider position
        function updateSlider() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Next button click
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        // Previous button click
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });
    });
});
