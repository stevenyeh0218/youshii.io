// 開啟資料匯入篩選視窗
$('.func_list ').on('click', '.import_btn', function(e) {
    $('#filter_windows').css('display', 'flex');
    setTimeout(function() {
        $('#filter_windows').addClass('op_filter_w');
    }, 100);
});

$('#filter_windows ').on('click', '.cancel_btn', function(e) {
    $('#filter_windows').removeAttr('style').removeClass('op_filter_w');
});