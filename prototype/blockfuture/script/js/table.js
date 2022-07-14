$(function () {
    var amountBtn = $('.amount-btn');

    amountBtn.click(function () {
        if (amountBtn.hasClass('fa-sort-amount-down')) {
            amountBtn.removeClass('fa-sort-amount-down').addClass('fa-sort-amount-up');
        } else {
            amountBtn.addClass('fa-sort-amount-down').removeClass('fa-sort-amount-up');
        }
    });

});

$(function () {
    var ios = $('.ios');
    var android = $('.android');

    ios.find('.header').click(function () {
        if (ios.find('.list-table').hasClass('active')) {
            ios.find('.list-table').removeClass('active');
        } else {
            ios.find('.list-table').addClass('active');
        }
    });

    android.find('.header').click(function () {
        if (android.find('.list-table').hasClass('active')) {
            android.find('.list-table').removeClass('active');
        } else {
            android.find('.list-table').addClass('active');
        }
    });
});
