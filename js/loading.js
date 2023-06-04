$(document).ready(function () { // 獲取最後更新時間戳
	var lastUpdated = sessionStorage.getItem('lastUpdated');
	// 如果最後更新時間戳與頁面載入時間戳相同，則不顯示 loading 頁面
	if (lastUpdated === performance.timeOrigin.toString()) {
		$('#loading').remove();
	} else { // 否則顯示 loading 頁面
		$('html, body').css('overflow', 'hidden');
		setTimeout(function () {
			$('#loading').addClass('scaleLoading');
		}, 2000);
		// 等待所有內容載入完畢
		$(window).on('load', function () { // 3 秒後移除 loading 頁面
			setTimeout(function () {
				$('#loading').remove();
			}, 3500);
			setTimeout(function () {
				$('html, body').removeAttr("style");
				AOS.init();
				$(".youshiiDesignLoop").addClass("animate-show")
			}, 4000);
			setTimeout(function () {
				$(".youshiiDesignLoop").addClass("animate-show")
			}, 5000)
		});
	}
	// 更新最後更新時間戳
	sessionStorage.setItem('lastUpdated', performance.timeOrigin.toString());
});
