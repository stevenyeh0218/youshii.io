/* app click function */
$('.appProjectBtn').on('click', '.arrowNext', function() {
    var $this = $(this);
    $this.removeClass("active");
    $('.appProjectList').find(".appProjectItem:first-child").addClass('preAppProject');
    $('.appProjectList').find(".appProjectItem:last-child").removeClass('nextAppProject');
    $(".arrowPre").addClass("active");
});

$('.appProjectBtn').on('click', '.arrowPre', function() {
    var $this = $(this);
    $this.removeClass("active");
    $('.appProjectList').find(".appProjectItem:first-child").removeClass('preAppProject');
    $('.appProjectList').find(".appProjectItem:last-child").addClass('nextAppProject');
    $(".arrowNext").addClass("active");
});