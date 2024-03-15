$(document).ready(function () {
    // 檢查並設置元素的初始樣式
    $(".web, .app").css({filter: "blur(50px)", opacity: 0});

    $(window).on("scroll", function () {
        animateSection(".web");
        animateSection(".app");
    });

    function animateSection(sectionSelector) {
        var section = $(sectionSelector);
        if (section.length === 0) {
            return; // 如果元素不存在，則退出函數
        }

        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var sectionOffsetTop = section.offset().top;
        var sectionVisiblePos = sectionOffsetTop - windowHeight;

        if (scrollPosition >= sectionVisiblePos && scrollPosition <= sectionOffsetTop) {
            var percentage = (scrollPosition - sectionVisiblePos) / windowHeight * 100;
            var blurValue = 50 * (1 - percentage / 100);
            var opacityValue = percentage / 100;

            if (percentage <= 100) {
                setTimeout(function () {
                    section.css({
                        filter: "blur(" + blurValue.toFixed(1) + "px)",
                        opacity: opacityValue.toFixed(2)
                    });
                }, 100); // 0.1秒後執行效果
            }
        } else if (scrollPosition < sectionVisiblePos) {
            section.css({filter: "blur(50px)", opacity: 0});
        } else {
            section.css({filter: "blur(0px)", opacity: 1});
        }
    }
});
