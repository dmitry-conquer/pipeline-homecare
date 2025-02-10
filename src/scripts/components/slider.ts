//@ts-expect-error ignore swiper types
import Swiper, { Navigation, Autoplay, A11y } from "swiper";

const testimonialsElement = document.querySelector(".testimonials__slider");
if (testimonialsElement) {
  new Swiper(testimonialsElement, {
    modules: [Navigation, Autoplay, A11y],
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 800,
    loop: true,
    centeredSlides: true,
  });
}
