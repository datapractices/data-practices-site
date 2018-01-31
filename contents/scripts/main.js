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
        elements.split(',').forEach(function(element) {
            var maxHeight = 0;
            element = $(element);
            element.each(function() {
                var elemHeight = $(this).height();
                if(elemHeight > maxHeight) {
                    maxHeight = elemHeight;
                }
            });

            element.height(maxHeight);
        });
    }
}
