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

    $('.social-link.facebook').on('click', function(e) {
      e.preventDefault()
      window.open('http://www.facebook.com/sharer/sharer.php?u=datapractices.org', '_blank', 'top=0,left=500,width=600,height=400')
    })

    $('.social-link.twitter').on('click', function(e) {
      e.preventDefault()
      window.open('http://twitter.com/home?status=I%20just%20signed%20the%20Data%20Practices%20Manifesto,%20which%20describes%20the%20most%20effective,%20ethical,%20and%20modern%20approach%20to%20data%20teamwork.%20Join%20the%20movement%20at%20https%3A%2F%2Fhubs.ly%2FH09W81F0', '_blank', 'top=0,left=500,width=600,height=400')
    })

    $('.social-link.twitter-ethics').on('click', function(e) {
      e.preventDefault()
      window.open('http://twitter.com/home?status=The%20CPEDS%20(Community%20Principles%20for%20Ethical%20Data%20Sharing)%20movement%20is%20underway!%20Join%20the%20effort%20at%20https%3A%2F%2Fhubs.ly%2FH09W81F0', '_blank', 'top=0,left=500,width=600,height=400')
    })
});
