$(document).ready(function () {
    $('.travel_member').niceNumber({
        onDecrement: function ($currentInput, amount, settings) {
            if (amount <= 0) {
                $currentInput.val('1');
            }
        },
        autoSize: true
    });

    $('.travel_day').niceNumber({
        onDecrement: function ($currentInput, amount, settings) {
            if (amount <= 0) {
                $currentInput.val('1');
            }
        },
        autoSize: true
    });
});
