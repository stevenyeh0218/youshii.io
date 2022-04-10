$(document).ready(function() {
    $('#area_select').on('change', function() {
        if($(this).val() == "西區(市中心)"){
           $('#west_area').removeClass('hide_select');
           $('#east_area').addClass('hide_select');
           $('#north_area').addClass('hide_select');
           $('#south_area').addClass('hide_select');
        }
        else if($(this).val() == "東區"){
           $('#east_area').removeClass('hide_select');
           $('#west_area').addClass('hide_select');
           $('#north_area').addClass('hide_select');
           $('#south_area').addClass('hide_select');
        }
        else if($(this).val() == "北區"){
           $('#north_area').removeClass('hide_select');
           $('#west_area').addClass('hide_select');
           $('#east_area').addClass('hide_select');
           $('#south_area').addClass('hide_select');
        }else{
           $('#south_area').removeClass('hide_select');       
           $('#west_area').addClass('hide_select');
           $('#east_area').addClass('hide_select');
           $('#north_area').addClass('hide_select');   
        }
    });
});