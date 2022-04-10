$(function(){	
    
    $(window).scroll(function () { 	 
        
        if( $(this).scrollTop() > 0 ){
            $('.login-form').css({opacity: 0, visibility: "hidden"}).animate({opacity: 0}, 200);	
            $('.login-form').addClass("in");
            $('#login span').css({opacity: 1, visibility: "visible"}).animate({opacity: 1}, 100);
            return false;	
        }	

    });	 
    
	$('#login span').click(function(){			
		$('#login span').css({opacity: 0, visibility: "hidden"}).animate({opacity: 0}, 100);		
		$('.login-form').css({opacity: 1, visibility: "visible"}).animate({opacity: 1}, 200);	
		$('.login-form').removeClass("in");
		return false;		
	});	
		
	$('.close').click(function(){		
        $('.login-form').css({opacity: 0, visibility: "hidden"}).animate({opacity: 0}, 200);	
        $('.login-form').addClass("in");
        $('#login span').css({opacity: 1, visibility: "visible"}).animate({opacity: 1}, 100);		
        return false;		
	});		

    
});