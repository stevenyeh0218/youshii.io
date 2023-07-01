$('.youshii-mode-switch').click(function () {
	var isChecked = $('.youshii-mode-switch input').prop('checked');
	if (isChecked) {
		$('html').removeAttr('data-theme');
	} else {
		$('html').attr('data-theme', 'dark');
	}
});
