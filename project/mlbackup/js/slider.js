$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        min: 300,
        max: 50000,
        values: [300, 50000],
        slide: function (event, ui) {
            $(".amount_start").val("$" + ui.values[0]);
            $(".amount_end").val(" $" + ui.values[1]);
        }
    });
});
