function scrollToSection(sectionSelector) {
	$("html,body").stop().animate({
		scrollTop: $(sectionSelector).offset().top
	}, "slow", function () {});
}

function scrollToTop() {
	$("html, body").stop().animate({
		scrollTop: 0
	}, "slow");
}

$(".top-btn").click(function () {
	scrollToTop();
});

$(".web-btn").click(function () {
	scrollToSection(".web");
});

$(".app-btn").click(function () {
	scrollToSection(".app");
});

$(".visual-btn,.visual-link").click(function () {
	scrollToSection(".visual");
});

$(".next-btn").click(function () {
	scrollToSection(".detail");
});
