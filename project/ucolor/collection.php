<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> 優仕彩廣告設計有限公司 </title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet/less" type="text/css" href="./css/layout.less" />
    <link rel="stylesheet/less" type="text/css" href="./css/inside.less" />
    <link rel="stylesheet/less" type="text/css" href="./css/mediaQuery.less" />
    <link rel="stylesheet/less" type="text/css" href="vendor/swipebox-master/src/css/swipebox.css" />
    <link rel="stylesheet/less" type="text/css" href="./css/reset.less" />

</head>

<body>
    <header id="header" class="d-flex align-items-center justify-content-center">
        <div class="header-content d-flex align-items-center justify-content-between">
            <div class="home">
                <a href="./index.php" class="logo d-flex align-items-center justify-content-center">
                    <img src="./images/homelogo.png" class="logo-svg">
                </a>
            </div>
            <nav class="menu ">
                <ul class="menu-list d-flex align-items-center justify-content-between">
                    <li class="menu-item"><a href="./about.php">關於我們</a></li>
                    <li class="menu-item"><a href="./news.php">最新消息</a></li>
                    <li class="menu-item"><a href="./collection.php">作品集</a></li>
                    <li class="menu-item"><a href="./update.php">檔案上傳</a></li>
                    <li class="menu-item"><a href="./contact.php">聯絡我們</a></li>
                </ul>
            </nav>
            <nav class="phone-menu">
                <i class="fa fa-bars switch"></i>
                <ul class="menu-list menu-list-close d-flex flex-column justify-content-center">
                    <li class="menu-item"><a href="./about.php">關於我們<sub>About us</sub></a></li>
                    <li class="menu-item"><a href="./news.php">最新消息<sub>News</sub></a></li>
                    <li class="menu-item"><a href="./collection.php">作品集<sub>Collection</sub></a></li>
                    <li class="menu-item"><a href="./update.php">檔案上傳<sub>Update</sub></a></li>
                    <li class="menu-item"><a href="./contact.php">聯絡我們<sub>Contact us</sub></a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div id="wrapper">
        <section id="slideshow">
            <img src="images/banner.png">
        </section>
        <section id="collection-content" class="filters">
            <div class="intro">
                <h3>作品集</h3>
            </div>
            <div class="button-group d-flex justify-content-center flex-wrap">
                <button class="cell button is-checked" data-filter="">全部</button>
                <button class="cell button" data-filter=".layout">大圖輸出-展場佈置</button>
                <button class="cell button" data-filter=".wedding">大圖輸出-婚禮佈置</button>
                <button class="cell button" data-filter=".activity">大圖輸出-活動佈置</button>
                <button class="cell button" data-filter=".words">立體字/壓克力字/保麗龍割字</button>
            </div>
            <ul id="product" class="product-group d-flex justify-content-between flex-wrap">
                <li class="cell wedding">
                    <a rel="gallery-1" href="./images/wedding/1.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-婚禮佈置">
                        <img src="./images/wedding/1.jpg" />
                        <div class="des">大圖輸出-婚禮佈置</div>
                    </a>
                </li>
                <li class="cell layout">
                    <a rel="gallery-1" href="./images/layout/1.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-展場佈置">
                        <img src="./images/layout/1.jpg" />
                        <div class="des">大圖輸出-展場佈置</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/1.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/1.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
                <li class="cell activity">
                    <a rel="gallery-1" href="./images/activity/1.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-活動佈置">
                        <img src="./images/activity/1.jpg" />
                        <div class="des">大圖輸出-活動佈置</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/2.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/2.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
                <li class="cell wedding">
                    <a rel="gallery-1" href="./images/wedding/2.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-婚禮佈置">
                        <img src="./images/wedding/2.jpg" />
                        <div class="des">大圖輸出-婚禮佈置</div>
                    </a>
                </li>
                <li class="cell layout">
                    <a rel="gallery-1" href="./images/layout/2.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-展場佈置">
                        <img src="./images/layout/2.jpg" />
                        <div class="des">大圖輸出-展場佈置</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/3.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/3.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
                <li class="cell activity">
                    <a rel="gallery-1" href="./images/activity/2.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-活動佈置">
                        <img src="./images/activity/2.jpg" />
                        <div class="des">大圖輸出-活動佈置</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/4.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/4.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
                <li class="cell wedding">
                    <a rel="gallery-1" href="./images/wedding/3.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-婚禮佈置">
                        <img src="./images/wedding/3.jpg" />
                        <div class="des">大圖輸出-婚禮佈置</div>
                    </a>
                </li>
                <li class="cell layout">
                    <a rel="gallery-1" href="./images/layout/3.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-展場佈置">
                        <img src="./images/layout/3.jpg" />
                        <div class="des">大圖輸出-展場佈置</div>
                    </a>
                </li>
                <li class="cell activity">
                    <a rel="gallery-1" href="./images/activity/3.jpg" class="swipebox d-flex align-items-center justify-content-center" title="大圖輸出-活動佈置">
                        <img src="./images/activity/3.jpg" />
                        <div class="des">大圖輸出-活動佈置</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/5.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/5.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
                <li class="cell words">
                    <a rel="gallery-1" href="./images/words/6.jpg" class="swipebox d-flex align-items-center justify-content-center" title="立體字/壓克力字/保麗龍割字">
                        <img src="./images/words/6.jpg" />
                        <div class="des">立體字/壓克力字/保麗龍割字</div>
                    </a>
                </li>
            </ul>
            <div class="page d-flex align-items-center justify-content-center">
                <div><i class="fa fa-angle-left icon"></i></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div><i class="fa fa-angle-right icon"></i></div>
            </div>
        </section>
        <footer id="colophon" class="">
            <div class="colophon-top d-flex align-items-center flex-wrap">
                <div class="contact">
                    <div class="cell">
                        <i class="fa fa-map-marker icon"></i> 新北市新莊區新北大道四段506號（紐約傢具設計中心第二停車場)
                    </div>
                    <div class="cell">
                        <i class="fa fa-phone icon"></i> 02-2297-3727
                    </div>
                    <div class="cell">
                        <i class="fa fa-phone icon"></i> 0955-912-342 廖先生
                    </div>
                    <div class="cell">
                        <i class="fa fa-envelope icon"></i> u.color25@gmail.com
                    </div>
                </div>
                <div class="social d-flex align-items-center justify-content-center flex-wrap">
                    <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/u.color25" data-width="500" data-hide-cover="false" data-show-facepile="true" data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=510&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fu.color25&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;width=500"><span style="vertical-align: bottom; width: 500px; height: 181px;"><iframe name="f3dc396bcd435c" width="500px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v2.3/plugins/page.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fmp2v3DK3INU.js%3Fversion%3D42%23cb%3Df37129ac24fa09%26domain%3Ducolor.com.tw%26origin%3Dhttps%253A%252F%252Fucolor.com.tw%252Ffb9760439043e%26relation%3Dparent.parent&amp;container_width=510&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fu.color25&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;width=500" style="border: none; visibility: visible; width: 500px; height: 181px;" class=""></iframe></span></div>
                    <img src="images/QR.png" class="line">
                </div>
            </div>
            <div class="copyright">Copyright 2018 © 優仕彩廣告設計有限公司</div>
        </footer>
    </div>
</body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<script src="vendor/mwt-qstand-example/jquery.quicksand.js"></script>
<script src="vendor/mwt-qstand-example/jquery.easing.1.3.js"></script>
<script src="vendor/mwt-qstand-example/jquery-animate-css-rotate-scale.js"></script>
<script src="vendor/mwt-qstand-example/qstand.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.5.3/less.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
<script src="vendor/swipebox-master/src/js/jquery.swipebox.js"></script>
<script src="js/other.js"></script>
<script src="js/main.js"></script>
<script src="js/swipebox.js"></script>

</html>
