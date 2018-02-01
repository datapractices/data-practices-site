$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('.js-header-translucent').addClass('translucent')
        } else {
            $('.js-header-translucent').removeClass('translucent')
        }
    });

    // Form validation before submitting to Google forms
    $('.js-google-form').each(function(i) {
        var formFrame = document.createElement('iframe');
        formFrame.name = "form-target-"+i;
        this.target = formFrame.name;
        formFrame.style.display = 'none';
        this.insertAdjacentElement('afterend', formFrame);

        $(this).validate({
            highlight: function(element, errorClass) {
                $(element).closest('.js-field-wrap').addClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).closest('.js-field-wrap').removeClass(errorClass);
            },
            submitHandler: function(form) {
                $this = $(form);

                form.submit();
                form.reset();
                $this.closest('.js-modal-wrapper').find('.js-modal-success').show();
                $this.closest('.js-modal-form').hide();
            },
            errorPlacement: function($error, $element) {
                var $errorBox = $element.closest('.js-field-wrap').find('.js-errors');
                if($errorBox.length) {
                    $error.appendTo($errorBox);
                } else {
                    $error.insertAfter($element);
                }
            }
        });
    });

    // Reset modal forms after close
    $('.js-modal-wrapper').closest('.modal').on('hidden.bs.modal', function() {
        var $modalWrapper = $(this).find('.js-modal-wrapper');

        $modalWrapper.find('.js-google-form').validate().resetForm();
        $modalWrapper.find('.js-field-wrap').removeClass('error');

        $modalWrapper.find('.js-modal-success').hide();
        $modalWrapper.find('.js-modal-form').show();
    });

    // Init Clipboard copy feature
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
