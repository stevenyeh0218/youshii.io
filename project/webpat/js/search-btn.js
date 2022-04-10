$(function(){

	$('.search-input').click(function(){
		$('.search-btn').css({
            'right' : '1.5em',    
            'opacity' : '1',
            'visibility' : 'visible',   
            '-webkit-transition' : 'all .3s',
            'transition' : 'all .3s'	  
        })
        
 		$('.more').css({            
            'right' : '-3.5em',    
            'opacity' : '1',
            'visibility' : 'visible',   
            '-webkit-transition' : 'all .3s',
            'transition' : 'all .3s'	  
        })       
	});      
    
});