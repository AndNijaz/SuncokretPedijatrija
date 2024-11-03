class Carousel {
  constructor(container) {
    this.container = container;
    this.carousel = container.querySelector(".carousel");
    this.slides = container.querySelectorAll(".carousel-slide");
    this.prevButton = container.querySelector(".prev");
    this.nextButton = container.querySelector(".next");

    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000;

    this.init();
  }

  init() {
    this.prevButton.addEventListener("click", () => this.prevSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());

    this.touchStartX = 0;
    this.touchEndX = 0;

    this.carousel.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    });

    this.carousel.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    this.container.addEventListener("mouseenter", () => this.pauseAutoplay());
    this.container.addEventListener("mouseleave", () => this.startAutoplay());
    this.container.addEventListener("touchstart", () => this.pauseAutoplay());
    this.container.addEventListener("touchend", () => this.startAutoplay());

    this.startAutoplay();
  }

  updateCarousel() {
    this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.updateCarousel();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  startAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
    this.autoplayInterval = setInterval(
      () => this.nextSlide(),
      this.autoplayDelay
    );
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel-container");
  new Carousel(carouselContainer);
});
