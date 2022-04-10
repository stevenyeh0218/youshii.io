$(document).ready(function () {

    $(function () {
        $(".album_item").slice(0, 8).show();
        $(".album_more").on('click', '.icon', function (e) {
            e.preventDefault();
            $(".album_item:hidden").slice(0, 8).slideDown();
            if ($(".album_item:hidden").length == 0) {
                $(".album_more").fadeOut('slow');
            }


            var $vWidth = $(window).width();
            if ($vWidth < 830) {
                $('html,body').animate({
                    scrollTop: $(this).offset().top - 400
                }, 1500);
            } else {
                $('html,body').animate({
                    scrollTop: $(this).offset().top - $("#colophon").outerHeight()
                }, 1500);
            }
        });
    });

    $(function () {

        $(".data_hidden").slice(0, 0).show();

        $(".data_more").on('click', '.icon', function () {
            $(this).closest('.terms_item').find(".data_hidden:hidden").slice(0, 4).slideDown();
            if ($(this).closest('.terms_item').find(".data_hidden:hidden").length == 0) {
                $(this).closest('.terms_item').find(".data_more").fadeOut('slow');
            }
        });
    });
});
