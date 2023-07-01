/* anchor */
function scrollToSection(sectionSelector) {
	$('.youshii-section').css("scroll-snap-align", "unset");
	$("html,body").animate({
		scrollTop: $(sectionSelector).offset().top
	}, "medium", function () {
		$('.youshii-section').removeAttr('style');
	});
}

$(".top-btn").click(function () {
	scrollToSection(".home");
});

$(".scroll-bar").click(function () {
	scrollToSection(".about");
});

$(".home-btn").click(function () {
	scrollToSection(".home");
});

$(".about-btn").click(function () {
	scrollToSection(".about");
});

$(".web-btn").click(function () {
	scrollToSection(".web");
});

$(".app-btn").click(function () {
	scrollToSection(".app");
});

$(".contact-btn").click(function () {
	scrollToSection(".contact");
});

/* Section Animate */
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
			$(".web > h1 , .web > article ").css({
				filter: "blur(" + blurValue.toFixed(1) + "px)",
				opacity: opacityValue.toFixed(2)
			});
		}
	} else if (scrollPosition < webVisiblePos) {
		$(".web > h1 , .web > article").css({filter: "blur(50px)", opacity: 0});
	} else {
		$(".web > h1 , .web > article").css({filter: "blur(0px)", opacity: 1});
	}

	// App 效果
	var appOffsetTop = $(".app").offset().top;
	var appVisiblePos = appOffsetTop - windowHeight;

	if (scrollPosition >= appVisiblePos && scrollPosition <= appOffsetTop) {
		var appPercentage = (scrollPosition - appVisiblePos) / windowHeight * 100;
		var blurValue = 50 * (1 - appPercentage / 100);
		var opacityValue = appPercentage / 100;

		if (appPercentage <= 100) {
			$(".app > h1 , .app > article").css({
				filter: "blur(" + blurValue.toFixed(1) + "px)",
				opacity: opacityValue.toFixed(2)
			});
		}
	} else if (scrollPosition < appVisiblePos) {
		$(".app > h1 , .app > article").css({filter: "blur(50px)", opacity: 0});
	} else {
		$(".app > h1 , .app > article").css({filter: "blur(0px)", opacity: 1});
	}
});
