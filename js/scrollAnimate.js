// 背景轉換
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	var $webSection = $('.web');
	var $appSection = $('.app');

	if (scroll >= $webSection.offset().top - $webSection.height()) { // check the offset top
		$webSection.addClass("dark-brown-bg");

	}
	if (scroll >= $appSection.offset().top - $appSection.height()) { // check the offset top
		$appSection.addClass("black-bg");

	}
});

// fix nav & topbtn hide on top
$(window).scroll(function () {
	var portfolioHeight = $(".portfolio").height();
	var scrollTop = $(this).scrollTop();

	if (scrollTop > portfolioHeight) {
		$(".top-btn").removeClass('hide');
		$(".navigation").addClass('fix');
	} else {
		$(".top-btn").addClass('hide');
		$(".navigation").removeClass('fix');
	}
});

// web 滾動事件
$(window).scroll(function () {
	var webOffset = $('.web').offset().top;
	var windowHeight = $(window).height();
	var scrollPos = $(window).scrollTop();

	if (scrollPos >= webOffset) {
		var items = $('.web .list .item');
		var maxScroll = $('.web').height() - windowHeight; // 最大滾動距離
		var scrollPercentage = (scrollPos - webOffset) / maxScroll; // 滾動百分比

		items.each(function (index) {
			var itemOffset = $(this).offset().top;
			var distanceToTop = itemOffset - scrollPos;
			var nextItem = items.eq(index + 1);

			if (nextItem.length > 0) {
				var nextItemOffset = nextItem.offset().top;
				var nextDistanceToTop = nextItemOffset - scrollPos;

				if (nextDistanceToTop < windowHeight) {
					var percentage = 1 - (nextDistanceToTop / windowHeight);
					var scaleValue = 1 - (percentage * 0.3);
					var opacityValue = 1 - (percentage * 0.3);

					$(this).css({
						'opacity': opacityValue,
						'transform': 'scale(' + scaleValue + ')',
						'transform-origin': 'top'
					});
				} else {
					$(this).css({'opacity': 1, 'transform': 'scale(1)', 'transform-origin': 'top'});
				}
			}
		});
	}
});

// app 滾動事件
$(window).on('scroll', function () {
	var appOffset = $('.app').offset().top;
	var windowScroll = $(this).scrollTop();
	var windowHeight = $(this).height();

	scaleElement($('.app>.list'), appOffset, windowHeight, windowScroll);
});

function scaleElement($element, offsetTop, windowHeight, scroll) {
	var startScroll = offsetTop - windowHeight;
	var endScroll = offsetTop;
	var scaleValue;

	if (scroll >= startScroll && scroll <= endScroll) {
		var progress = (scroll - startScroll) / (endScroll - startScroll);
		scaleValue = 0.5 + progress * 0.5; // 0.5 to 1
	} else if (scroll < startScroll) {
		scaleValue = 0.5;
	} else {
		scaleValue = 1;
	} $element.css('transform', 'scale(' + scaleValue + ')');
}
