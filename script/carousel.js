class Carousel {
  constructor(t) {
    (this.container = t),
      (this.carousel = t.querySelector(".carousel")),
      (this.slides = t.querySelectorAll(".carousel-slide")),
      (this.prevButton = t.querySelector(".prev")),
      (this.nextButton = t.querySelector(".next")),
      (this.currentIndex = 0),
      (this.slideCount = this.slides.length),
      (this.autoplayInterval = null),
      (this.autoplayDelay = 5e3),
      this.init();
  }
  init() {
    this.prevButton.addEventListener("click", () => this.prevSlide()),
      this.nextButton.addEventListener("click", () => this.nextSlide()),
      (this.touchStartX = 0),
      (this.touchEndX = 0),
      this.carousel.addEventListener(
        "touchstart",
        (t) => {
          this.touchStartX = t.changedTouches[0].screenX;
        },
        { passive: !0 }
      ),
      this.carousel.addEventListener(
        "touchend",
        (t) => {
          (this.touchEndX = t.changedTouches[0].screenX), this.handleSwipe();
        },
        { passive: !0 }
      ),
      this.container.addEventListener("mouseenter", () => this.pauseAutoplay()),
      this.container.addEventListener("mouseleave", () => this.startAutoplay()),
      this.container.addEventListener(
        "touchstart",
        () => this.pauseAutoplay(),
        { passive: !0 }
      ),
      this.container.addEventListener("touchend", () => this.startAutoplay(), {
        passive: !0,
      }),
      this.startAutoplay();
  }
  updateCarousel() {
    this.carousel.style.transform = `translateX(-${100 * this.currentIndex}%)`;
  }
  nextSlide() {
    (this.currentIndex = (this.currentIndex + 1) % this.slideCount),
      this.updateCarousel();
  }
  prevSlide() {
    (this.currentIndex =
      (this.currentIndex - 1 + this.slideCount) % this.slideCount),
      this.updateCarousel();
  }
  handleSwipe() {
    let t = this.touchStartX - this.touchEndX;
    Math.abs(t) > 50 && (t > 0 ? this.nextSlide() : this.prevSlide());
  }
  startAutoplay() {
    this.autoplayInterval && clearInterval(this.autoplayInterval),
      (this.autoplayInterval = setInterval(
        () => this.nextSlide(),
        this.autoplayDelay
      ));
  }
  pauseAutoplay() {
    this.autoplayInterval &&
      (clearInterval(this.autoplayInterval), (this.autoplayInterval = null));
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let t = document.querySelector(".carousel-container");
  new Carousel(t);
});
