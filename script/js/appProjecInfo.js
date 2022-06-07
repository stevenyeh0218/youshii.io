/* APP_1 */
$(".appAproject_app_1").click(function(){
    $(".appProject_info").addClass("active");
    $(".appProject_info_app_1").addClass("imgShow");
})

/* APP_2 */
$(".appAproject_app_2").click(function(){
    $(".appProject_info").addClass("active");
    $(".appProject_info_app_2").addClass("imgShow");
})

/* 派車 */
$(".appAproject_car").click(function(){
    $(".appProject_info").addClass("active");
    $(".appProject_info_car").addClass("imgShow");
})

/* 快易訂 */
$(".appAproject_dealer").click(function(){
    $(".appProject_info").addClass("active");
    $(".appProject_info_dealer").addClass("imgShow");
})

/* 預約 */
$(".appAproject_appointment").click(function(){
    $(".appProject_info").addClass("active");
    $(".appProject_info_appointment").addClass("imgShow");
})

/* 關閉視窗 */
$(".appProject_info_closeBtn").click(function(){
    $(".appProject_info").removeClass("active");
    $(".appProject_info_app_1 , .appProject_info_app_2 , .appProject_info_car , .appProject_info_dealer, .appProject_info_appointment").removeClass("imgShow");
})