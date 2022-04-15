$(".toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.nav_detail').toggleClass("on");
    $(".menu .menu__main").toggleClass('hidden');
    $(".main__banner").toggleClass('hidden');
});