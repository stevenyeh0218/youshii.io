$(".top-btn").click(function () {
    $('.youshii-section').css("scroll-snap-align", "unset");
    $("html,body").animate({
        scrollTop: 0
    }, "medium", function () {
        $('.youshii-section').removeAttr('style');
    });
});
