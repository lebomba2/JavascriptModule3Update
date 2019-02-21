/* global $ */
$(function () {
    var rand = Math.floor(Math.random() * 10);
    var attentionSeekers = [
        "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "heartBeat"
    ];
    // add the date picher to the element
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated slideInUp') :
            $('#' + this.id + 'Img').addClass('animated slideOutDown slow');
    });

    // Randomize the attention seeker animation
    $("h1.animated").addClass(attentionSeekers[rand]);
    // submit button toast
    $("#submit").click(function () {
        var checked = [];
        $('.form-check-input').each(function () {
            if ($(this).prop('checked')) {
                checked.push($(this));
            }
        });
        if (checked.length < 1) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

    // hide toast on escape 
    $(document).on('keyup', function (e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }
    });

    // toggle all balloons when the all balloons box is checked
    $('#all').click(function () {
        $('.form-check-input').each(function () {
            if ($('#all').prop('checked')) {
                $(this).prop('checked', true).trigger('change');
            } else {
                $(this).prop('checked', false).trigger('change');
            }
        });
    });
    // change color on hover
    $('.form-check-label').hover(function () {
        // remove the color class, add a color style
        $('h1.animated').removeClass('h1Color').css('color', $(this).get(0).htmlFor);
    }, function () {
        // set the color style to empty, add the color class
        $('h1.animated').css('color', '').addClass('h1Color');
    });
});