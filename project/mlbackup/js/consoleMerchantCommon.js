$(document).ready(function() {
    // $('body').attr('id', 'merchant_admin');
    //會員下拉選單
    $('#admin_header').on('click', '.user_img', function() {
        if ($('.user_list').hasClass('op_list')) {
            $('.user_list').removeClass('op_list');
        } else {
            $('.user_list').addClass('op_list');
        }
    });

    //sidebar 開關事件
    $('.admin_sidebar').on('click', '.sidebar_switch', function() {
        var $switch = $('.sidebar_switch');
        var $admin_canvas = $('.admin_canvas');
        if ($('.admin_sidebar').hasClass('admin_sidebar_close')) {
            $('.admin_sidebar').removeClass('admin_sidebar_close');
            $switch.removeClass('fa-align-center').addClass('fa-align-left');
            $admin_canvas.removeClass('admin_canvas_maxW');
        } else {
            $('.admin_sidebar').addClass('admin_sidebar_close');
            $switch.removeClass('fa-align-left').addClass('fa-align-center');
            $admin_canvas.addClass('admin_canvas_maxW');
        }
    });

    //sidebar list 開關事件
    $('.admin_sidebar').on('click','#m_admin_sidebar_list_switch', function(e) {
        e.preventDefault(e);
        if ($(this).hasClass('m_admin_sidebar_list_close')) {
            $(this).removeClass('m_admin_sidebar_list_close');
            $(this).find('.switch_icon').removeClass('fa-times').addClass('fa-bars');
            $('.admin_sidebar_list').removeClass('op_m_admin_sidebar_list');
        } else {
            $(this).addClass('m_admin_sidebar_list_close');
            $(this).find('.switch_icon').addClass('fa-times').removeClass('fa-bars');
            $('.admin_sidebar_list').addClass('op_m_admin_sidebar_list');
        }
    });

    //手機板 nav open
    $('#admin_header').on('click', '#m_nav_switch', function(e) {
        e.preventDefault(e);
        if ($(this).hasClass('open_nav_switch')) {
            $(this).removeClass('open_nav_switch');
            $(this).find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
            $('#admin_header').find("nav").removeClass('op_nav');
        } else {
            $(this).addClass('open_nav_switch');
            $(this).find('.setting_icon').addClass('fa-times').removeClass('fa-users-cog');
            $('#admin_header').find("nav").addClass('op_nav');
        }
    });

    //商家帳戶管理確認修改-提示視窗open
    $('.account_settings_contain').on('click', '.save_btn', function(e) {
        e.preventDefault(e);
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('warning_style op_message_w');
            $('#message_windows').find('.msg span').text("已儲存");
            $('#message_windows').find('.confirm').text("關閉");
        }, 100);
        e.stopPropagation(e);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            e.stopPropagation(e);
        });
    });
    
    //帳戶設定-申請商家類型開關事件
    $('.merchant_apply_list').on('click', '.icon', function(e) {
        if ($(this).closest('.merchant_apply_list').hasClass('close_list')) {
            $(this).removeClass('fa-plus-square').addClass('fa-minus-square');
            $(this).closest('.merchant_apply_list').removeClass('close_list');
        } else {
            $(this).removeClass('fa-minus-square').addClass('fa-plus-square');
            $(this).closest('.merchant_apply_list').addClass('close_list');
        }
    });

    //更改密碼確認修改-提示視窗open
    $('.changepswd_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("確定要更改??");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //商家管理確認修改-提示視窗open
    $('.merchant_management_contain').on('click', '.save_btn', function(e) {

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("確定要送出??");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //酷碰卷新增儲存-提示視窗open
    $('.m_coupon_management_contain ').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('warning_style op_message_w');
            $('#message_windows').find('.msg span').text("已儲存");
            $('#message_windows').find('.confirm').text("關閉");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });


    //酷碰卷送出審查-提示視窗open
    $('.m_coupon_management_contain').on('click', '.check_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("確定要送出??");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //商家中心全關閉-email
    $('input[data-level="m_s_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $this.parents('.merchant_setting_item').addClass('open');
            $this.closest(".merchant_setting_management_contain").find('input[data-level="m_s_child"]:checked').each(function() {
                $(this).prop('checked', false);
                $(this).parents('.merchant_setting_item').removeClass('open');
            });
        } else {
            $this.parents('.merchant_setting_item').removeClass('open');
            $this.closest(".merchant_setting_management_contain").find('input[data-level="m_s_child"]:not(:checked)').each(function() {
                $(this).prop('checked', false);
                $(this).parents('.merchant_setting_item').removeClass('open');
            });
        }
    });
    //商家中心獨立項目開關事件-email
    $('input[data-level="m_s_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.parents('.merchant_setting_item').addClass('open');
            $this.prop('checked', true);
            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_s_parent"]')
                .parents('.merchant_setting_item')
                .removeClass('open');
            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_s_parent"]')
                .prop('checked', false);
        } else {
            $this.parents('.merchant_setting_item')
                .removeClass('open');
            $this.prop('checked', false);
        }

        if ($this.closest(".merchant_setting_management_contain").find('input[data-level="m_s_child"]:not(:checked)').length == $this.closest(".merchant_setting_management_contain").find('input[data-level="m_s_child"]').length) {
            $(this).closest(".merchant_setting_management_contain")
                .find('input[data-level="m_s_parent"]')
                .prop('checked', true);

            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_s_parent"]')
                .parents('.merchant_setting_item')
                .addClass('open');
        } else {
            $(this).closest(".merchant_setting_management_contain")
                .find('input[data-level="m_s_parent"]')
                .prop('checked', false);
        }
    });

    //商家中心全關閉-promote
    $('input[data-level="m_p_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $this.parents('.merchant_setting_item').addClass('open');
            $this.closest(".merchant_setting_management_contain").find('input[data-level="m_p_child"]:checked').each(function() {
                $(this).prop('checked', false);
                $(this).parents('.merchant_setting_item')
                    .removeClass('open');
            });
        } else {
            $this.parents('.merchant_setting_item').removeClass('open');
            $this.closest(".merchant_setting_management_contain").find('input[data-level="m_p_child"]:not(:checked)').each(function() {
                $(this).prop('checked', false);
                $(this).parents('.merchant_setting_item')
                    .removeClass('open');
            });
        }
    });

    //商家中心獨立項目開關事件-promote
    $('input[data-level="m_p_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.parents('.merchant_setting_item').addClass('open');
            $this.prop('checked', true);
            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_p_parent"]')
                .parents('.merchant_setting_item')
                .removeClass('open');

            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_p_parent"]')
                .prop('checked', false);
        } else {
            $this.parents('.merchant_setting_item').removeClass('open');
            $this.prop('checked', false);
        }

        if ($this.closest(".merchant_setting_management_contain").find('input[data-level="m_p_child"]:not(:checked)').length == $this.closest(".merchant_setting_management_contain").find('input[data-level="m_p_child"]').length) {
            $(this).closest(".merchant_setting_management_contain")
                .find('input[data-level="m_p_parent"]')
                .prop('checked', true);

            $this.closest(".merchant_setting_management_contain")
                .find('input[data-level="m_p_parent"]')
                .parents('.merchant_setting_item')
                .addClass('open');
        } else {
            $(this).closest(".merchant_setting_management_contain")
                .find('input[data-level="m_p_parent"]')
                .prop('checked', false);
        }
    });

    //商家帳號設定-上傳圖片顯示隱藏
    $('#business_license_select').on('change', function() {
        if ($('#business_license_select').val() == 'no') {
            $(this).closest('.merchant_item').find(".upload_btn").addClass('upload_btn_close');
        } else {
            $(this).closest('.merchant_item').find(".upload_btn").removeClass('upload_btn_close');
        }
    });

    $('#physical_store_select').on('change', function() {
        if ($('#physical_store_select').val() == 'no') {
            $(this).closest('.merchant_item').find(".upload_btn").addClass('upload_btn_close');
        } else {
            $(this).closest('.merchant_item').find(".upload_btn").removeClass('upload_btn_close');
        }
    });

    //酷碰眷管理-tabs event
    $(".m_coupon_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.m_coupon_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_c();
            triigletabcontent_c();
            $(this).toggleClass("active");
            $(".m_coupon_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".m_coupon_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.m_coupon_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_c() {
        $(".m_coupon_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_c() {
        $(".m_coupon_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //酷碰眷管理-tabs event end

    //酷碰卷管理-全選/全刪除
    $('input[data-level="c_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".m_coupon_list_content").find('input[data-level="c_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".m_coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".m_coupon_list_content").find('input[data-level="c_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".m_coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
            $this.closest(".m_coupon_list_content").find(".m_coupon_item").addClass('close_m_coupon_item').fadeOut(200);
            $this.closest(".m_coupon_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".m_coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                    e.preventDefault()
                    $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
                    e.stopPropagation();
                });
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

    });

    //酷碰眷管理-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="c_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".m_coupon_list_content").find('input[data-level="c_child"]:checked').length == $this.closest(".m_coupon_list_content").find('input[data-level="c_child"]').length) {
            $(this).closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('checked', true);
        } else {
            $(this).closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
        }

    });

    //酷碰眷管理-個別刪除
    $('.m_coupon_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.m_coupon_item').addClass('close_m_coupon_item').fadeOut(400);
            $this.closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //酷碰卷下載管理-判斷若底下沒有元素的話全選就失效
            if ($(".close_m_coupon_item").length == $this.closest(".m_coupon_list_content").find('.coupon_item').length) {
                $this.closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('disabled', true);
            } else {
                $this.closest(".m_coupon_list_content").find('input[data-level="c_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //酷碰卷管理新增文章- checkbox 事件
    $('input[data-level="plan_description_parent').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $(this).closest(".common_item ").find('.common_cell').removeClass('close_cell');
            $(this).prop('checked', true);
        } else {
            $(this).closest(".common_item ").find('.common_cell').addClass('close_cell');
            $(this).prop('checked', false);
        }

    });

    $('input[data-level="des_child').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $(this).closest(".common_cell ").find('.input_style').removeClass('close_input_style');
            $(this).prop('checked', true);
        } else {
            $(this).closest(".common_cell ").find('.input_style').addClass('close_input_style');
            $(this).prop('checked', false);
        }
    });

    $('input[data-level="additional_charges_child').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $(this).closest(".common_cell ").find('.input_style').removeClass('close_input_style');
            $(this).prop('checked', true);
        } else {
            $(this).closest(".common_cell ").find('.input_style').addClass('close_input_style');
            $(this).prop('checked', false);
        }
    });

    $('input[data-level="notice_child').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $(this).closest(".common_cell ").find('.input_style').removeClass('close_input_style');
            $(this).prop('checked', true);
        } else {
            $(this).closest(".common_cell ").find('.input_style').addClass('close_input_style');
            $(this).prop('checked', false);
        }
    });

    $('input[data-level="trans_child').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $(this).closest(".common_cell ").find('.input_style').removeClass('close_input_style');
            $(this).prop('checked', true);
        } else {
            $(this).closest(".common_cell ").find('.input_style').addClass('close_input_style');
            $(this).prop('checked', false);
        }
    });

    //申請其他商家
    $('input[data-level="select_type"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $this.closest(".merchant_select_contain").find('input[data-level="select_type"]').each(function() {
                if ($(this).is(':not(:checked)')) {
                    $(this).parents('.select_item').addClass('not_select');
                }
                if ($(this).is(':disabled')) {
                    $(this).parents('.select_item').removeClass('not_select');
                }
            });
        }
    });
    //申請其他商家-同意
    $('.other_application_contain').on('click', '.agree_btn', function(e) {
        window.location = 'other_application_table.html';
    });

    //申請其他商家-不同意    
    $('.other_application_contain').on('click', '.disagree_btn', function(e) {
        window.location = 'other_application.html';
    });
});