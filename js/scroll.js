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
