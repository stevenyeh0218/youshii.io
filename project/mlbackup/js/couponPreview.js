 $(document).ready(function() {

     $(".market_title_input").keyup(function() {
         $this = $(this);
         $(".market_title").text($this.val());
     });

     $(".area_input").keyup(function() {
         $this = $(this);
         $(".area_data").text($this.val());
     });

     $('.currency_select').on('change', function() {
         $(".canvas").find('.currency').text($(this).val());
     });

     $(".value_input").keyup(function() {
         $this = $(this);
         $(".canvas").find(".valu_num").text($this.val());
     });

     $(".u_start_date").change(function() {
         $this = $(this);
         $(".deadline_item").find('.start_date').text($this.val());
     });

     $(".u_end_date").change(function() {
         $this = $(this);
         $(".deadline_item").find('.end_date').text($this.val());
     });

     $(".p_start_date").change(function() {
         $this = $(this);
         $(".promote_item").find('.start_date').text($this.val());
     });

     $(".p_end_date").change(function() {
         $this = $(this);
         $(".promote_item").find('.end_date').text($this.val());
     });

     $('input[data-level="used_child"]').click(function() {
         var $this = $(this);
         var checked = $this.is(':checked');

         if (checked) {
             var html = "<div class='used_value'>" + $(this).val() + "</div>";
             $(".way_item").find('.way_data').prepend(html);
             $(".way_item").find('.used_default').hide();
         } else {
             $(".way_item").find('.used_value:contains(' + $(this).val() + ')').remove();
         }
         if ($(".way_item").find('.used_value').length == 0) {
             $(".way_item").find('.used_default').show();
         }

     });
 })