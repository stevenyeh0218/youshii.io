$(document).ready(function() {
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
    $('.admin_sidebar').on('click', '#m_admin_sidebar_list_switch', function(e) {
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

    //管理員-default 高度
    var panelHeight = $('.admin_management').find(".active").outerHeight() + 72;
    $('.admin_management').find('.admin_management_contain').css("height", panelHeight);


    //管理員(資料匯入)-default 高度
    var $vWidth = $(window).width();
    if ($vWidth < 767) {
        var dbHeight = $('.admin_management').find(".active").outerHeight() + 25;
        $('.admin_ad').find('.admin_management_contain').css("height", dbHeight);
    } else {
        var dbHeight = $('.admin_management').find(".active").outerHeight() + 25;
        $('.admin_ad').find('.admin_management_contain').css("height", dbHeight);
    }

    //管理員(資料匯入)-多選新增至列表
    $('.admin_list_content').find('.btn_group').on('click', '.add_all_btn', function() {
        var $this = $(this);
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('warning_style op_message_w');
            $('#message_windows').find('.msg span').text("已新增至列表");
            $('#message_windows').find('.confirm').text("關閉");
        }, 100);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('warning_style op_message_w');
            e.stopPropagation(e);
        });
    });

    //管理員設定-全選/全刪除
    $('input[data-level="admin_setting_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_setting_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_setting_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員設定-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_setting_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_setting_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_setting_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('checked', false);
        }

    });

    //管理員設定-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員設定-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_setting_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員設定確認修改-提示視窗open
    $('.admin_management_contain').on('click', '.save_btn', function(e) {
        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('warning_style op_message_w');
            $('#message_windows').find('.msg span').text("已儲存");
            $('#message_windows').find('.confirm').text("關閉");
        }, 100);
        e.stopPropagation(e);

        //確認視窗-按下關閉
        $('#message_windows').on('click', '.confirm', function(e) {
            $('#message_windows').removeAttr("style").removeClass('warning_style op_message_w');
        });
    });

    //管理員(公益活動)-全選/全刪除
    $('input[data-level="admin_charity_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_charity_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_charity_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(公益活動)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_charity_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_charity_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_charity_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('checked', false);
        }

    });

    //管理員(公益活動)-個別刪除
    $('.admin_charity_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(公益活動)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_charity_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(最新消息)-全選/全刪除
    $('input[data-level="admin_news_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_news_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_news_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(最新消息)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_news_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_news_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_news_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('checked', false);
        }

    });

    //管理員(最新消息)-個別刪除
    $('.admin_charity_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(公益活動)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_news_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(審查)-tabs event
    $(".audit_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_audit();
            triigletabcontent_audit();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_audit() {
        $(".audit_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_audit() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(審查)-tabs event end

    //管理員(會員資料)-申請商家類型開關事件
    $('.merchant_apply_list').on('click', '.icon', function(e) {
        if ($(this).closest('.merchant_apply_list').hasClass('close_list')) {
            $(this).removeClass('fa-plus-square').addClass('fa-minus-square');
            $(this).closest('.merchant_apply_list').removeClass('close_list');
        } else {
            $(this).removeClass('fa-minus-square').addClass('fa-plus-square');
            $(this).closest('.merchant_apply_list').addClass('close_list');
        }
    });

    //管理員(會員資料)-全選/全刪除
    $('input[data-level="admin_user_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_user_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_user_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(會員資料)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_user_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_user_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_user_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('checked', false);
        }

    });

    //管理員(會員資料)-個別刪除
    $('.admin_user_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(會員資料)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_user_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(會員資料中的達人文章)-tabs event
    $(".admin_blog_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_b();
            triigletabcontent_b();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_b() {
        $(".admin_blog_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_b() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(會員資料中的達人文章)-tabs event end

    //管理員(會員資料中的達人文章)-全選/全刪除
    $('input[data-level="admin_blog_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(會員資料中的達人文章)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_blog_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_blog_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_blog_child"]').length) {
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('checked', true);
        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('checked', false);
        }

    });

    //管理員(會員資料中的達人文章)-個別刪除
    $('.admin_blog_func').on('click', '.delete_btn', function() {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(會員資料中的達人文章)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.admin_item').length) {

                $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_blog_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(會員資料中的酷碰卷)-tabs event
    $(".admin_coupon_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_coupon();
            triigletabcontent_coupon();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_coupon() {
        $(".admin_coupon_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_coupon() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(會員資料中的酷碰卷)-tabs event end

    //管理員(會員資料中的酷碰卷)-全選/全刪除
    $('input[data-level="admin_coupon_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(會員資料中的酷碰卷)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_coupon_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_coupn_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_coupon_child"]').length) {
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('checked', true);
        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('checked', false);
        }

    });

    //管理員(會員資料中的酷碰卷)-個別刪除
    $('.admin_coupon_func').on('click', '.delete_btn', function() {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(會員資料中的達人文章)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.admin_item').length) {

                $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_coupon_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });
    //管理員(會員資料中的酷碰卷)- checkbox 事件
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

    //管理員(上傳職缺)-全選/全刪除
    $('input[data-level="admin_jobs_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_jobs_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_jobs_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(上傳職缺)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_jobs_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_jobs_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_jobs_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('checked', false);
        }

    });

    //管理員(上傳職缺)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_jobs_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(廣告)-tabs event
    $(".ad_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_ad();
            triigletabcontent_ad();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_ad() {
        $(".ad_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_ad() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(廣告)-tabs event end

    //管理員(廣告)-全選/全刪除
    $('input[data-level="admin_ad_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_ad_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_ad_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_ad_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_ad_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_ad_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('checked', false);
        }

    });

    //管理員(廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_ad_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(Myan廣告)-全選/全刪除
    $('input[data-level="admin_myanAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(Myan廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_myanAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_myanAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', false);
        }

    });

    //管理員(Myan廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(會員廣告)-全選/全刪除
    $('input[data-level="admin_memberAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(會員廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_myanAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_memberAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_myanAd_parent"]').prop('checked', false);
        }

    });

    //管理員(會員廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_memberAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(底部廣告)-全選/全刪除
    $('input[data-level="admin_bottomAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(底部廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_bottomAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('checked', false);
        }

    });

    //管理員(底部廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_bottomAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(浮動廣告)-全選/全刪除
    $('input[data-level="admin_floatAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(浮動廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_floatAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_floatAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('checked', false);
        }

    });

    //管理員(浮動廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_floatAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(最新消息右側廣告)-全選/全刪除
    $('input[data-level="admin_newsAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(最新消息右側廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_newsAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_newsAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('checked', false);
        }

    });

    //管理員(最新消息右側廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_newsAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(公益活動右側廣告)-全選/全刪除
    $('input[data-level="admin_charityAd_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(公益活動右側廣告)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_charityAd_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_charityAd_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('checked', false);
        }

    });

    //管理員(公益活動右側廣告)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_charityAd_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });
    //管理員(最新優惠)-tabs event
    $(".discount_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_discount();
            triigletabcontent_discount();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_discount() {
        $(".discount_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_discount() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(最新優惠)-tabs event end

    //管理員(最新優惠)-全選/全刪除
    $('input[data-level="admin_discount_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_discount_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_discount_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(最新優惠)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_discount_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_discount_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_discount_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('checked', false);
        }

    });

    //管理員(最新優惠)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_discount_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(最新優惠資料匯入)-全選
    $('input[data-level="admin_discountDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_discountDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_discountDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(最新優惠資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_discountDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_discountDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_featureDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_discountDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_discountDB_parent"]').prop('checked', false);
        }

    });

    //管理員(精挑細選)-tabs event
    $(".feature_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_feature();
            triigletabcontent_feature();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_feature() {
        $(".feature_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_feature() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(精挑細選)-tabs event end

    //管理員(精挑細選)-全選/全刪除
    $('input[data-level="admin_feature_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_feature_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_feature_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(精挑細選)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_feature_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_feature_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_feature_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('checked', false);
        }

    });

    //管理員(精挑細選)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_feature_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(精挑細選資料匯入)-全選
    $('input[data-level="admin_featureDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_featureDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_featureDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(精挑細選資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_featureDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_featureDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_featureDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_featureDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_featureDB_parent"]').prop('checked', false);
        }

    });

    //管理員(Top ten)-tabs event
    $(".topTen_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_topTen();
            triigletabcontent_topTen();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_topTen() {
        $(".topTen_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_topTen() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(Top ten)-tabs event end

    //管理員(Top ten)-全選/全刪除
    $('input[data-level="admin_topTen_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_topTen_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_topTen_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(Top ten)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_topTen_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_topTen_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_topTen_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('checked', false);
        }

    });

    //管理員(Top ten)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_topTen_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(Top ten資料匯入)-全選
    $('input[data-level="admin_topTenDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_topTenDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_topTenDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(精挑細選資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_topTenDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_topTenDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_topTenDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_topTenDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_topTenDB_parent"]').prop('checked', false);
        }

    });

    //管理員(熱門活動)-tabs event
    $(".hotActive_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_hotActive();
            triigletabcontent_hotActive();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_hotActive() {
        $(".hotActive_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_hotActive() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(熱門活動)-tabs event end

    //管理員(熱門活動)-全選/全刪除
    $('input[data-level="admin_hotActive_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(熱門活動)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_hotActive_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_hotActive_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('checked', false);
        }

    });

    //管理員(熱門活動)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_hotActive_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(熱門活動資料匯入)-全選
    $('input[data-level="admin_hotActiveDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(熱門活動資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_hotActiveDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_hotActiveDB_parent"]').prop('checked', false);
        }

    });


    //管理員(ML推薦)-tabs event
    $(".mlRecommand_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_mlRecommand();
            triigletabcontent_mlRecommand();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_mlRecommand() {
        $(".mlRecommand_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_mlRecommand() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(ML推薦)-tabs event end

    //管理員(ML推薦)-全選/全刪除
    $('input[data-level="admin_mlRecommand_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(ML推薦)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_mlRecommand_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('checked', false);
        }

    });

    //管理員(ML推薦)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommand_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(ML推薦資料匯入)-全選
    $('input[data-level="admin_mlRecommandDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(ML推薦資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_mlRecommandDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_mlRecommandDB_parent"]').prop('checked', false);
        }

    });

    //管理員(banner)-全選/全刪除
    $('input[data-level="admin_banner_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_banner_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_banner_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(banner)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_banner_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_banner_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_banner_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('checked', false);
        }

    });

    //管理員(banner)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_banner_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });
    //管理員(資料匯入篩選)-全選
    $('input[data-level="admin_filter_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".flilter_list").find('input[data-level="admin_filter_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".flilter_list").find('input[data-level="admin_filter_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(資料匯入篩選)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_filter_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".flilter_list").find('input[data-level="admin_filter_child"]:checked').length == $this.closest(".flilter_list").find('input[data-level="admin_filter_child"]').length) {
            $(this).closest(".flilter_list").find('input[data-level="admin_filter_parent"]').prop('checked', true);
        } else {
            $(this).closest(".flilter_list").find('input[data-level="admin_filter_parent"]').prop('checked', false);
        }

    });

    //管理員(達人分享)-tabs event
    $(".blogArticle_tabs_item").each(function(index) {

        var panelHeight = $('.main').find(".active").eq(index).outerHeight() + 72;
        $(this).closest('.admin_management_contain').css("height", panelHeight);

        $(this).click(function(e) {
            triggletab_blogArticle();
            triigletabcontent_blogArticle();
            $(this).toggleClass("active");
            $(".admin_list_content").eq(index).toggleClass("active");

            var panelHeight = $(".admin_list_content").eq(index).outerHeight() + 72;
            $(this).closest('.admin_management_contain').css("height", panelHeight);
        });

    });
    //to remove all tab headers
    function triggletab_blogArticle() {
        $(".blogArticle_tabs_item").each(function() {
            $(this).removeClass("active");
        });
    }

    //triggle the tab content
    function triigletabcontent_blogArticle() {
        $(".admin_list_content").each(function() {
            $(this).removeClass("active");
        });
    }
    //管理員(達人分享)-tabs event end

    //管理員(達人分享)-全選/全刪除
    $('input[data-level="admin_blogArticle_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
                e.preventDefault()
                $('#message_windows').css('display', 'block')
                setTimeout(function() {
                    $('#message_windows').addClass('hint_style op_message_w');
                    $('#message_windows').find('.msg span').text("是否要刪除??");
                }, 100);
                e.stopPropagation();
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
            $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function() {
                $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
            });
        }

        $('#message_windows').on('click', '.confirm', function() {
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('checked', false);
            $this.closest(".admin_list_content").find(".admin_item").addClass('close_admin_item').fadeOut(200);
            $this.closest(".admin_management_contain").removeAttr("style");
            $this.prop('disabled', true);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            if ($this.is(':disabled')) {
                $this.closest(".admin_list_content").find('.func_list').on('click', '.delete_all_btn', function(e) {
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

    //管理員(達人分享)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_blogArticle_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('checked', false);
        }

    });

    //管理員(達人分享)-個別刪除
    $('.admin_func').on('click', '.delete_btn', function(e) {
        var $this = $(this);

        $('#message_windows').css('display', 'block')
        setTimeout(function() {
            $('#message_windows').addClass('hint_style op_message_w');
            $('#message_windows').find('.msg span').text("是否要刪除??");
        }, 100);

        $('#message_windows').on('click', '.confirm', function() {
            $this.parents('.admin_item').addClass('close_admin_item').fadeOut(400);
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('checked', false);
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');

            //管理員(上傳職缺)-判斷若底下沒有元素的話全選就失效
            if ($(".close_admin_item").length == $this.closest(".admin_list_content").find('.coupon_item').length) {
                $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('disabled', true);
            } else {
                $this.closest(".admin_list_content").find('input[data-level="admin_blogArticle_parent"]').prop('disabled', false);
            }
        });

        $('#message_windows').on('click', '.refuse', function() {
            $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        });
    });

    //管理員(達人分享資料匯入)-全選
    $('input[data-level="admin_blogArticleDB_parent"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if (checked) {
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_child"]:not(:checked)').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $this.closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_child"]:checked').each(function() {
                $(this).prop('checked', false);
            });
        }
    });

    //管理員(達人分享資料匯入)-單一選擇若全部選起時,全選按鈕也要一併選起
    $('input[data-level="admin_blogArticleDB_child"]').click(function() {
        var $this = $(this);
        var checked = $this.is(':checked');

        if ($this.closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_child"]:checked').length == $this.closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_child"]').length) {
            $(this).closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_parent"]').prop('checked', true);
        } else {
            $(this).closest(".admin_list_content").find('input[data-level="admin_blogArticleDB_parent"]').prop('checked', false);
        }

    });
});