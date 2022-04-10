$(function(){

    var wrapper      = $(".patent-search-form"); 
    var formContent  = $(".form-content");     
    
    $(wrapper).on("click",".new", function(){  

        var NewContent   = $('<div class="form-content" style="display:none"><span class="new"></span>'
                            +'<span class="delete" style="display:inline-block;"></span>'
                            +'<select class="patent-search-sign" style="display:inline-block;"><option>AND</option><option>OR</option><option>AND NOT</option></select>'
                            +'<select class="patent-search-select"><option>專利名稱</option><option>申請人</option><option>發明人</option><option>公告號</option><option>證書號</option></select>'
                            +'<input autofocus="" class="patent-search-input" type="text" name="name"  autocomplete="on" required>'
                            +'<a href="#" class="hint">［ｉ］</a></div>');   
        
       
        $(wrapper).append(NewContent); 
        $(NewContent).insertBefore('.patent-search-btn'); 
        
        $(".form-content").fadeIn('slow');            
        $(".patent-search-form").css("text-align" , "right");
        $(".form-content").css("width" , "85%");
        $(".patent-search-btn").css("left" , "59.5em");     
        $(".patent-tipo-btn").css("left" , "55.3em");        
        $(".patent-search-input").first().css("margin-left" , "0");
        $(".hint").css("left" , "69em");

        getCount();

    });
    
    $(wrapper).on("click",".delete", function(){  
        $(this).parent('div').fadeOut('normal', function() { $(this).remove(); getCount();  });
    });
    
    function getCount(){
        
        var count = $('.form-content').length;
        
        $(".new").hide().last().show();    
        $(".delete").first().css("display","inline-block");
        $(".patent-search-sign").first().removeAttr("style");
        
        if(count == 1){            
            $(".patent-search-form , .form-content , .patent-search-btn , .patent-tipo-btn").removeAttr("style");    
            $(".delete").hide();   
            $(".patent-search-sign").first().removeAttr("style");
            $(".patent-search-input").first().removeAttr("style");
            $(".hint").first().removeAttr("style");
        }
          
    };   
    
});

