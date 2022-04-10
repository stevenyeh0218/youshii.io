<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> 匠士工程有限公司 </title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet/less" type="text/css" href="./css/layout.less" />
    <link rel="stylesheet/less" type="text/css" href="./css/inside.less" />
    <link rel="stylesheet/less" type="text/css" href="./css/mediaQuery.less" />
    <link rel="stylesheet/less" type="text/css" href="./css/reset.less" />

</head>

<body>
    <header id="header" class="changeHeaderStyle d-flex align-items-center justify-content-center">
        <div class="header-container d-flex align-items-center justify-content-between">
            <!--            <a href="./index.php" class="logo-fixed"><img src="images/logo_big.png"></a>-->
            <div class="home">
                <a href="./index.php" class="logo d-flex align-items-center justify-content-center">
                    <img src="./images/logo.svg" class="logo-svg">
                    <div class="sub">匠士工程有限公司</div>               
                </a>
            </div>
            <nav class="menu ">
                <ul class="menu-list d-flex align-items-center justify-content-between">
                    <li class="menu-item"><a href="./about-us.php">關於我們</a></li>
                    <li class="menu-item"><a href="./quartz-brick.php">新做拋光石英磚爆裂</a></li>
                    <li class="menu-item"><a href="./white-brick.php">白磚隔間</a></li>
                    <li class="menu-item"><a href="./roof.php">屋頂防水膜</a></li>
                    <li class="menu-item"><a href="./other.php">其他服務</a></li>
                    <li class="menu-item"><a href="#">聯絡我們</a></li>
                </ul>
            </nav>
            <nav class="phone-menu">
                <i class="fa fa-bars switch"></i>
                <ul class="menu-list menu-list-close">
                    <li class="menu-item"><a href="./about-us.php">關於我們</a></li>
                    <li class="menu-item"><a href="./quartz-brick.php">新做拋光石英磚爆裂</a></li>
                    <li class="menu-item"><a href="./white-brick.php">白磚隔間</a></li>
                    <li class="menu-item"><a href="./roof.php">屋頂防水膜</a></li>
                    <li class="menu-item"><a href="./other.php">其他服務</a></li>
                    <li class="menu-item"><a href="./contact.php">聯絡我們</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="slideshow" class="banner-inside contact-us"></section>
    <section id="map" class="d-flex align-items-center justify-content-between">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14454.019950349606!2d121.5981152448312!3d25.08476164377548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acec5e8bbbb3%3A0xcb501977ef720476!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A5oiQ5Yqf6Lev5Zub5q61MzA46Jmf!5e0!3m2!1szh-TW!2stw!4v1534829534753" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>
    <section id="contact">
        <h2>匠士工程有限公司</h2>
        <div class="place">
            <div class="des">
                <i class="fa fa-phone"></i>
                <a href="tel:0287918080">02-8791-8080</a>
            </div>
            <div class="des">
                <i class="fa fa-phone"></i>
                <a href="tel:0932204993">0932-204-993</a>
                <span>徐先生</span>
            </div>
            <div class="des">
                <i class="fa fa-map-marker"></i>
                <span>台北市內湖區成功路四段308號</span>
            </div>
        </div>
    </section>
    <section id="contact-table">
        <h2>線上諮詢</h2>
        <div class="table">
            <div class="cell d-flex align-items-center">
                <div class="left">公司名稱</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="55">
                    <input type="text" name="content[]">
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*聯絡姓名</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="55">
                    <input type="text" name="content[]">
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*性別</div>
                <div class="right d-flex">
                    <div><input name="radio_1_1806011224596557" type="radio" value="男">男</div>
                    <div><input name="radio_1_1806011224596557" type="radio" value="女">女</div>
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*聯絡電話</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="55">
                    <input type="text" name="content[]">
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*電子信箱</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="55">
                    <input type="text" name="content[]">
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*聯絡地址</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="28">
                    <div id="twzipcode_1_1806011225327064"><select name="addr_county" class="validate[required]"><option value="">縣市</option><option value="基隆市">基隆市</option><option value="台北市">台北市</option><option value="新北市">新北市</option><option value="宜蘭縣">宜蘭縣</option><option value="新竹市">新竹市</option><option value="新竹縣">新竹縣</option><option value="桃園市">桃園市</option><option value="苗栗縣">苗栗縣</option><option value="台中市">台中市</option><option value="彰化縣">彰化縣</option><option value="南投縣">南投縣</option><option value="嘉義市">嘉義市</option><option value="嘉義縣">嘉義縣</option><option value="雲林縣">雲林縣</option><option value="台南市">台南市</option><option value="高雄市">高雄市</option><option value="屏東縣">屏東縣</option><option value="台東縣">台東縣</option><option value="花蓮縣">花蓮縣</option><option value="金門縣">金門縣</option><option value="連江縣">連江縣</option><option value="澎湖縣">澎湖縣</option><option value="南海諸島">南海諸島</option></select><select name="addr_area"><option value="">鄉鎮市區</option></select><input type="text" name="addr_zip" readonly="readonly"></div><input name="address_1_1806011225327064" type="text" class="validate[required]"><input type="hidden" name="content[]" id="m_address_1_1806011225327064" class="validate[required]">
                </div>
            </div>
            <div class="cell d-flex align-items-center">
                <div class="left">*諮詢內容</div>
                <div class="right">
                    <input type="hidden" name="form_list_id[]" id="form_list_id[]" value="3">
                    <textarea name="content[]" class="validate[required]"></textarea> </div>
            </div>
            <div class="down">
                <input type="submit" name="submit" id="submit" value="送出" class="but6">
            </div>
        </div>
    </section>
    <section id="intro" class="d-flex align-items-center justify-content-around">
        <div class="company-info">
            <div class="des">
                <i class="fa fa-phone"></i>
                <a href="tel:0287918080">02-8791-8080</a>
            </div>
            <div class="des">
                <i class="fa fa-phone"></i>
                <a href="tel:0932204993">0932-204-993</a>
                <span>徐先生</span>
            </div>
            <div class="des">
                <i class="fa fa-map-marker"></i>
                <span>台北市內湖區成功路四段308號</span>
            </div>
        </div>
    </section>
    <footer id="colophon" class="d-flex align-items-center justify-content-center">
        <div class="copyright">Copyright 2018 © 匠士工程有限公司</div>
    </footer>
    <div id="topBtn" class="fa fa-arrow-up"></div>
</body>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.5.3/less.js" crossorigin="anonymous"></script>
<script src="js/other.js"></script>


</html>
