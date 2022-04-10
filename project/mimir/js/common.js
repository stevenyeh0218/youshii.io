/* include html */
$(function () {
    w3.includeHTML();
});

$('.mimir-nav-list').on('click', function (e) {
    e.stopPropagation();
    $(document.body).on('click.touchstart', function () {

        $('.mimir-nav-list').removeClass('show');
    });
});

/* scroll hide navbar-collapse */
$(window).scroll(function () {
    $('.navbar-collapse').removeClass('show');
});
