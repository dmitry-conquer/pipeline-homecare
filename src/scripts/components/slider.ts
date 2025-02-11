const testimonialsElement = document.querySelector(".testimonials__slider");
if (testimonialsElement) {
  //@ts-expect-error ignore swiper types
  new Swiper(testimonialsElement, {
    navigation: {
      prevEl: ".testimonials__nav-button_prev",
      nextEl: ".testimonials__nav-button_next",
    },
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 800,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        spaceBetween: 45,
        slidesPerView: 1.2,
      },
      640: {
        spaceBetween: 65,
        slidesPerView: 1.7,
      },
      992: {
        spaceBetween: 80,
        slidesPerView: 2.1,
      },
      1250: {
        spaceBetween: 80,
        slidesPerView: 3,
      },
    },
  });
}
