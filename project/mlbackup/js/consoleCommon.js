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

    //更改密碼-顯示或隱藏密碼
    $('#show_pswd_swich').on('click', function() {
        var $this = $(this);
        var checked = $this.is(':checked');
        if (checked) {
            $('.changepswd').find('.input_style').attr('type', 'text');

        } else {
            $('.changepswd').find('.input_style').attr('type', 'password');
        }
    });

    //更改密碼-密碼不相符
    $('.changepswd_contain').find(".save_btn").click(function() {

        var pwd = $("input[name='newpswd']").val();
        var cpwd = $("input[name='cpnewpswd']").val();

        if (pwd != cpwd) {
            $('.key_reminder').addClass('show_key_reminder');
            return false;
        } else {
            $('.key_reminder').removeClass('show_key_reminder');
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

    //管理頁面-登出的訊息確認視窗open
    $('#admin_header').on('click', '.user_logout', function(e) {
        e.preventDefault(e);
        $('#admin_header nav').removeClass('op_nav');
        $('#m_nav_switch').removeClass('open_nav_switch');
        $('#m_nav_switch').find('.setting_icon').removeClass('fa-times').addClass('fa-users-cog');
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要登出??");
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

    //帳戶設定確認修改-提示視窗open
    $('.account_settings_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要送出??");
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

    //更改密碼確認修改-提示視窗open
    $('.changepswd_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要更改??");
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

    //達人文章中的新增文章送出-提示視窗open
    $('.blog_management_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要儲存??");
        }, 100);
        e.stopPropagation(e);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });

        //確認視窗-按下取消
        $('#message_windows').on('click', '.refuse', function(e) {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //網站設定確認修改-提示視窗open
    $('.websetting_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('warning_style op_message_w');
            $('#message_windows').find('.msg span').text("已儲存");
            $('#message_windows').find('.confirm').text("關閉");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            e.preventDefault(e);
            $('#message_windows').removeAttr("style").removeClass('warning_style op_message_w');
            e.stopPropagation(e);
        });
    });

    //個別已讀
    $(".msg_list_content").find('.msg_item').click(function() {
        $(this).removeClass('unread');
    });
    $(".coin_list_content").find('.coin_item').click(function() {
        $(this).removeClass('unread');
    });
    $(".point_list_content").find('.point_item').click(function() {
        $(this).removeClass('unread');
    });
    $(".blog_list_content").find('.blog_item').click(function() {
        $(this).removeClass('unread');
    });

    //訊息管理-tabs event
    $(".tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.msg_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab();
            triigletabcontent();
            $(this).toggleClass("active");
            $(".msg_list_content").eq(index).toggleClass("active");

            if (index == 2) {
                $(".attention_sub_tabs").removeClass('sub_tabs_hide');
                $(".merchant_sub_tabs,.blogger_sub_tabs").addClass('sub_tabs_hide');

                var panelHeight = $(".msg_list_content").eq(index).outerHeight() + 110;
                $(this).closest('.msg_management_contain').css("height", panelHeight);

            } else if (index == 4) {
                $(".merchant_sub_tabs").removeClass('sub_tabs_hide');
                $(".attention_sub_tabs,.blogger_sub_tabs").addClass('sub_tabs_hide');

                var panelHeight = $(".msg_list_content").eq(index).outerHeight() + 110;
                $(this).closest('.msg_management_contain').css("height", panelHeight);
            } else if (index == 5) {
                $(".blogger_sub_tabs").removeClass('sub_tabs_hide');
                $(".attention_sub_tabs , .merchant_sub_tabs").addClass('sub_tabs_hide');

                var panelHeight = $(".msg_list_content").eq(index).outerHeight() + 110;
                $(this).closest('.msg_management_contain').css("height", panelHeight);
            } else {
                $(".attention_sub_tabs , .merchant_sub_tabs,.blogger_sub_tabs").addClass('sub_tabs_hide');

                var panelHeight = $(".msg_list_content").eq(index).outerHeight() + 72;
                $(this).closest('.msg_management_contain').css("height", panelHeight);

            }
        });

    });
    //to remove all tab headers
    function triggletab() {
        $(".tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent() {
        $(".msg_list_content").each(function() {
            $(this).removeClass("active");
        });
    }

    $('.attention_sub_tabs').on('click', '.sub_tabs_item', function(e) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    $('.merchant_sub_tabs').on('click', '.sub_tabs_item', function(e) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $('.blogger_sub_tabs').on('click', '.sub_tabs_item', function(e) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    //訊息管理-tabs event end

    //訊息管理-全選/全刪除
    $('input[data-level="parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".msg_list_content").find('input[data-level="child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".msg_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".msg_list_content").find('input[data-level="child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".msg_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('checked', false);
            $this.closest(".msg_list_content").find(".msg_item").addClass('close_msg_item').fadeOut(200);
            $this.closest(".msg_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".msg_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //訊息管理-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".msg_list_content").find('input[data-level="child"]:checked').length == $this.closest(".msg_list_content").find('input[data-level="child"]').length) {
            $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('checked', true);
        } else {
            $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('checked', false);
        }

    });

    //訊息管理-個別刪除
    $('.msg_func').on('click', '.delete_btn', function() {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.msg_item').addClass('close_msg_item').fadeOut(400);
            $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //訊息通知-判斷若底下沒有元素的話全選就失效
            if ($(".close_msg_item").length == $this.closest(".msg_list_content").find('.msg_item').length) {
                $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('disabled', true);
            } else {
                $this.closest(".msg_list_content").find('input[data-level="parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //訊息管理-全部已讀
    $(".func_list").closest(".msg_list_content").find('.all_read_btn').click(function() {
        $(this).closest(".msg_list_content").find('.msg_item').removeClass('unread');
    });

    //酷碰卷下載管理-tabs event
    $(".coupon_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.coupon_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_c();
            triigletabcontent_c();
            $(this).toggleClass("active");
            $(".coupon_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".coupon_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.coupon_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_c() {
        $(".coupon_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_c() {
        $(".coupon_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //酷碰卷下載管理-tabs event end


    //酷碰卷下載管理-全選/全刪除
    $('input[data-level="c_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".coupon_list_content").find('input[data-level="c_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".coupon_list_content").find('input[data-level="c_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
            $this.closest(".coupon_list_content").find(".coupon_item").addClass('close_coupon_item').fadeOut(200);
            $this.closest(".coupon_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".coupon_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //酷碰卷下載管理-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="c_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".coupon_list_content").find('input[data-level="c_child"]:checked').length == $this.closest(".coupon_list_content").find('input[data-level="c_child"]').length) {
            $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('checked', true);
        } else {
            $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
        }

    });

    //酷碰卷下載管理-個別刪除
    $('.coupon_func').on('click', '.delete_btn', function() {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.coupon_item').addClass('close_coupon_item').fadeOut(400);
            $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //酷碰卷下載管理-判斷若底下沒有元素的話全選就失效
            if ($(".close_coupon_item").length == $this.closest(".coupon_list_content").find('.coupon_item').length) {
                $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('disabled', true);
            } else {
                $this.closest(".coupon_list_content").find('input[data-level="c_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //我想成為商家-同意
    $('.btn_list').on('click', '.agree_btn', function(e) {
        window.location = 'merchant_application_table.html';
    });

    //我想成為商家-不同意    
    $('.btn_list').on('click', '.disagree_btn', function(e) {
        window.location = 'index.html';
    });

    //達人分享-tabs event
    $(".blog_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.blog_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_b();
            triigletabcontent_b();
            $(this).toggleClass("active");
            $(".blog_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".blog_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.blog_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_b() {
        $(".blog_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_b() {
        $(".blog_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //達人分享-tabs event end

    //達人分享-全選/全刪除
    $('input[data-level="b_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".blog_list_content").find('input[data-level="b_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".blog_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".blog_list_content").find('input[data-level="b_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".blog_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('checked', false);
            $this.closest(".blog_list_content").find(".blog_item").addClass('close_blog_item').fadeOut(200);
            $this.closest(".blog_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".blog_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //達人分享-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="b_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".blog_list_content").find('input[data-level="b_child"]:checked').length == $this.closest(".blog_list_content").find('input[data-level="b_child"]').length) {
            $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('checked', true);
        } else {
            $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('checked', false);
        }

    });

    //達人分享-個別刪除
    $('.blog_func').on('click', '.delete_btn', function() {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.blog_item').addClass('close_blog_item').fadeOut(400);
            $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //達人分享-判斷若底下沒有元素的話全選就失效
            if ($(".close_blog_item").length == $this.closest(".blog_list_content").find('.blog_item').length) {

                $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('disabled', true);
            } else {
                $this.closest(".blog_list_content").find('input[data-level="b_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //ML金幣-tabs event
    $(".coin_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 137;
        $(this).closest('.coin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_coin();
            triigletabcontent_coin();
            $(this).toggleClass("active");
            $(".coin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".coin_list_content").eq(index).outerHeight() + 137;
            $(this).closest('.coin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_coin() {
        $(".coin_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_coin() {
        $(".coin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //ML金幣-tabs event end

    //ML金幣-全選/全刪除
    $('input[data-level="coin_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".coin_list_content").find('input[data-level="coin_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".coin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".coin_list_content").find('input[data-level="coin_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".coin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('checked', false);
            $this.closest(".coin_list_content").find(".coin_item").addClass('close_coin_item').fadeOut(200);
            $this.closest(".coin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".coin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //ML金幣-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="coin_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".coin_list_content").find('input[data-level="coin_child"]:checked').length == $this.closest(".coin_list_content").find('input[data-level="coin_child"]').length) {
            $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('checked', true);
        } else {
            $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('checked', false);
        }

    });

    //ML金幣-個別刪除
    $('.coin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.coin_item').addClass('close_coin_item').fadeOut(400);
            $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            //ML金幣-判斷若底下沒有元素的話全選就失效
            if ($(".close_coin_item").length == $this.closest(".coin_list_content").find('.coin_item').length) {

                $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('disabled', true);
            } else {
                $this.closest(".coin_list_content").find('input[data-level="coin_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //ML金幣-全部已讀
    $(".func_list").closest(".coin_list_content").find('.all_read_btn').click(function() {
        $(this).closest(".coin_list_content").find('.coin_item').removeClass('unread');
    });

    //ML積分-tabs event
    $(".point_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 137;
        $(this).closest('.point_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_point();
            triigletabcontent_point();
            $(this).toggleClass("active");
            $(".point_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".point_list_content").eq(index).outerHeight() + 137;
            $(this).closest('.point_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_point() {
        $(".point_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_point() {
        $(".point_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //ML積分-tabs event end

    //ML積分-全選/全刪除
    $('input[data-level="point_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".point_list_content").find('input[data-level="point_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".point_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".point_list_content").find('input[data-level="point_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".point_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('checked', false);
            $this.closest(".point_list_content").find(".point_item").addClass('close_point_item').fadeOut(200);
            $this.closest(".point_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".point_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //ML積分-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="point_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".point_list_content").find('input[data-level="point_child"]:checked').length == $this.closest(".point_list_content").find('input[data-level="point_child"]').length) {
            $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('checked', true);
        } else {
            $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('checked', false);
        }

    });

    //ML積分-個別刪除
    $('.point_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.point_item').addClass('close_point_item').fadeOut(400);
            $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            //ML積分-判斷若底下沒有元素的話全選就失效
            if ($(".close_point_item").length == $this.closest(".point_list_content").find('.point_item').length) {

                $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('disabled', true);
            } else {
                $this.closest(".point_list_content").find('input[data-level="point_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //ML積分-全部已讀
    $(".func_list").closest(".point_list_content").find('.all_read_btn').click(function() {
        $(this).closest(".point_list_content").find('.point_item').removeClass('unread');
    });
});