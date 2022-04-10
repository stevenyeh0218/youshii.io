//酷碰卷管理新增文章-anchor
var fixMeTop = $('.form_anchor').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixMeTop) {
        $('.form_anchor').addClass("fixed_form_anchor");
    } else {
        $('.form_anchor').removeClass("fixed_form_anchor");
    }

});

$(".form_anchor").find('.anchor_item').each(function(index) {

    $(this).click(function(e) {
        triggletab_anchor();
        triigletabcontent_anchor();
        $(this).toggleClass("active");
        $(".edit_content").find('.input_list').eq(index).toggleClass("active");

        $('html, body').animate({
            scrollTop: $(".edit_content").find('.active').offset().top - 50
        }, 1000);
    });
});


    
    //to remove all tab headers
    function triggletab_anchor() {
        $(".form_anchor").find('.anchor_item').each(function() {
            $(this).removeClass("active");
        });
    }//triggle the tab content
function triigletabcontent_anchor() {
    $(".edit_content").find('.input_list').each(function() {
        $(this).removeClass("active");
    });
}