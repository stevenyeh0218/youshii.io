$('.switch-btn').click(function () {
	var nav = $(this).parent('.navigation');
	$(this).toggleClass('open');
	if (nav.hasClass('open-nav')) {
		nav.removeClass('open-nav');
	} else {
		nav.addClass('open-nav');
	}
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll > 0) { // check the offset top
		$('.switch-btn').removeClass('open')
		$('.navigation').removeClass('open-nav');
	}
});
