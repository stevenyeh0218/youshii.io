// intro 滾動事件
$(window).scroll(function () { // 獲取滾動的高度
	var scrollTop = $(this).scrollTop();

	// 計算縮放比例，這裡假設在滾動 1000px 時達到最大縮放比例 3 倍
	var scale = 1 + (scrollTop / 1000) * 2;

	// 限制縮放比例在 1 到 3 之間
	if (scale > 3) 
		scale = 3;
	
	// 設定圖像的縮放比例
	$('.image-sticker img').css('transform', 'scale(' + scale + ')');
});

// 背景轉換
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	var $detailSection = $('.detail');

	if (scroll >= $detailSection.offset().top - $detailSection.height()) { // check the offset top
		$detailSection.addClass("white-bg");

	}
});

// process 滑動事件
$(document).ready(function () { // 滑動動畫的持續時間
	var scrollDuration = 800;

	// 導航項點擊事件
	$('.step .item').on('click', function () {
		var index = $(this).index(); // 獲取點擊的導航項的索引
		$('.step .item').removeClass('active'); // 移除所有導航項的 active 類
		$(this).addClass('active'); // 給當前點擊的導航項添加 active 類

		var target = $('.content .item').eq(index); // 獲取對應索引的內容項
		$('html, body').stop(true, false).animate({
			scrollTop: target.offset().top // 平滑滾動到內容項的位置
		}, scrollDuration); // 動畫持續時間為 800 毫秒
	});

	// 滾動事件
	$(window).scroll(function () {
		var scrollPos = $(window).scrollTop(); // 獲取當前滾動位置
		var processOffset = $('.process').offset().top; // 獲取 .process 的偏移量
		var windowHeight = $(window).height(); // 獲取窗口高度

		if (scrollPos >= processOffset) {
			var items = $('.content .item');
			var maxScroll = $('.process').height() - windowHeight;
			// 最大滾動距離

			// 更新內容項的透明度
			items.each(function (index) {
				var itemOffset = $(this).offset().top;
				var distanceToTop = itemOffset - scrollPos;
				var nextItem = items.eq(index + 1);

				if (nextItem.length > 0) {
					var nextItemOffset = nextItem.offset().top;
					var nextDistanceToTop = nextItemOffset - scrollPos;

					if (nextDistanceToTop < windowHeight) {
						var percentage = 1 - (nextDistanceToTop / windowHeight);
						var opacityValue = 1 - (percentage);

						$(this).css({'opacity': opacityValue, 'transform-origin': 'top'});
					} else {
						$(this).css({'opacity': 1, 'transform': 'scale(1)', 'transform-origin': 'top'});
					}
				}
			});

			// 根據當前滾動位置更新導航項的 active 類
			items.each(function (index) {
				var itemOffset = $(this).offset().top;
				if (scrollPos >= itemOffset - windowHeight / 2 && scrollPos < itemOffset + $(this).outerHeight() - windowHeight / 2) {
					$('.step .item').removeClass('active');
					$('.step .item').eq(index).addClass('active');
				}
			});
		}
	});
});
