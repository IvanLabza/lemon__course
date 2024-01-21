import Swiper from "swiper/swiper-bundle";

import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    keyboard: {
      enabled: true,
      onlyOnViewport: true,
      padeUpDown: true,
    },
    autoplay: {
      delay: 1070,
      stopOnLastSlide: false,
      disableOnIteration: false,
    },
    speed: 1000,

    breakpoints: {
      770: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});