/* YouDon */
$(".appAproject_app_3").click(function () {
    $(".appProject_info").addClass("active");
    $(".appProject_info_app_3").addClass("imgShow");
})

/* 派車 */
$(".appAproject_car").click(function () {
    $(".appProject_info").addClass("active");
    $(".appProject_info_car").addClass("imgShow");
})

/* 快易訂 */
$(".appAproject_dealer").click(function () {
    $(".appProject_info").addClass("active");
    $(".appProject_info_dealer").addClass("imgShow");
})

/* 預約 */
$(".appAproject_appointment").click(function () {
    $(".appProject_info").addClass("active");
    $(".appProject_info_appointment").addClass("imgShow");
})

/* 關閉視窗 */
$(".appProject_info_closeBtn").click(function () {
    $(".appProject_info").removeClass("active");
    $(".appProject_info_app_3,.appProject_info_car , .appProject_info_dealer, .appProject_info_appointment").removeClass("imgShow");
})