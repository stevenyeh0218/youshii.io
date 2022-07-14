$(function () {

    $(".bottomBtn").click(function () {
        $('html, body').animate({
            scrollTop: $(document).height() - $(window).height()
        }, 600);
    });
    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(".log-in,.join-us").click(function () {
        $('html, body').animate({
            scrollTop: $('#home-input').offset().top
        }, 600);
    });

    $(".title-btn").click(function () {
        $('html, body').animate({
            scrollTop: $('#dashboard-table').offset().top
        }, 600);
    });

});
