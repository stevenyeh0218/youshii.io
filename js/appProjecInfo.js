// 函式: 顯示專案詳細資訊
function showProjectInfo(targetClass) {
	$(".appProject_info").addClass("active");
	$(`.${targetClass}`).addClass("imgShow");
	$('body').css('overflow', 'hidden');
}

// YouDon
$(".appAproject_app_3").click(function () {
	showProjectInfo("appProject_info_app_3");
});

// 派車
$(".appAproject_car").click(function () {
	showProjectInfo("appProject_info_car");
});

// 快易訂
$(".appAproject_dealer").click(function () {
	showProjectInfo("appProject_info_dealer");
});

// 預約
$(".appAproject_appointment").click(function () {
	showProjectInfo("appProject_info_appointment");
});

// 關閉視窗
$(".appProject_info_closeBtn").click(function () {
	$(".appProject_info").removeClass("active");
	$(".appProject_info_app_3,.appProject_info_car , .appProject_info_dealer, .appProject_info_appointment").removeClass("imgShow");
	$('body').removeAttr("style");
});
