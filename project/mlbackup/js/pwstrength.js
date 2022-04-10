$(document).ready(function() {
    $('.changepswd_contain').find("input[name='newpswd']").pwstrength({ texts: ['非常弱', '弱', '中等', '強', '非常強'] });
});