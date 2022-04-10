$(function(){
    
    $(".top-header").addClass('animate'); 
    $(".global-patent header h1").addClass('animate'); 
    $(".resource").addClass('animate'); 
    
    setTimeout(function(){
        $(".resource.animate").css({
            "-webkit-transition-delay" : "0ms",
            "transition-delay" : "0ms"   
        });   
    },5000)
    
	$(window).scroll(function(){      
        
        if ($(this).scrollTop() > $('.global-patent').height()-100){
            $(".apps").addClass('animate');
            $(".pic").addClass('animate');
        }
        
        if ($(this).scrollTop() > $('.global-patent').height()+300){
            $(".apps2").addClass('animate');
            $(".pic2").addClass('animate');
        }  
        
        if ($(this).scrollTop() > $('.global-patent').height()+500){
            $(".item").addClass('animate');
        }  
        
        if ($(this).scrollTop() >= $(document).height()-$(window).height()){
            $(".footer-logo").addClass('animate');
            $("footer p").addClass('animate');
            $(".footer-bottom ul li").addClass('animate');            
        }   
        
	});	

});