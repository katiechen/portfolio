$(document).ready(function() {

	$('body').css('display', 'none');
	$('body').fadeIn(500);

	$('.link').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(1000, newpage);
	});

	function newpage() {
		window.location = newLocation;
	};

    $('a').hover(
        function() {
            $(this).fadeTo(500, 0.4)
        },
        function() {
            $(this).fadeTo(500, 1.0)
        }
    );

    $('#exchangethumb').hover(function() {
        $('.one').stop(true, true).fadeToggle(500);
    });

    $('#slthumb').hover(function() {
        $('.two').stop(true, true).fadeToggle(500);
    });

    $('#myflowthumb').hover(function() {
        $('.three').stop(true, true).fadeToggle(500);
    });

    $('#enabledthumb').hover(function() {
        $('.four').stop(true, true).fadeToggle(500);
    });

    $('#sketchthumb').hover(function() {
        $('.five').stop(true, true).fadeToggle(500);
    });

});