var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
  loop: true,

  pagination: {
    el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
    clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },


  }
});