$(function(){
	
    /* Scroll Down to fix the header */
    var nav = $('.top-header');
	
    $(window).scroll(function () { 	  

        if( $(document).scrollTop() > 0 ){				
            nav.addClass("f-nav");				
        } 		
        else{	
            nav.removeClass("f-nav");
        }	

    });		
});