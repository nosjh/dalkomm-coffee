var mainSwiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 2000,
  },
  speed: 800,
  spaceBetween: 24,
  slidesPerView: "auto",
});