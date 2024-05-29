$('.switch-btn').click(function () {
	var nav = $(this).parent('.navigation');
	$(this).toggleClass('open');
	if (nav.hasClass('open-nav')) {
		nav.removeClass('open-nav');
	} else {
		nav.addClass('open-nav');
	}
});
