$(document).ready(function () {
	const lastUpdated = sessionStorage.getItem('lastUpdated');
	const currentTime = performance.timeOrigin.toString();

	if (lastUpdated === currentTime) {
		$('body').attr('data-loading', 'false').removeAttr('data-transform');
	} else {
		$('body').css('overflow', 'hidden');
		setTimeout(() => {
			$('html,body').animate({
				scrollTop: 0
			}, 0);
		}, 0);
	}

	sessionStorage.setItem('lastUpdated', currentTime);
});

$(window).on('load', function () {
	setTimeout(() => {
		$('html,body').removeAttr("style");
		$('body').attr('data-loading', 'false');

		setTimeout(() => {
			$('body').removeAttr('data-loading');
		}, 700);

	}, 600);

	$('a').on('click', function (event) {
		event.preventDefault();
		const newLocation = this.href;

		$('body').attr('data-transform', 'true');

		setTimeout(() => {
			window.location = newLocation;
		}, 600);
	});
});

window.addEventListener('pageshow', function (event) {
	if (event.persisted || performance.navigation.type === 2) {
		$('body').removeAttr('data-transform');
	}
});
