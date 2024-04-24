$(document).ready(function () {
	$(".web, .app , .visual").css({filter: "blur(50px)", opacity: 0, transition: "all 0.5s ease"});

	$(window).on("scroll", function () {
		animateSection(".web");
		animateSection(".app");
		animateSection(".visual");
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
				}, 0); // 0秒後執行效果
			}
		} else if (scrollPosition < sectionVisiblePos) {
			section.css({filter: "blur(50px)", opacity: 0});
		} else {
			section.css({filter: "blur(0px)", opacity: 1});
		}
	}
});
