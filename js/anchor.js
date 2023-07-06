/* anchor */
function scrollToSection(sectionSelector) {
	$('.youshii-section').css("scroll-snap-align", "unset");
	$("html,body").animate({
		scrollTop: $(sectionSelector).offset().top
	}, "medium", function () {
		$('.youshii-section').removeAttr('style');
	});
}

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
