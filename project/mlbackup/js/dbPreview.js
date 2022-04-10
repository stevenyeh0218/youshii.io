$(document).ready(function() {

    //觀看畫面open
    $('.admin_func').on('click', '.preview_btn', function() {
        var $this = $(this);
        $this.closest('.admin_func').find('.preview_box').css('display', 'flex');
        setTimeout(function() {
            $this.closest('.admin_func').find('.preview_box').addClass('op_box');
        }, 100);
    });

    //觀看畫面close
    $('.admin_func').on('click', '.close_box', function() {
        var $this = $(this);
        $this.closest('.admin_func').find('.preview_box').removeAttr("style").removeClass('op_box');
    });
});