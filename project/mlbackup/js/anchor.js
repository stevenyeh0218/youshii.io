var fixMeTop = $('.option_bar').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    var wh = $(window).height();
    var dh = $(document).height();
    var $vWidth = $(window).width();

    if (currentScroll >= fixMeTop - 100) {
        $('.option_bar_list').addClass("fixed_option_bar");
        $('.download_bar').addClass("fixed_download_bar");
    } else {
        $('.option_bar_list').removeAttr('style');
        $('.option_bar_list').removeClass("fixed_option_bar");
        $('.download_bar').removeClass("fixed_download_bar");
    }

    if (currentScroll + wh >= dh - $('#colophon').height() - 100) {
        var posBottom = dh - wh - $('#colophon').height();
        $('.option_bar_list').css('top', posBottom);
        $('.option_bar_list').addClass("fixed_bottom");
        $('.download_bar').css('top', posBottom + $('.option_bar_list').height() + 65);
        $('.download_bar').addClass("fixed_bottom");
    } else {
        $('.option_bar_list').removeAttr('style');
        $('.option_bar_list').removeClass("fixed_bottom");
        $('.download_bar').removeAttr('style');
        $('.download_bar').removeClass("fixed_bottom");
    }

});

// 方案說明
$(".plan_btn").click(function() {
    var $vWidth = $(window).width();

    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".plan_description").offset().top - 150
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $(".plan_description").offset().top - 100
        }, 1000);
    }

    $(this).addClass("active");
    $(".notice_btn,.traffic_btn,.how_btn,.reject_btn,.evaluation_btn").removeClass("active");
});


// 消費通知
$(".notice_btn").click(function() {
    var $vWidth = $(window).width();
    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".consumer_notice").offset().top - 150
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $(".consumer_notice").offset().top - 100
        }, 1000);
    }

    $(this).addClass("active");
    $(".plan_btn,.traffic_btn,.how_btn,.reject_btn,.evaluation_btn").removeClass("active");
});

// 交通方式
$(".traffic_btn").click(function() {
    var $vWidth = $(window).width();
    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".transportation").offset().top - 150
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $(".transportation").offset().top - 100
        }, 1000);
    }
    $(this).addClass("active");
    $(".plan_btn,.notice_btn,.how_btn,.reject_btn,.evaluation_btn").removeClass("active");
});

// 如何說明
$(".how_btn").click(function() {
    var $vWidth = $(window).width();
    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".how_to_used").offset().top - 150
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $(".how_to_used").offset().top - 100
        }, 1000);
    }
    $(this).addClass("active");
    $(".plan_btn,.notice_btn,.traffic_btn,.reject_btn,.evaluation_btn").removeClass("active");
});

// 取消政策
$(".reject_btn").click(function() {
    var $vWidth = $(window).width();
    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".cancellation_policy").offset().top - 150
        }, 1000);
        $(this).addClass("active");
    } else {
        $('html, body').animate({
            scrollTop: $(".cancellation_policy").offset().top - 100
        }, 1000);
        $(this).addClass("active");
    }
    $(".plan_btn,.notice_btn,.traffic_btn,.how_btn,.evaluation_btn").removeClass("active");
});

// 旅客評價
$(".evaluation_btn").click(function() {
    var $vWidth = $(window).width();
    if ($vWidth < 830) {
        $('html, body').animate({
            scrollTop: $(".traveler_evaluation").offset().top - 150
        }, 1000);
    } else {
        $('html, body').animate({
            scrollTop: $(".traveler_evaluation").offset().top - 100
        }, 1000);
    }
    $(this).addClass("active");
    $(".plan_btn,.notice_btn,.traffic_btn,.how_btn,.reject_btn").removeClass("active");
});