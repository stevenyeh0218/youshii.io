// 加入我們
var fixMeTop = $('.jobs_apply').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    var wh = $(window).height();
    var dh = $(document).height();
    var $vWidth = $(window).width();

    if (currentScroll >= fixMeTop - 100) {
        $('.jobs_apply').addClass("fixed_jobs_apply");
    } else {
        $('.jobs_apply').removeClass('fixed_jobs_apply');
    }

    if (currentScroll + wh >= dh - $('#colophon').height() + 300) {
        var posBottom = dh - wh - $('#colophon').height() - 500;
        $('.jobs_apply').css('top', posBottom);
        $('.jobs_apply').addClass("fixed_bottom");
    } else {
        $('.jobs_apply').removeAttr('style');
        $('.jobs_apply').removeClass("fixed_bottom");
    }
});