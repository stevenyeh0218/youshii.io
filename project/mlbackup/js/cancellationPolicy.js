$('input[data-level="cancellation_child[0]"]').click(function() {
    var $this = $(this);
    var checked = $this.is(':checked');
    if (checked) {
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[0]"]:not(:checked)').each(function() {
            $(this).prop('checked', true);           
        });
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[1]"]:not(:checked)').each(function() {
            $(this).prop('disabled', true);       
            $(this).closest('.label--checkbox').addClass('disabled');   
        });
    } else {
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[0]"]:checked').each(function() {
            $(this).prop('checked', false);
        });
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[1]"]:not(:checked)').each(function() {
            $(this).prop('disabled', false);  
            $(this).closest('.label--checkbox').removeClass('disabled');     
        });
    }   
});

$('input[data-level="cancellation_child[1]"]').click(function() {
    var $this = $(this);
    var checked = $this.is(':checked');
    if (checked) {
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[1]"]:not(:checked)').each(function() {
            $(this).prop('checked', true);           
        });
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[0]"]:not(:checked)').each(function() {
            $(this).prop('disabled', true);      
            $(this).closest('.label--checkbox').addClass('disabled');       
        });
    } else {
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[1]"]:checked').each(function() {
            $(this).prop('checked', false);
        });
        $this.closest(".cancellation_policy").find('input[data-level="cancellation_child[0]"]:not(:checked)').each(function() {
            $(this).prop('disabled', false);  
            $(this).closest('.label--checkbox').removeClass('disabled');     
        });
    }   
});