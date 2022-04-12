var mainSwiper = new Swiper(".mySwiper", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 2000,
  },
  speed: 800,
  spaceBetween: 24,
  slidesPerView: "auto",
});