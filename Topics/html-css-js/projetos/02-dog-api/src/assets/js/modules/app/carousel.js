
export default () => {
  window.swiperInstance = new Swiper(".swiper-container", {
    direction: "horizontal",
    allowTouchMove: false,
    loop: false,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
};