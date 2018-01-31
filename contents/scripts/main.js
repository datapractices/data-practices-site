$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('.js-header-translucent').addClass('translucent')
        } else {
            $('.js-header-translucent').removeClass('translucent')
        }
    });
});

function alignItems(elements) {
    if(window.innerWidth > 768 ) {
        setTimeout(function() {
            elements.split(',').forEach(function(element) {
                var maxHeight = 0;
                element = $(element);
                element.height('');
                element.each(function() {
                    var elemHeight = $(this).height();
                    if(elemHeight > maxHeight) {
                        maxHeight = elemHeight;
                    }
                });

                element.height(maxHeight);
            });
        }, 100);
    }
}

function getQueryParameter(parameter) {
    var half = location.search.split(parameter + '=')[1];
    return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
}
