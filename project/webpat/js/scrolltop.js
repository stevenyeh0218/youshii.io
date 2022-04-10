$(function(){

  
  /* Scroll to Top Event */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600){
			$('.scrolltop').fadeIn();
		} else {
			$('.scrolltop').fadeOut();
		}        
	});	

	$('.scrolltop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	}); 
    
 

});