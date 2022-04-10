/* windows event */
$(window).scroll(function () {

    //    if ($(this).scrollTop() > 0) {
    //        $('#header').addClass('changeHeaderStyle');
    //        $('#topBtn').addClass('show');
    //
    //    } else {
    //        $('#header').removeClass('changeHeaderStyle');
    //        $('#topBtn').removeClass('show');
    //    }
});


$('#topBtn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

$('.switch').click(function () {
    if ($('.menu-list').hasClass('menu-list-close')) {

        $('.menu-list').addClass('menu-list-open').removeClass('menu-list-close');

        $('.switch').addClass('fa-close').removeClass('fa-bars');

    } else {
        $('.menu-list').addClass('menu-list-close').removeClass('menu-list-open');
        $('.switch').addClass('fa-bars').removeClass('fa-close');
    }
    event.stopPropagation();
});

$(document).click(function () {
    if ($('.menu-list').hasClass('menu-list-open')) {
        $('.menu-list').addClass('menu-list-close').removeClass('menu-list-open');
        $('.switch').addClass('fa-bars').removeClass('fa-close');
    }
    event.stopPropagation();
});
