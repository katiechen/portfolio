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

    $('#exchange').hover(function() {
        $('.one').stop(true, true).fadeToggle(500);
    });

    $('#slmethod').hover(function() {
        $('.two').stop(true, true).fadeToggle(500);
    });

    $('#myflow').hover(function() {
        $('.three').stop(true, true).fadeToggle(500);
    });

    $('#enabled').hover(function() {
        $('.four').stop(true, true).fadeToggle(500);
    });

    $('#sketch').hover(function() {
        $('.five').stop(true, true).fadeToggle(500);
    });

    $('#caltaiko').hover(function() {
        $('.six').stop(true, true).fadeToggle(500);
    });

});