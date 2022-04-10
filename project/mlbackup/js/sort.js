//廣告活動
$('.sort_cell').closest('.admin_info').find('.num').on('click', function() {
    $(this).attr('contenteditable', 'true').addClass('num_active');
    $(this).closest('.admin_info').find('.sort_save_btn').addClass('sort_save_btn_show');
});

//限制只能打數字
$('.sort_cell').closest('.admin_info').find('.num').keyup(function() {
    var tmptxt = $(this).text();
    $(this).text(tmptxt.replace(/\D|^0/g, ''));
}).bind("paste", function() {
    var tmptxt = $(this).text();
    $(this).text(tmptxt.replace(/\D|^0/g, ''));
});

//點擊即儲存
$('.sort_cell').closest('.admin_info').find('.sort_save_btn').on('click', function() {
    $(this).closest('.admin_info').find('.num').removeAttr('contenteditable').removeClass('num_active');
    $(this).removeClass('sort_save_btn_show');
});