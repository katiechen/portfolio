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

    $(function(){
    $('.nav-bar .container').data('size','big');
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 0)
        {
            if($('.nav-bar .container').data('size') == 'big')
            {
                $('.nav-bar .container').data('size','small');
                $('.nav-bar .container').stop().animate({
                    height:'65px'
                }, 300);
                $('#header-items').stop().animate({
                    'marginTop': '10px'
                }, 300);
                $('h1').stop().fadeOut(300);
                $('#exchangediv').stop().animate({
                    'marginTop': '65px'
                }, 300);
                $('#canvasdiv').stop().animate({
                    'marginTop': '65px'
                }, 300);
                $('#name').stop().animate({
                    'fontSize': '28px'
                }, 300);
            }
        }
        else
        {
            if($('.nav-bar .container').data('size') == 'small')
            {
                $('.nav-bar .container').data('size','big');
                $('.nav-bar .container').stop().animate({
                    height:'300px'
                }, 300);
                $('#header-items').stop().animate({
                    'marginTop': '100px'
                }, 300);
                $('h1').stop().fadeIn(300);
                $('#exchangediv').stop().animate({
                    'marginTop': '300px'
                }, 300);
                $('#canvasdiv').stop().animate({
                    'marginTop': '300px'
                }, 300);
                $('#name').stop().animate({
                    'fontSize': '40px'
                }, 300);
            }  
        }
    });

    $('a').hover(
        function() {
            $(this).fadeTo(200, 0.9)
        },
        function() {
            $(this).fadeTo(200, 1.0)
        }
    );

    $('#exchangediv').hover(function() {
        $('.ex').stop(true, true).fadeToggle(300);
        $('#exoverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.ex').stop(true, true).fadeToggle(300);
        $('#exoverlay').stop(true, true).slideUp(300);
    });

    $('#canvasdiv').hover(function() {
        $('.cn').stop(true, true).fadeToggle(300);
        $('#cnoverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.cn').stop(true, true).fadeToggle(300);
        $('#cnoverlay').stop(true, true).slideUp(300);
    });

    $('#caltaikodiv').hover(function() {
        $('.ct').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.ct').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).slideUp(300);
    });

    $('#myflowdiv').hover(function() {
        $('.mf').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.mf').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).slideUp(300);
    });

    $('#enableddiv').hover(function() {
        $('.eb').stop(true, true).fadeToggle(300);
        $('#eboverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.eb').stop(true, true).fadeToggle(300);
        $('#eboverlay').stop(true, true).slideUp(300);
    });

    $('#sketchdiv').hover(function() {
        $('.sb').stop(true, true).fadeToggle(300);
        $('#sboverlay').stop(true, true).slideDown(300);
    }, function() {
        $('.sb').stop(true, true).fadeToggle(300);
        $('#sboverlay').stop(true, true).slideUp(300);
    });

});