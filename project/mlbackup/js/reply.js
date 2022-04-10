// 留言回覆
$(".reply_btn").click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).closest('.reply_content').find('.reply_from ').addClass('hide_reply_form');
    } else {
        $(this).addClass('active');
        $(this).closest('.reply_content').find('.reply_from ').removeClass('hide_reply_form');
    }
});

// auto height
$('.reply_area').on('input', function() {
    this.style.height = 'auto';
    this.style.height =
        (this.scrollHeight) + 'px';
});
$('.comment_textarea').on('input', function() {
    this.style.height = 'auto';
    this.style.height =
        (this.scrollHeight) + 'px';
});

//tool click
$('.tool').on('click', '.icon', function() {
    $(this).toggleClass('active');
    $(this).closest('.tool').find('.tool_list').toggleClass('show_tool_list');
});

//編輯 
$('.traveler_msg_item').on('click', '.edit_item', function() {
    $(this).closest('.traveler_msg_item').find('.msg_data').attr('contenteditable', 'true').css({ "border": "1px solid #363636", "-webkit-line-clamp": "inherit"});
    $(this).closest('.traveler_msg_item').find('.save_msg_data').addClass('show_edit_save_btn');
    $(this).closest('.tool').find('.icon').removeClass('active');
    $(this).closest('.tool').find('.tool_list').removeClass('show_tool_list');
});

//編輯儲存
$('.traveler_msg_item').on('click', '.save_msg_data', function() {
    $(this).closest('.traveler_msg_item').find('.msg_data').removeAttr('contenteditable style');
    $(this).closest('.traveler_msg_item').find('.save_msg_data').removeClass('show_edit_save_btn');   
});

//刪除 
$('.traveler_msg_item').on('click', '.del_item', function(e) {
    var $this = $(this);
    $('#message_windows').css('display', 'block')
    setTimeout(function() {
        $('#message_windows').addClass('hint_style op_message_w');
        $('#message_windows').find('.msg span').text("確定要刪除??");
    }, 100);

    //確認視窗-按下關閉
    $('#message_windows').on('click', '.confirm', function(e) {
        $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        $this.closest('.traveler_msg_item').hide();
        $this.closest('.tool').find('.icon').removeClass('active');
        $this.closest('.tool').find('.tool_list').removeClass('show_tool_list');
    });

    //確認視窗-按下取消
    $('#message_windows').on('click', '.refuse', function(e) {
        $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        $(this).closest('.tool').find('.icon').removeClass('active');
        $(this).closest('.tool').find('.tool_list').removeClass('show_tool_list');
    });
    e.stopPropagation()
});

//回覆編輯
$('.reply_item').on('click', '.edit_item', function(e) {
    $(this).closest('.reply_item').find('.reply_data').attr('contenteditable', 'true').css({ "border": "1px solid #363636", "-webkit-line-clamp": "inherit"});
    $(this).closest('.reply_item').find('.save_reply_data').addClass('show_edit_save_btn');
    $(this).closest('.tool').find('.icon').removeClass('active');
    $(this).closest('.tool').find('.tool_list').removeClass('show_tool_list');
    e.stopPropagation()
});

//回覆編輯儲存
$('.reply_item').on('click', '.save_reply_data', function() {
    $(this).closest('.reply_item').find('.reply_data').removeAttr('contenteditable style');
    $(this).closest('.reply_item').find('.save_reply_data').removeClass('show_edit_save_btn');   
});

//回覆刪除 
$('.reply_item').on('click', '.del_item', function(e) {
    var $this = $(this);
    $('#message_windows').css('display', 'block')
    setTimeout(function() {
        $('#message_windows').addClass('hint_style op_message_w');
        $('#message_windows').find('.msg span').text("確定要刪除??");
    }, 100);

    //確認視窗-按下關閉
    $('#message_windows').on('click', '.confirm', function(e) {
        $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        $this.closest('.reply_item').hide();
        $this.closest('.tool').find('.icon').removeClass('active');
        $this.closest('.tool').find('.tool_list').removeClass('show_tool_list');
    });

    //確認視窗-按下取消
    $('#message_windows').on('click', '.refuse', function(e) {
        $('#message_windows').removeAttr("style").removeClass('hint_style op_message_w');
        $(this).closest('.tool').find('.icon').removeClass('active');
        $(this).closest('.tool').find('.tool_list').removeClass('show_tool_list');
    });
    e.stopPropagation()
});

//更多訊息回覆
$('.reply_content').on('click', '.reply_data', function() {
    $(this).toggleClass('more_reply_data');
});

//標記用戶
$('.reply_area').on('input', function() {
    if ($(this).val() == '@') {
        $(this).closest('.reply').find('.mark_list').addClass('show_mark_list');
    } else {
        $(this).closest('.reply').find('.mark_list').removeClass('show_mark_list');
    }
});

$('.mark_list').on('click', '.mark_item', function() {
    $(this).closest('.reply').find('.mark_list').removeClass('show_mark_list');
    $(this).closest('.reply').find('.reply_area');
});