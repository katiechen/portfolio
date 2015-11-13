$(document).ready(function() {

	$('body').css('display', 'none');
	$('body').fadeIn(400);

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
            $(this).fadeTo(300, 0.4)
        },
        function() {
            $(this).fadeTo(300, 1.0)
        }
    );

    $('#exchange').hover(function() {
        $('.one').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.one').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

    $('#slmethod').hover(function() {
        $('.two').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.two').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

    $('#myflow').hover(function() {
        $('.three').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.three').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

    $('#enabled').hover(function() {
        $('.four').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.four').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

    $('#sketch').hover(function() {
        $('.five').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.five').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

    $('#caltaiko').hover(function() {
        $('.six').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 0.7);
    }, function() {
        $('.six').stop(true, true).fadeToggle(300);
        $(this).fadeTo(300, 1.0);
    });

});