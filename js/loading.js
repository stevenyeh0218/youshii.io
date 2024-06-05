$(document).ready(function () { // 獲取最後更新時間戳
	var lastUpdated = sessionStorage.getItem('lastUpdated');

	// 如果最後更新時間戳與頁面載入時間戳相同，則data-loading=false
	if (lastUpdated === performance.timeOrigin.toString()) {
		$('body').attr('data-loading', 'false');
	} else { // 否則顯示 loading 頁面
		$('body').css('overflow', 'hidden');
		setTimeout(function () {
			$("html,body").animate({
				scrollTop: 0
			}, 0);
		}, 0);
	}

	// 更新最後更新時間戳
	sessionStorage.setItem('lastUpdated', performance.timeOrigin.toString());
});

// 在所有內容載入完畢後執行相關動畫設定
$(window).on('load', function () {
	setTimeout(function () {
		$('html,body').removeAttr("style");
		$('body').attr('data-loading', 'false');

		setTimeout(function () {
			$('body').removeAttr('data-loading');
		}, 1000);

	}, 1000);
});

$('a').on('click', function (event) {
	event.preventDefault();
	var newLocation = this.href;

	$('body').attr('data-transform', 'true');

	setTimeout(function () {
		window.location = newLocation;
	}, 520);
});
