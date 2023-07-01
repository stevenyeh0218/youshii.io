$(document).ready(function () { // 獲取最後更新時間戳
	var lastUpdated = sessionStorage.getItem('lastUpdated');

	// 如果最後更新時間戳與頁面載入時間戳相同，則data-loading=false
	if (lastUpdated === performance.timeOrigin.toString()) {
		$('body').attr('data-loading', 'false');
	} else { // 否則顯示 loading 頁面
		$('html, body').css('overflow', 'hidden');
		setTimeout(function () {
			$('.youshii-ci').removeClass('ci-blur');
			$("html,body").animate({
				scrollTop: 0
			}, "medium");
		}, 500);
		// 等待所有內容載入完畢
		$(window).on('load', function () { // 3 秒後data-loading=false
			setTimeout(function () {
				$('html, body').removeAttr("style");
				$('body').attr('data-loading', 'false');

				// section.web 啟用 gsap scrollTrigger animation
				gsap.registerPlugin(ScrollTrigger);

				let horizontalSections = gsap.utils.toArray(".web article .item");
				let verticalSections = gsap.utils.toArray(".app article .item");

				gsap.to(horizontalSections, {
					xPercent: -100 * (horizontalSections.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: ".web",
						pin: true,
						scrub: 1,
						snap: 1 / (horizontalSections.length - 1),
						end: () => "+=" + document.querySelector(".web").offsetWidth
					}
				});

				// section.app 啟用 gsap scrollTrigger animation
				gsap.to(verticalSections, {
					yPercent: -100 * (verticalSections.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: ".app",
						pin: true,
						scrub: 1,
						snap: 1 / (verticalSections.length - 1),
						end: () => "+=" + document.querySelector(".app").offsetHeight
					}
				});

			}, 1000);
		});
	}
	// 更新最後更新時間戳
	sessionStorage.setItem('lastUpdated', performance.timeOrigin.toString());
});
