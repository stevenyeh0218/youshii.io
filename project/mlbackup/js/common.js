$(document).ready(function() {

    //全域搜尋刪除文字按鈕
    $('.input_container').on('click', '.clear_text', function(e) {
        e.preventDefault();
        $('.global_search_input').val('');
    });

    //熱門關鍵字視窗   
    $('.global_search_input').on("focus blur", function() {
        $('.key_words').toggleClass('op_key_words');
    });

    //熱門關鍵字點擊
    $('.key_words').on('click', '.keyword_item', function() {
        $('.global_search_input').val($(this).text());
    });

    //熱門搜尋點擊
    $('.hot_search').on('click', '.hot_item', function() {
        $('.global_search_input').val($(this).text());
    });

    //語言點擊
    $('#header').on('click', '.lang_list_item', function(e) {
        e.preventDefault(e);
        $('.lang_title').text($(this).text());
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('.login_btn,.signup_btn,.shopping_cart,.currency_select,.app_download,.logout_btn,.user_login').removeClass('close_item').show();
        $('.lang_select').removeClass('maxH');
        $('.lang_select').find('div').first().show();
        $('.lang_select').find('.list').removeClass('displayGrid');
        e.stopPropagation(e);
    });

    //幣別點擊
    $('#header').on('click', '.currency_list_item', function(e) {
        e.preventDefault(e);
        $('.currency_title').text($(this).text());
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('.login_btn,.signup_btn,.shopping_cart,.lang_select,.app_download,.logout_btn,.user_login').removeClass('close_item').show();
        $('.currency_select').removeClass('maxH');
        $('.currency_select').find('div').first().show();
        $('.currency_select').find('.list').removeClass('displayGrid');
        e.stopPropagation(e);
    });

    //會員登入視窗open
    $('#header').on('click', '.login_btn', function(e) {
        e.preventDefault(e);
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#login_windows').css('display', 'block')
        setTimeout(function() {
            $('#login_windows').addClass('op_login_w');
        }, 100);
        e.stopPropagation(e);
    });

    //會員登入視窗close
    $('#login_windows').on('click', '.close_w', function(e) {
        e.preventDefault(e);
        $('#login_windows').removeAttr("style").removeClass('op_login_w');
        if ($('.sign_in_form,.sign_up_block ').hasClass('close_window')) {
            $('.sign_in_form,.sign_up_block ').removeClass('close_window');
        }
        if (!$('.forgot_form,.forgot_block ').hasClass('close_window')) {
            $('.forgot_form,.forgot_block ').addClass('close_window');
        }
        e.stopPropagation(e);
    });

    //會員註冊視窗open
    $('#header').on('click', '.signup_btn', function(e) {
        e.preventDefault(e);
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#signup_windows').css('display', 'block')
        setTimeout(function() {
            $('#signup_windows').addClass('op_signup_w');
        }, 100);
        e.stopPropagation(e);
    });

    //會員註冊視窗close
    $('#signup_windows').on('click', '.close_w', function(e) {
        e.preventDefault(e);
        $('#signup_windows').removeAttr("style").removeClass('op_signup_w');
        $('#signup_windows').find('.windows_content').removeClass('merchant_height normal_height notice_height');
        if ($('.switch_content').hasClass('close_switch')) {
            $('.switch_content ').removeClass('close_switch');
        }
        if (!$('.sign_up_form').hasClass('close_window')) {
            $('.sign_up_form').addClass('close_window');
        }
        if (!$('.merchant_form').hasClass('close_window')) {
            $('.merchant_form').addClass('close_window');
        }
        if (!$('.normal_notice_window').hasClass('close_window')) {
            $('.normal_notice_window').addClass('close_window');
        }
        if (!$('.merchant_notice_window').hasClass('close_window')) {
            $('.merchant_notice_window').addClass('close_window');
        }
        e.stopPropagation(e);
    });

    //app下載視窗open
    $('#header').on('click', '.app_download', function(e) {
        e.preventDefault(e);
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#app_windows').css('display', 'block')
        setTimeout(function() {
            $('#app_windows').addClass('op_app_w');
        }, 100);
        e.stopPropagation(e);
    });

    //app下載視窗close
    $('#app_windows').on('click', '.close_app_w', function(e) {
        e.preventDefault(e);
        $('#app_windows').removeAttr("style").removeClass('op_app_w');
        e.stopPropagation(e);
    });

    //登入視窗內的註冊按鈕事件
    $('#login_windows').on('click', '.sign_up_switch', function(e) {
        e.preventDefault(e);
        $('#login_windows').css('display', 'none').removeClass('op_login_w');
        if ($('.sign_in_form,.sign_up_block ').hasClass('close_window')) {
            $('.sign_in_form,.sign_up_block ').removeClass('close_window');
        }
        if (!$('.forgot_form,.forgot_block ').hasClass('close_window')) {
            $('.forgot_form,.forgot_block ').addClass('close_window');
        }
        $('#signup_windows').css('display', 'block')
        setTimeout(function() {
            $('#signup_windows').addClass('op_signup_w');
        }, 100);
        e.stopPropagation(e);
    });

    //忘記密碼視窗open
    $('#login_windows').on('click', '.forget_pswd', function(e) {
        e.preventDefault(e);
        $('.sign_in_form , .sign_up_block').addClass('close_window');
        $('.forgot_form , .forgot_block').removeClass('close_window');
    });

    //忘記密碼視窗close
    $('#login_windows').on('click', '.back_switch', function(e) {
        e.preventDefault(e);
        $('.sign_in_form , .sign_up_block').removeClass('close_window');
        $('.forgot_form , .forgot_block').addClass('close_window');
    });

    //一般會員註冊open
    $('#signup_windows').on('click', '.normal_sign_up', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').addClass('notice_height');
        $('.switch_content').addClass('close_switch');
        $('.normal_notice_window').removeClass('close_window');
    });
    //一般會員註冊資料-同意
    $('#signup_windows').on('click', '.normal_agree_btn', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').addClass('normal_height').removeClass('notice_height');
        $('.normal_notice_window').addClass('close_window');
        $('.sign_up_form').removeClass('close_window');
    });
    //一般會員註冊資料-不同意
    $('#signup_windows').on('click', '.normal_disagree_btn', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').removeClass('notice_height');
        $('.switch_content').removeClass('close_switch');
        $('.normal_notice_window').addClass('close_window');
    });

    //商家註冊open
    $('#signup_windows').on('click', '.merchant_sign_up', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').addClass('notice_height');
        $('.switch_content').addClass('close_switch');
        $('.merchant_notice_window').removeClass('close_window');
    });
    //商家註冊資料-同意
    $('#signup_windows').on('click', '.merchant_agree_btn', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').addClass('merchant_height').removeClass('notice_height');
        $('.merchant_notice_window').addClass('close_window');
        $('.merchant_form').removeClass('close_window');
    });
    //商家註冊資料-不同意
    $('#signup_windows').on('click', '.merchant_disagree_btn', function(e) {
        e.preventDefault(e);
        $('#signup_windows').find('.windows_content').removeClass('notice_height');
        $('.switch_content').removeClass('close_switch');
        $('.merchant_notice_window').addClass('close_window');
    });

    //顯示或隱藏密碼
    $('#signup_windows').on('click', '.show_pswd', function(e) {
        e.preventDefault(e);
        var pass_type = $('.pswd').find('.input_style').attr('type');

        if (pass_type === 'password') {
            $('.pswd').find('.input_style').attr('type', 'text');
            $('.show_pswd').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('.pswd').find('.input_style').attr('type', 'password');
            $('.show_pswd').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('#signup_windows').on('click', '.show_confirm_pswd', function(e) {
        e.preventDefault(e);
        var pass_type = $('.pswd_confirm').find('.input_style').attr('type');

        if (pass_type === 'password') {
            $('.pswd_confirm').find('.input_style').attr('type', 'text');
            $('.show_confirm_pswd').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('.pswd_confirm').find('.input_style').attr('type', 'password');
            $('.show_confirm_pswd').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('#login_windows').on('click', '.show_pswd', function(e) {
        e.preventDefault(e);
        var pass_type = $('.pswd').find('.input_style').attr('type');

        if (pass_type === 'password') {
            $('.pswd').find('.input_style').attr('type', 'text');
            $('.show_pswd').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('.pswd').find('.input_style').attr('type', 'password');
            $('.show_pswd').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    //密碼不相符
    $('#signup_windows').on('click', '.sign_up_btn', function() {
        var pwd = $('.sign_up_form').find("input[name='pswd']").val();
        var cpwd = $('.sign_up_form').find("input[name='cppswd']").val();

        if (pwd != cpwd) {
            $('#signup_windows').find('.key_reminder').addClass('show_key_reminder');
            return false;
        } else {
            $('#signup_windows').find('.key_reminder').removeClass('show_key_reminder');
        }
    });

    $('#signup_windows').on('click', '.merchant_sign_up_btn', function() {
        var pwd = $('#signup_windows').find("input[name='m_pswd']").val();
        var cpwd = $('#signup_windows').find("input[name='m_cppswd']").val();

        if (pwd != cpwd) {
            $('#signup_windows').find('.m_key_reminder').addClass('show_key_reminder');
            return false;
        } else {
            $('#signup_windows').find('.m_key_reminder').removeClass('show_key_reminder');
        }
    });

    //登出的訊息確認視窗open
    $('#header').on('click', '.logout_btn', function(e) {
        e.preventDefault(e);
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("確定要登出??");
        }, 100);
        e.stopPropagation(e);

        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            e.stopPropagation(e);
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            e.stopPropagation(e);
        });
    });

    //註冊-訊息確認視窗open
    $('#signup_windows').on('click', '.sign_up_btn', function(e) {

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要送出??");
        }, 100);


        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            $('#signup_windows').css('display', 'none').removeClass('op_signup_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    $('#signup_windows').on('click', '.merchant_sign_up_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要送出??");
        }, 100);

        //確認視窗-訊息確認視窗open
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            $('#signup_windows').css('display', 'none').removeClass('op_signup_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //重設密碼-訊息確認視窗open
    $('#login_windows').on('click', '.reset_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("信箱是否正確??");
        }, 100);

        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            $('#signup_windows').css('display', 'none').removeClass('op_signup_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //coupon券下載確認視窗open
    $('#coupon_windows').on('click', '.coupon_download_btn', function(e) {
        e.preventDefault(e);
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要下載此酷碰卷??");
        }, 100);
        e.stopPropagation(e);

        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            $('#coupon_windows').css('display', 'none').removeClass('op_coupon_w');
            e.stopPropagation(e);
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            e.stopPropagation(e);
        });
    });

    //聯絡我們確認視窗open
    $('#myanlife_contact').on('click', '.save_btn', function() {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要下載此酷碰卷??");
        }, 100);

        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //加入我們確認視窗open
    $('#myanlife_jobs').on('click', '.save_btn', function() {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要下載此酷碰卷??");
        }, 100);

        //確認視窗-按下是
        $('#message_windows').on('click', '.confirm', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //手機板 header open
    $('#m_header_switch').on('click', function(e) {
        e.preventDefault(e);
        if ($(this).hasClass('open_m_switch')) {
            $(this).removeClass('open_m_switch');
            $(this).find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
            $('#header').removeClass('op_m_header');
            $('.login_btn,.signup_btn,.shopping_cart,.lang_select,.currency_select,.app_download,.logout_btn,.user_login').removeClass('close_item').show();
            $('.currency_select').removeClass('maxH');
            $('.currency_select').find('div').first().show();
            $('.currency_select').find('.list').removeClass('displayGrid');
            $('.lang_select').removeClass('maxH');
            $('.lang_select').find('div').first().show();
            $('.lang_select').find('.list').removeClass('displayGrid');
        } else {
            $(this).addClass('open_m_switch');
            $(this).find('.setting_icon').addClass('fa-times').removeClass('fa-users-cog');
            $('#header').addClass('op_m_header');
        }
    });

    //手機板 nav open
    $('#m_list_Navigation_switch').on('click', function(e) {
        event.preventDefault(e);
        if ($('#myanLife_list_Navigation').hasClass('op_list_nav')) {
            $('#myanLife_list_Navigation').removeClass('op_list_nav');
            $(this).removeClass('m_list_close');
            $(this).find('.link_icon').removeClass('fa-times').addClass('fa-bars');
        } else {
            $('#myanLife_list_Navigation').addClass('op_list_nav');
            $(this).addClass('m_list_close');
            $(this).find('.link_icon').addClass('fa-times').removeClass('fa-bars');
        }
    });

    //手機板 sidebar open
    $('.m_sidebar_switch').on('click', function(e) {
        e.preventDefault(e);
        if ($('.sidebar').hasClass('op_sidebar')) {
            $('.sidebar').removeClass('op_sidebar');
            $(this).find('.sidebar_icon').removeClass('fa-times').addClass('fa-list');
        } else {
            $('.sidebar').addClass('op_sidebar');
            $(this).find('.sidebar_icon').addClass('fa-times').removeClass('fa-list');
        }
    });

    //廣告視窗open
    $('.ad_switch').on('click', function(e) {
        e.preventDefault(e);
        if ($('#ad').hasClass('op_ad_w')) {
            $('#ad').removeClass('op_ad_w');
        } else {
            $('#ad').addClass('op_ad_w');
        }
        e.stopPropagation(e);
    });

    //廣告 close on desktop
    $('.ad_list').on('click', '.close_ad_list', function(e) {
        e.preventDefault(e);
        $('#ad').hide();
        e.stopPropagation(e);
    });

    //scrollTop
    $('#wrapper').on('click', '#top_btn', function(e) {
        e.preventDefault(e);
        $('html,body').animate({
                scrollTop: 0
            },
            'medium');
        e.stopPropagation(e);
    });

    //會員下拉選單
    $('#header').on('click', '.user_img', function(e) {
        e.preventDefault(e);
        if ($('.user_list').hasClass('op_list')) {
            $('.user_list').removeClass('op_list');
        } else {
            $('.user_list').addClass('op_list');
        }
        e.stopPropagation(e);
    });



    //左側篩選開關
    $('.classify_item_header').on('click', '.display_btn', function() {
        if ($(this).closest('.classify_item').find('.classify_item_list').hasClass('undisplay_list')) {
            $(this).removeClass('fa-plus').addClass('fa-minus');
            $(this).closest('.classify_item').find('.classify_item_list').removeClass('undisplay_list');
        } else {
            $(this).addClass('fa-plus').removeClass('fa-minus');
            $(this).closest('.classify_item').find('.classify_item_list').addClass('undisplay_list');
        }
    });

    //左側篩選全選
    $('input[data-level="parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $this.closest(".classify_item").find('input[data-level="child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
                var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
                $(".filter_condition_list").prepend(html);
            });
        } else {
            $this.closest(".classify_item").find('input[data-level="child"]:checked').each(function() {
                $(this).prop('checked', false);
                $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
            });
        }
        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }

        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    //左側篩選點擊顯示在結果區域    
    $('input[data-level="child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);
        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($this.closest(".classify_item").find('input[data-level="child"]:checked').length == $this.closest(".classify_item").find('input[data-level="child"]').length) {
            $(this).closest(".classify_item").find('input[data-level="parent"]').prop('checked', true);
        } else {
            $(this).closest(".classify_item").find('input[data-level="parent"]').prop('checked', false);
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }

        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }

    });

    $('input[data-level="day"]').click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);

        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    $('input[data-level="price"]').click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);

        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    $('input[data-level="cuisine"]').click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);

        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    $('input[data-level="star"]').click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);

        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    $('input[data-level="hotel"]').click(function() {
        var checked = $(this).is(':checked');
        if (checked) {
            var html = "<div class='filter_condition_item' data-val='" + $(this).val() + "' data-level='filter_condition'>" + $(this).val() + "<i class='fas fa-times filter_clear'></i>" + "</div>";
            $(".filter_condition_list").prepend(html);

        } else {
            $('.filter_condition_item:contains(' + $(this).val() + ')').remove();
        }

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });

    //篩選條件清除
    $('.filter_condition_list').on('click', '.filter_clear', function() {
        var $this = $(this).parent();
        var oldValue = $this.data("val");

        $("input[type=checkbox][data-level='child']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }

            if ($(this).closest(".classify_item").find('input[data-level="child"]:checked').length == $(this).closest(".classify_item").find('input[data-level="child"]').length) {
                $(this).closest(".classify_item").find('input[data-level="parent"]').prop('checked', true);
            } else {
                $(this).closest(".classify_item").find('input[data-level="parent"]').prop('checked', false);
            }
        });

        $("input[type=checkbox][data-level='day']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }
        });

        $("input[type=checkbox][data-level='price']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }
        });

        $("input[type=checkbox][data-level='cuisine']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }
        });

        $("input[type=checkbox][data-level='star']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }
        });


        $("input[type=checkbox][data-level='hotel']").each(function() {
            if ($(this).val() == oldValue) {
                $(this).prop("checked", false);
            }
        });

        $this.remove();

        if ($('.filter_condition_item').length > 0) {
            var clearText = "<div class='filter_clear_all'>清除所有條件</div>";
            $(".filter_condition_list").append(clearText);

            if ($('.filter_clear_all').length >= 2) {
                $(".filter_clear_all:last").remove();
            }
        } else {
            $(".filter_condition_item").remove();
            $(".filter_clear_all").remove();
        }
    });


    //清除所有條件
    $('.filter_condition_list').on('click', '.filter_clear_all', function() {
        $('input[data-level="parent"]').prop('checked', false);
        $('input[data-level="child"]').prop('checked', false);
        $('input[data-level="day"]').prop('checked', false);
        $('input[data-level="price"]').prop('checked', false);
        $('input[data-level="cuisine"]').prop('checked', false);
        $('input[data-level="star"]').prop('checked', false);
        $('input[data-level="hotel"]').prop('checked', false);
        $('.filter_condition_item').remove();
        $(this).remove();
    });


    //選單列表排序方式功能
    $('.filter_item').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    //達人分享排序方式功能
    $('.sharing_filter_item').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    //酷碰券下載視窗
    $('.discount_content').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.featured_content').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        event.stopPropagation(e);
    });
    $('.hot_ten_content').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.hot_active_content').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.explore_in_depth_item').find('.info_evaluation').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.hot_active_location_content').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.recently_content ').find('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.download_info').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });
    $('.coupon_download').click(function(e) {
        e.preventDefault();
        $('#header').removeClass('op_m_header');
        $('#m_header_switch').removeClass('open_m_switch');
        $('#m_header_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#coupon_windows').css('display', 'block')
        setTimeout(function() {
            $('#coupon_windows').addClass('op_coupon_w');
        }, 100);
        e.stopPropagation(e);
    });

    //酷碰券下載視窗close
    $('#coupon_windows').on('click', '.close_coupon_w', function(e) {
        e.preventDefault(e);
        $('#coupon_windows').css('display', 'none').removeClass('op_coupon_w');
        e.stopPropagation(e);
    });

    //幣別手機板下拉選單事件 open
    $('#header').on('click', '.currency_select', function(e) {
        event.preventDefault(e);
        var $vWidth = $(window).width();
        if ($vWidth < 1200) {
            $('.login_btn,.signup_btn,.shopping_cart,.lang_select,.app_download,.logout_btn,.user_login,.merchant_application,.merchant_center').addClass('close_item');
            $(this).find('div').first().hide();
            $(this).addClass('maxH');
            $(this).find('.list').addClass('displayGrid');
            setTimeout(function() {
                $('.login_btn,.signup_btn,.shopping_cart,.lang_select,.app_download,.logout_btn,.user_login').hide();
            }, 100);
        }
    });

    //幣別手機板下拉選單事件 close
    $('#header').on('click', '.currency_return_btn', function(e) {
        e.preventDefault(e);
        $('.login_btn,.signup_btn,.shopping_cart,.lang_select,.app_download,.logout_btn,.user_login,.merchant_application,.merchant_center').removeClass('close_item').show();
        $('.currency_select').removeClass('maxH');
        $('.currency_select').find('div').first().show();
        $('.currency_select').find('.list').removeClass('displayGrid');
        e.stopPropagation(e);
    });

    //語言手機板下拉選單事件 open
    $('#header').on('click', '.lang_select', function(e) {
        e.preventDefault(e);
        var $vWidth = $(window).width();
        if ($vWidth < 991) {
            $('.login_btn,.signup_btn,.shopping_cart,.currency_select,.app_download,.logout_btn,.user_login').addClass('close_item');
            $(this).find('div').first().hide();
            $(this).addClass('maxH');
            $(this).find('.list').addClass('displayGrid');
            setTimeout(function() {
                $('.login_btn,.signup_btn,.shopping_cart,.currency_select,.app_download,.logout_btn,.user_login').hide();
            }, 100);
        }
        e.stopPropagation(e);
    });

    //語言手機板下拉選單事件 close
    $('#header').on('click', '.lang_return_btn', function(e) {
        e.preventDefault(e);
        $('.login_btn,.signup_btn,.shopping_cart,.currency_select,.app_download,.logout_btn,.user_login').removeClass('close_item').show();
        $('.lang_select').removeClass('maxH');
        $('.lang_select').find('div').first().show();
        $('.lang_select').find('.list').removeClass('displayGrid');
        e.stopPropagation(e);
    });

    //商家帳號設定-上傳圖片顯示隱藏
    $('#signup_windows').on('click', '.license input[type=radio]', function(e) {
        if ($("input[name='license']:checked").val() == "yes") {
            $('#signup_windows').find(".license .upload_btn").removeClass('upload_btn_close');
        } else {
            $('#signup_windows').find(".license .upload_btn").addClass('upload_btn_close');
        }
    });

    $('#signup_windows').on('click', '.store input[type=radio]', function(e) {
        if ($("input[name='store']:checked").val() == "yes") {
            $('#signup_windows').find(".store .upload_btn").removeClass('upload_btn_close');
        } else {
            $('#signup_windows').find(".store .upload_btn").addClass('upload_btn_close');
        }
    });


    //最新消息 sidebar open
    $('.m_news_sidebar_switch').on('click', function(e) {
        e.preventDefault(e);
        if ($('.news_sidebar').hasClass('op_sidebar')) {
            $('.news_sidebar').removeClass('op_sidebar');
            $(this).find('.sidebar_icon').removeClass('fa-times').addClass('fa-list');
        } else {
            $('.news_sidebar').addClass('op_sidebar');
            $(this).find('.sidebar_icon').addClass('fa-times').removeClass('fa-list');
        }
    });
});