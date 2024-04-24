function scrollToSection(sectionSelector) {
	$("html,body").stop().animate({
		scrollTop: $(sectionSelector).offset().top
	}, "fast", function () {});
}

$(".click-top").click(function () {
	scrollToSection(".home");
});

$(".app-design").click(function () {
	scrollToSection(".app");
});

$(".web-design").click(function () {
	scrollToSection(".web");
});

$(".visual-design").click(function () {
	scrollToSection(".visual");
});

$(".top-btn").click(function () {
	scrollToSection(".intro");
});

// 監聽滾動事件
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$(".top-btn").removeClass('hide');
	} else {
		$(".top-btn").addClass('hide');
	}
});
