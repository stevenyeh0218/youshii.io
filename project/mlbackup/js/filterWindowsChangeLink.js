$('.func_list ').on('click', '.travel_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_hotActiveTravel_db");
});
$('.func_list ').on('click', '.food_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_hotActiveFood_db");
});
$('.func_list ').on('click', '.hotel_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_hotActiveHotel_db");
});
$('.func_list ').on('click', '.leisure_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_hotActiveLeisure_db");
});

$('.func_list ').on('click', '.ml_travel_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_mlRecommandTravel_db");
});
$('.func_list ').on('click', '.ml_food_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_mlRecommandFood_db");
});
$('.func_list ').on('click', '.ml_hotel_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_mlRecommandHotel_db");
});
$('.func_list ').on('click', '.ml_leisure_import_btn', function() {
    $('#filter_windows').find('.save_btn').prop("href", "admin_mlRecommandLeisure_db");
});