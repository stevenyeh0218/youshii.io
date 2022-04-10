$(document).ready(function () {
    $('.local_search_member').niceNumber({
        onDecrement: function ($currentInput, amount, settings) {
            if (amount <= 0) {
                $currentInput.val('');
            }
        },
    });

});
