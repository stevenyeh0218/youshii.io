$(document).ready(function() {
    var include = $('.consumer_notice').find('.include');
    var not_include = $('.consumer_notice').find('.not_include');

    if (include.closest('.consumer_notice').find('.include li').length == 0) {
        include.hide();
    } else {
        include.show();
    }

    if (not_include.closest('.consumer_notice').find('.not_include li').length == 0) {
        not_include.hide();
    } else {
        not_include.show();
    }
});