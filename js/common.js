// 모바일 메뉴 토글
$(".toggle").on('click', function() {
    $(".list__drop").css("display", "");
    $(this).toggleClass("on");
    $('.nav_detail').toggleClass("on");
    $(".menu .menu__main").toggleClass('hidden');
    $(".main__banner").toggleClass('hidden');
});

// 모바일 하위메뉴 토글
    $( ".show-list" ).parent().on('click', function() {
        if (window.innerWidth < 1024) { 
            $(this).find(".show-list i").toggleClass("down");
            
            
            const view = $(this).find(".list__drop").css("display");
            
            if(view == 'none') {
                $(this).find(".list__drop").show();
            } else {
                $(this).find(".list__drop").hide();
            }
        }
    });

    $(window).resize(function () {
        if (window.innerWidth >= 1024) {  
            $(".list__drop").css("display", "");
        }
    });


// 모바일 메뉴 선택시 색상변경
$('.main__list a').click(function(){
    $('.main__list a').removeClass("select");
    $(this).addClass("select");
});


