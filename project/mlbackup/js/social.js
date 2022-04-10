//社群分享
$('.social_btn').on('click', function () {
    if ($('.sharing_social_list').hasClass('active')) {
        $('.sharing_social_list').removeClass('active');
        $(this).find('svg').removeClass('fa-times').addClass('fa-share-alt');
    } else {
        $('.sharing_social_list').addClass('active');
        $(this).find('svg').addClass('fa-times').removeClass('fa-share-alt');
    }
});
