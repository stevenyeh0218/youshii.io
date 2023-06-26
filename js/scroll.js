$(".top-btn").click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, "medium")
});

$(".scroll-bar").click(function () {
	$("html,body").animate({
		scrollTop: $(".about").offset().top
	}, "medium")
});

$(window).on("scroll", function () {
	var scrollPosition = $(this).scrollTop();
	var aboutOffsetTop = $(".about").offset().top;

	if (scrollPosition < aboutOffsetTop) {
		var percentage = (aboutOffsetTop - scrollPosition) / aboutOffsetTop * 100;
		$(".about").css("clip-path", "inset(0% 0% 0% " + percentage.toFixed(4) + "%)");
	} else {
		$(".about").css("clip-path", "inset(0% 0% 0% 0%)");
	}
});
