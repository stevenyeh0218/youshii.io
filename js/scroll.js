/* Scroll Top */
$(".top-btn").click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, "medium")
});

/* Scroll Next */
$(".scroll-bar").click(function () {
	$("html,body").animate({
		scrollTop: $(".about").offset().top
	}, "medium")
});

/* Scroll To Home */
$(".home-btn").click(function () {
	$("html,body").animate({
		scrollTop: $(".home").offset().top
	}, "medium")
});

/* Scroll To About */
$(".about-btn").click(function () {
	$("html,body").animate({
		scrollTop: $(".about").offset().top
	}, "medium")
});

/* Scroll To Web */
$(".web-btn").click(function () {
	$("html,body").animate({
		scrollTop: $(".web").offset().top
	}, "medium")
});


/* Scroll To App */
$(".app-btn").click(function () {
	$("html,body").animate({
		scrollTop: $(".app").offset().top
	}, "medium")
});

/* Scroll To Contact */
$(".contact-btn").click(function () {
	$("html,body").animate({
		scrollTop: $(".contact").offset().top
	}, "medium")
});


/* Section Scroll Animate */
$(window).on("scroll", function () {
	var scrollPosition = $(this).scrollTop();
	var windowHeight = $(window).height();

	// About 效果
	var aboutOffsetTop = $(".about").offset().top;
	var aboutVisiblePos = aboutOffsetTop - windowHeight;
	if (scrollPosition >= aboutVisiblePos) {
		var aboutPercentage = (scrollPosition - aboutVisiblePos) / windowHeight * 100;
		var aboutClipPathValue = Math.max(100 - aboutPercentage, 0);
		$(".about").css("clip-path", "inset(0% 0% 0% " + aboutClipPathValue.toFixed(2) + "%)");
	} else {
		$(".about").css("clip-path", "inset(0% 0% 0% 100%)");
	}

	// Web 效果
	var webOffsetTop = $(".web").offset().top;
	var webVisiblePos = webOffsetTop - windowHeight;

	if (scrollPosition >= webVisiblePos && scrollPosition <= webOffsetTop) {
		var webPercentage = (scrollPosition - webVisiblePos) / windowHeight * 100;
		var blurValue = 50 * (1 - webPercentage / 100);
		var opacityValue = webPercentage / 100;

		if (webPercentage <= 100) {
			$(".web").css({
				filter: "blur(" + blurValue.toFixed(1) + "px)",
				opacity: opacityValue.toFixed(2)
			});
		}
	} else if (scrollPosition < webVisiblePos) {
		$(".web").css({filter: "blur(50px)", opacity: 0});
	} else {
		$(".web").css({filter: "blur(0px)", opacity: 1});
	}
});
