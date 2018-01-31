$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('.js-header-translucent').addClass('translucent')
        } else {
            $('.js-header-translucent').removeClass('translucent')
        }
    });
    $('.js-modal-submit').on('click', function(){
        $this = $(this);
        $this.closest('.js-modal-wrapper').find('.js-modal-success').show();
        $this.closest('.js-modal-form').hide();
    });

    var clipboard = new Clipboard('.js-copy');
    clipboard.on('success', function(e) {
        e.clearSelection();
        $(e.trigger).tooltip({
            title: 'Link Copied'
        }).tooltip('show').on('hidden.bs.tooltip', function() {
            $(this).tooltip('dispose');
        });
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
