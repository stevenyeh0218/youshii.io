$('.mobile-nav-btn').click(function () {
	const nav = $(this).parent('.navigation');
	const icon = $(this).find('i');
	$(this).toggleClass('open');
	$(this).siblings('.list').toggleClass('open-list');

});

$(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll > 0) {
        $('.mobile-nav-btn').removeClass('open');  // 關閉按鈕狀態
        $('.mobile-nav-btn').siblings('.list').removeClass('open-list');        // 關閉選單
    }
});