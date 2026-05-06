// 置頂
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

// about和top按鈕滑動到指定區
$(".top-btn,.about-btn").click(function () {
	scrollToTop();
});

// project按鈕滑動到指定區
$(".project-btn").click(function () {
	scrollToSection(".project");
});

// exprience按鈕滑動到指定區
$(".exprience-btn").click(function () {
	scrollToSection(".exprience");
});