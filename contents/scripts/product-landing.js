$(document).ready(function() {
    // $('body').scrollspy({ target: '#navigation' });

    $(window).on('resize', function () {
        console.log('resize called');
        var win = $(this);
        var offsetHeight = $('.navigation').height();
        console.log('resize called', offsetHeight);
        if (win.width() < 768) {
            $('body').scrollspy({
                target: '#navigation',
                offset: offsetHeight
            });
        }
    });
    var offsetHeight = $('.navigation').height();
    if($(window).width() < 768) {
        $('body').scrollspy({
            target: '#navigation',
            offset: offsetHeight
        });
    } else {
        $('body').scrollspy({
            target: '#navigation'
        });
    }
});
