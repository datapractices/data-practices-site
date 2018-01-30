$(document).ready(function() {

    $(window).on('resize', function () {
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
        offsetHeight = $('.page-header').height();
        $('body').scrollspy({
            target: '#navigation',
            offset: offsetHeight
        });
    }


    $('.navigation-links > a').on('click', function () {
        var scrollPos = $('body > .fluid-container').find($(this).attr('href')).offset().top - (offsetHeight - 1);
        $('body,html').animate({
            scrollTop: scrollPos
        });
        return false;
    });
});
