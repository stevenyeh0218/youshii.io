$(function(){
    
    path();

    var $links = $('.f-menu li');
    
    $links.hover(
        function() {
            $links.removeAttr('id','display');
            $('.d-menu ul , .t-menu ul').css({
                'opacity' : '0',
                'visibility' : 'hidden'
            }); 
            
            $('.t-menu').css({
                "display" : "none",
                "top" : "-3em",
                "opacity" : "0",
                 "visibility" :  "hidden"
            });   
            
            $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500); 
        }, 
        function() {
            path();
        });
    
    
       
    /* 判斷 URL */
    function path(){

        var path = location.pathname.split('/');
        var country = path[3];
        var patent = path[4];
        var search = path[5];

        
        $('.f-menu').find('li').each(function(){        

            var loc = $(this).data('location');
            var doubleMenu = "." + loc + "-d-menu";  
            var approvalMenu = "." + loc + "-approval";
            var globalMenu = "." + loc + "-global";
            var pajMenu = "." + loc + "-paj";          
            var tripleApprovalMenu = "." + loc + "-t-approval-menu";
            var tripleGlobalMenu = "." + loc + "-t-global-menu";
            var triplePajMenu = "." + loc + "-t-paj-menu";    


            /* 核准專利 */
            if( loc == country && patent == 'approval'){
                $(this).attr('id','display');  
                $(approvalMenu).attr('id','svg-display');
                $('.t-menu li:first-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);               
                $(tripleApprovalMenu).css('visibility', 'visible').animate({opacity: 1}, 500);   
                $(tripleGlobalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
            }    

            else if( loc == country && patent == 'approval' && search == 'advance'){
                $(this).attr('id','display');  
                $(approvalMenu).attr('id','svg-display');  
                $('.t-menu li:last-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);               
                $(tripleApprovalMenu).css('visibility', 'visible').animate({opacity: 1}, 500);   
                $(tripleGlobalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
            }

            /* 公開\專利 */
            else if( loc == country && patent == 'global'){
                $(this).attr('id','display');  
                $(globalMenu).attr('id','svg-display'); 
                $('.t-menu li:first-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);                
                $(tripleGlobalMenu).css('visibility', 'visible').animate({opacity: 1}, 500); 
                $(tripleApprovalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
            }  

            else if( loc == country && patent == 'global' && search == 'advance'){
                $(this).attr('id','display');  
                $(globalMenu).attr('id','svg-display'); 
                 $('.t-menu li:last-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);               
                $(tripleGlobalMenu).css('visibility', 'visible').animate({opacity: 1}, 500);  
                $(tripleApprovalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });   
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
            }  

            /* 日本PAJ專利 */
            else if( loc == country && patent == 'paj'){
                $(this).attr('id','display');  
                $(pajMenu).attr('id','svg-display');
                $('.t-menu li:first-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);               
                $(triplePajMenu).css('visibility', 'visible').animate({opacity: 1}, 500);  
                $(tripleApprovalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });   
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });             
            }  

            else if( loc == country && patent == 'paj' && search == 'advance'){
                $(this).attr('id','display');  
                $(pajMenu).attr('id','svg-display'); 
                $('.t-menu li:last-child()').attr('id','svg-display'); 
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);               
                $(triplePajMenu).css('visibility', 'visible').animate({opacity: 1}, 500);  
                $(tripleApprovalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });   
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });              
            }  

            /* 一般、進階檢索 */
            else if( loc == country){
                $(this).attr('id','display');  
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);     
                $('.d-menu li:first-child()').attr('id','svg-display'); 
                $('.t-menu').css({
                    "display" : "none",
                    "top" : "-3em",
                    "opacity" : "0",
                    "visibility" :  "hidden"
                });               
            }   

            else if( loc == country　&& patent == 'advance' ){
                $(this).attr('id','display');  
                $(doubleMenu).css('visibility', 'visible').animate({opacity: 1}, 500);     
                $('.d-menu li:last-child()').attr('id','svg-display'); 
                $('.t-menu').css({
                    "display" : "none",
                    "top" : "-3em",
                    "opacity" : "0",
                    "visibility" :  "hidden"
                });             
            }        

            else{
                $(doubleMenu).css({ "opacity" : "0" , "visibility" : "hidden" });         
                $(tripleApprovalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
                $(tripleGlobalMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
                $(triplePajMenu).css({ "opacity" : "0" , "visibility" : "hidden" });  
            }        
        });
    };    
});   