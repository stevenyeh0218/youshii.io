$(document).ready(function() {

    //banner
    $(".myanLife_banner").owlCarousel({
        loop: false,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 1,
        smartSpeed: 450,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoWidth: true,
        autoHeight: true,
        autoplayHoverPause: true
    });

    //最新優惠
    $(".discount_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 4
            },
            1367: {
                items: 4
            }
        }
    });

    //TOP TEN
    $(".hot_ten_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //達人分享
    $(".blog_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //其他
    $(".other_item_content").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

    //網友都在看
    $(".recently_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //熱門活動
    $(".hot_active_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //MyanLife 推薦
    $(".recommend_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //新進達人推薦 
    $(".blog_recommend_content").owlCarousel({
        loop: false,
        autoWidth: true,
        autoHeight: true,
        margin: 24,
        stagePadding: 24,
        lazyLoad: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                center: true,
                nav: false,
                items: 1
            },
            480: {
                center: true,
                nav: false,
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            },
            1367: {
                items: 4
            }
        }
    });

    //近期活動
    $(".recent_activities_list").owlCarousel({
        margin: 24,
        items: 2,
        loop: false,
        lazyLoad: true,
        dots: true,
        responsive: {
            0: {
                margin: 12
            },
            480: {
                margin: 12
            }
        }
    });

    //過去參與
    $(".past_participation_list").owlCarousel({
        margin: 24,
        items: 2,
        loop: false,
        lazyLoad: true,
        dots: true,
        responsive: {
            0: {
                margin: 12
            },
            480: {
                margin: 12
            }
        }
    });
});