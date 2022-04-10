$(document).ready(function() {
    var cuploadBanner = new Cupload({
        ele: '.banner_upload_canvas',
        num: 3,
        maxWidth: 1920,
        maxHeight: 430,
        maxSize: 1024,
    });

    var cuploadMerchantImg = new Cupload({
        ele: '.merchant_img_upload_canvas',
        num: 5,
        maxWidth: 1920,
        maxHeight: 1280,
        maxSize: 1024,
    });
});