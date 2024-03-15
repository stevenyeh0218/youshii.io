$('.mode-switch').click(function () {
	var isChecked = $('.mode-switch input').prop('checked');
	if (isChecked) {
		$('body').removeAttr('data-theme');
	} else {
		$('body').attr('data-theme', 'dark');
	}
});

$(document).ready(function(){
    // 檢查是否支持夜間模式
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 如果是夜間模式
		$('body').attr('data-theme', 'dark');
		$('.mode-switch input').prop('checked', false);
    } else {
        // 如果不是夜間模式
		$('body').removeAttr('data-theme');
		$('.mode-switch input').prop('checked');
    }
});
