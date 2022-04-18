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

// 슬라이드 탭
$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
  });
});