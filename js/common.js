// 모바일 메뉴 토글
$(".toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.nav_detail').toggleClass("on");
    $(".menu .menu__main").toggleClass('hidden');
    $(".main__banner").toggleClass('hidden');
});

// 모바일 하위메뉴 보이기 숨기기
const showHide = e => {
    const MListDrop = e.children[1];
    const displayAttr = window.getComputedStyle(MListDrop).display;

    if (displayAttr == 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
};

// 모바일 메뉴 선택시 색상변경
$('.main__list a').click(function(){
    $('.main__list a').removeClass("select");
    $(this).addClass("select");
});
