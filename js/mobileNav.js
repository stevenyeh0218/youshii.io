$(".mobile-nav-switch").click(function () {
	if ($(this).hasClass("close")) {
		$("nav").removeClass("open");
		$(this).removeClass("close");
	} else {
		$("nav").addClass("open");
		$(this).addClass("close");
	}
});

$(window).scroll(function () {
	if ($(window).scrollTop() > 0) {
		$("nav").removeClass("open");
		$(".mobile-nav-switch").removeClass("close");
	}
});
