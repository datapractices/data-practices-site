$(document).ready(function() {

    $(window).on('resize', function () {
        var win = $(this);
        var offsetHeight = $('.navigation').height();
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

    $('.js-social-handle').find('input[type="text"], select').change(function() {
        var $socialHandleWrap = $(this).closest('.js-social-handle');
        var type = $socialHandleWrap.find('select').val();
        var handle = $socialHandleWrap.find('input[type="text"]').val();
        if(type && handle) {
            $socialHandleWrap.find('input[type="hidden"]').val(type+handle);
        } else {
            $socialHandleWrap.find('input[type="hidden"]').val('');
        }
    });
});
