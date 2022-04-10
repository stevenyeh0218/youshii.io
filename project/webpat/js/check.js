$(function() {     
    $("#checkAll").click(function() {

       if($("#checkAll").prop("checked"))
       {
         $("input[name='type']").each(function() {
             $(this).prop("checked", true);
         });
       }
       else
       {
         $("input[name='type']").each(function() {
             $(this).prop("checked", false);
         });           
       }
    });       

});