$(document).ready(function () {
    //首頁商家連結事件
    $('.merchant_name').on('click', function (e) {
        event.preventDefault(e);
        location.href = 'merchant.html';
        event.stopPropagation(e);
    });
});
