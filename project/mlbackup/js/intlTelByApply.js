var input = document.querySelector(".phone_input");
window.intlTelInput(input, {
    initialCountry: "mm",
    // geoIpLookup: function(callback) {
    //     $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
    //         var countryCode = (resp && resp.country) ? resp.country : "us";
    //         callback(countryCode);
    //     });
    // },
});