$(function() {     
    
 /* Without imgBtn */    
    
    /*
    $("#declaration-to").datepicker({ dateFormat: 'yy/mm/dd' });
    $("#declaration-from").datepicker({ dateFormat: 'yy/mm/dd' }).bind("change",function(){
        var minValue = $(this).val();
        minValue = $.datepicker.parseDate("yy/mm/dd", minValue);
        minValue.setDate(minValue.getDate()+1);
        $("#declaration-to").datepicker( "option", "minDate", minValue );
    })    

    $("#application-to").datepicker({ dateFormat: 'yy/mm/dd' });
    $("#application-from").datepicker({ dateFormat: 'yy/mm/dd' }).bind("change",function(){
        var minValue = $(this).val();
        minValue = $.datepicker.parseDate("yy/mm/dd", minValue);
        minValue.setDate(minValue.getDate()+1);
        $("#application-to").datepicker( "option", "minDate", minValue );
    })  

    */
    
 /* With imgBtn */   

    $("#declaration-to").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: "button",
        showAnim: "clip",
        buttonImage: "http://fallenleaf.hopto.org/webpat/image/calendar.png",
        buttonImageOnly: true,            
    });
    $("#declaration-from").datepicker({ 
        dateFormat: 'yy/mm/dd',
        showOn: "button",
        showAnim: "clip",
        buttonImage: "http://fallenleaf.hopto.org/webpat/image/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"      
    
    }).bind("change",function(){
        var minValue = $(this).val();
        minValue = $.datepicker.parseDate("yy/mm/dd", minValue);
        minValue.setDate(minValue.getDate()+1);
        $("#declaration-to").datepicker( "option", "minDate", minValue );
    })     
    
    $("#application-to").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: "button",
        showAnim: "clip",
        buttonImage: "http://fallenleaf.hopto.org/webpat/image/calendar.png",
        buttonImageOnly: true,    
    });
    $("#application-from").datepicker({ 
        dateFormat: 'yy/mm/dd',
        showOn: "button",
        showAnim: "clip",
       buttonImage: "http://fallenleaf.hopto.org/webpat/image/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"      
    
    }).bind("change",function(){
        var minValue = $(this).val();
        minValue = $.datepicker.parseDate("yy/mm/dd", minValue);
        minValue.setDate(minValue.getDate()+1);
        $("#application-to").datepicker( "option", "minDate", minValue );
    })  
});