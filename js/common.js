// 모바일 메뉴 토글
$(".toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.nav_detail').toggleClass("on");
    $(".menu .menu__main").toggleClass('hidden');
    $(".main__banner").toggleClass('hidden');
});

// 모바일 하위메뉴 토글
// if(matchMedia("screen and (max-width: 1023px)").matches) {
// $( ".list__drop").hide();
// $( ".show-list" ).parent().on('click', function() {
//     $(this).find(".show-list i").toggleClass("down");
//     $(this).find(".list__drop").toggle();
// }); }

// window.addEventListener("optimizedResize", function() {
//     let winWidth = window.innerWidth;

//     if (winWidth < 1024) {
//         $( ".list__drop").hide();
//         $( ".show-list" ).parent().on('click', function() {
//             $(this).find(".show-list i").toggleClass("down");
//             $(this).find(".list__drop").toggle();
//         });
//     }
// });


if (window.innerWidth < 1024) {
    $(".list__drop").css("display", "");
    $( ".list__drop").hide();
    $( ".show-list" ).parent().on('click', function() {
        $(this).find(".show-list i").toggleClass("down");


       const view = $(this).find(".list__drop").css("display");

       if(view == 'none') {
            $(this).find(".list__drop").show(0, function() {
                // $(this).css("display", "");
            });
       } else {
            $(this).find(".list__drop").hide(0, function() {
                // $(".list__drop").css("display", "");
            });
       }

        // $(this).find(".list__drop").css("display", "block");

        // $(this).find(".list__drop").toggle();
    });
} else {
    $(".list__drop").css("display", "");
}


$(window).resize(function () {
    if (window.innerWidth < 1024) {
        $(".list__drop").css("display", "");
        $( ".list__drop").hide();
        $( ".show-list" ).parent().on('click', function() {
            $(this).find(".show-list i").toggleClass("down");

            const view = $(this).find(".list__drop").css("display");

            if(view == 'none') {
                 $(this).find(".list__drop").show(0, function() {
                    //  $(this).css("display", "");
                 });
            } else {
                 $(this).find(".list__drop").hide(0, function() {
                    //  $(".list__drop").css("display", "");
                 });
            }
            // $(this).find(".list__drop").toggle();

            // $(this).find(".list__drop").css("display")

            // $(this).find(".list__drop").css("display", "block");
        });
    } else {
        $(".list__drop").css("display", "");
    }
});

// 모바일 메뉴 선택시 색상변경
$('.main__list a').click(function(){
    $('.main__list a').removeClass("select");
    $(this).addClass("select");
});


