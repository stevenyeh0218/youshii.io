$(function () {
    var position = $(window).scrollTop();

    $(window).on("scroll", function () {
        var scroll = ($(window).scrollTop() / $(window).height());

        scroll++;

        if (scroll > position) {
            var translateY = "translateY(" + scroll + "%)";
            $('.inview-img').css({
                "transform": translateY,
                "-webkit-transform": translateY
            });
        } else {
            var translateY = "translateY(-" + scroll + "%)";
            $('.inview-img').css({
                "transform": translateY,
                "-webkit-transform": translateY
            });
        }
        position = scroll;
    });

});
