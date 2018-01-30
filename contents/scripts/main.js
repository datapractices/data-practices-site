$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('.js-header-translucent').addClass('translucent')
        } else {
            $('.js-header-translucent').removeClass('translucent')
        }
    });
});
