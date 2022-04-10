$(document).ready(function() {

    //酷碰卷管理前台預覽open
    $('.m_coupon_func_bottom').on('click', '.preview_btn', function() {
        var $this = $(this);
        $this.closest('.m_coupon_func_bottom').find('.preview_box').css('display', 'flex');
        setTimeout(function() {
            $this.closest('.m_coupon_func_bottom').find('.preview_box').addClass('op_box');
        }, 100);
    });

    //酷碰卷管理前台預覽close
    $('.m_coupon_func_bottom').on('click', '.close_box', function() {
        var $this = $(this);
        $this.closest('.m_coupon_func_bottom').find('.preview_box').removeAttr("style").removeClass('op_box');
    });

    //達人分享前台預覽open
    $('.blog_func').on('click', '.preview_btn', function() {
        var $this = $(this);
        $this.closest('.blog_func').find('.preview_box').css('display', 'flex');
        setTimeout(function() {
            $this.closest('.blog_func').find('.preview_box').addClass('op_box');
        }, 100);
    });

    //達人分享前台預覽close
    $('.blog_func').on('click', '.close_box', function() {
        var $this = $(this);
        $this.closest('.blog_func').find('.preview_box').removeAttr("style").removeClass('op_box');
    });

    //達人分享(自我介紹)&商家管理前台預覽open
    $('.func_list').on('click', '.preview_btn', function() {
        var $this = $(this);
        $this.closest('.func_list').find('.preview_box').css('display', 'flex');
        setTimeout(function() {
            $this.closest('.func_list').find('.preview_box').addClass('op_box');
        }, 100);
    });

    //達人分享(自我介紹)&商家管理前台預覽close
    $('.func_list').on('click', '.close_box', function() {
        var $this = $(this);
        $this.closest('.func_list').find('.preview_box').removeAttr("style").removeClass('op_box');
    });
});