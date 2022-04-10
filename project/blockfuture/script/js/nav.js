$(function () {
    var mainMenu = $('#main-menu'),
        logo = $('#main-logo'),
        menuContainer = $('#menu-container'),
        menuBtn = $('#menu-btn'),
        dashboardMenu = $('#dashboard-menu'),
        dashboardMenuBtn = $('.dashboard-menu-btn'),
        dashboardLogo = $('#dashboard-logo');


    menuBtn.click(function () {
        if (mainMenu.hasClass('active')) {
            mainMenu.removeClass('active');
            logo.removeClass('active');
            menuContainer.removeClass('active');
            menuBtn.removeClass('active');
        } else {
            mainMenu.addClass('active');
            logo.addClass('active');
            menuContainer.addClass('active');
            menuBtn.addClass('active');
        }
    });

    dashboardMenuBtn.click(function () {
        if (dashboardMenu.hasClass('active')) {
            dashboardMenu.removeClass('active');
            menuBtn.removeClass('active');
            dashboardLogo.removeClass('active');
            menuContainer.removeClass('active');
        } else {
            dashboardMenu.addClass('active');
            menuBtn.addClass('active');
            dashboardLogo.addClass('active');
            menuContainer.addClass('active');
        }
    });

});

$(function () {
    var dashboard = $('#dashboard'),
        login = $('#login'),
        logout = $('#logout'),
        question = $('#question'),
        support = $('#support');


    dashboard.hover(function () {
        if ($('.dashboard').hasClass('active')) {
            $('.dashboard').removeClass('active');
        } else {
            $('.dashboard').addClass('active');
        }
    });

    login.hover(function () {
        if ($('.login').hasClass('active')) {
            $('.login').removeClass('active');
        } else {
            $('.login').addClass('active');
        }
    });

    logout.hover(function () {
        if ($('.logout').hasClass('active')) {
            $('.logout').removeClass('active');
        } else {
            $('.logout').addClass('active');
        }
    });

    question.hover(function () {
        if ($('.question').hasClass('active')) {
            $('.question').removeClass('active');
        } else {
            $('.question').addClass('active');
        }
    });

    support.hover(function () {
        if ($('.support').hasClass('active')) {
            $('.support').removeClass('active');
        } else {
            $('.support').addClass('active');
        }
    });

});
