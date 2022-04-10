$(document).ready(function () {

    /* lang onclick */
    $('.lang').on('mouseover mouseout ontouchstart', function () {
        if ($(this).hasClass('openList')) {
            $(this).removeClass('openList');
        } else {
            $(this).addClass('openList');
        }

    });
    /* lang onclick end*/


    /* signIn onclick */
    $('.signIn').on('mouseover mouseout ontouchstart', function () {
        if ($(this).hasClass('openList')) {
            $(this).removeClass('openList');
        } else {
            $(this).addClass('openList');
        }
    });
    /* lang onclick end*/

    /* mobile menu onclick */
    $('.menuBtn').on('click', function () {
        if ($(this).hasClass('openMenu')) {
            $(this).removeClass('openMenu');
            $('.funcToolList').removeClass('active');
        } else {
            $(this).addClass('openMenu');
            $('.funcToolList').addClass('active');
        }
    });
    /* lang onclick end*/

    /* login onclick */
    $('.login').on('click', function () {
        if ($('#loginWindow').hasClass('popupLoginWindow')) {
            $('#loginWindow').removeClass('popupLoginWindow');
        } else {
            $('#loginWindow').addClass('popupLoginWindow');
        }
    });
    $('.closeLoginWindowBtn').on('click', function () {
        $('#loginWindow').removeClass('popupLoginWindow');
    });
    $('.regBtn').on('click', function () {
        $('#loginWindow').removeClass('popupLoginWindow');
        $('#registerWindow').addClass('popupRegisterWindow');
    });
    /* login onclick end*/

    /* register onclick */
    $('.register').on('click', function () {
        if ($('#registerWindow').hasClass('popupRegisterWindow')) {
            $('#registerWindow').removeClass('popupRegisterWindow');
        } else {
            $('#registerWindow').addClass('popupRegisterWindow');
        }
    });
    $('.closeRegisterWindowWBtn').on('click', function () {
        $('#registerWindow').removeClass('popupRegisterWindow');
    });
    $('.loginBtn').on('click', function () {
        $('#registerWindow').removeClass('popupRegisterWindow');
        $('#loginWindow').addClass('popupLoginWindow');
    });
    /* register onclick end*/


    /* normalLogin onclick */
    $('.normalLogin').on('click', function () {
        $('#formWrapper').css('height', "338px");
        $(this).addClass('active');
        $('#normalForm').removeClass('normalFormActive');
        $('.appScanLogin').removeClass('active');
        $('#appScanForm').removeClass('appScanFormActive');
    })
    /* normalLogin onclick end*/


    /* appScanLogin onclick */
    $('.appScanLogin').on('click', function () {
        $('#formWrapper').css('height', "318px");
        $(this).addClass('active');
        $('#appScanForm').addClass('appScanFormActive');
        $('#normalForm').addClass('normalFormActive');
        $('.normalLogin').removeClass('active');
    })
    /* appScanLogin onclick end*/

    /* pswd onclick */
    $('.openPswd').on('click', function () {
        let pass_type = $('input.password').attr('type');
        if (pass_type === 'password') {
            $('input.password').attr('type', 'text');
        } else {
            $('input.password').attr('type', 'password');
        }
    })
    /* pswd onclick end*/
});
