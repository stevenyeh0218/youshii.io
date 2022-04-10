$(document).ready(function() {
    document.querySelectorAll('.txtEditor').forEach(function(val) {
        ClassicEditor
            .create(val, {
                ckfinder: {
                    uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
                },
            })
            .catch(error => {
                console.error(error);
            });
    });
});