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

    $(function() {
        var controller = new ScrollMagic.Controller();
        var mq = window.matchMedia("(max-width: 750px)");

        if (mq.matches) {
            var containerTween = new TweenMax.to(".nav-bar .container", 1.5, {height: '45px'});
        }

        else {
            var containerTween = new TweenMax.to(".nav-bar .container", 1.5, {height: '65px'});
        }

        var containerScene = new ScrollMagic.Scene({offset: 30, duration: 300})
        .setTween(containerTween)
        .addTo(controller);

        var menuTween = new TweenMax.to("#header-items", 1.5, {marginTop: '10px'});
        var menuScene = new ScrollMagic.Scene({offset: 30, duration: 300})
        .setTween(menuTween)
        .addTo(controller);

        var nameTween = new TweenMax.to("#name", 1.5, {fontSize: "2.2vw"});
        var nameScene = new ScrollMagic.Scene({offset: 30, duration: 300})
        .setTween(nameTween)
        .addTo(controller);

        var h1Tween = new TweenMax.to("h1", 1.5, {opacity: 0});
        var h1Scene = new ScrollMagic.Scene({offset: 30, duration: 100})
        .setTween(h1Tween)
        .addTo(controller);
    });


    /*$(window).scroll(function(){
        if($(document).scrollTop() > 100)
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
        else if($(document).scrollTop() > 0)
        {
            if($('.nav-bar .container').data('size') == 'big' || $('.nav-bar .container').data('size') == 'small')
            {
                $('.nav-bar .container').stop().animate({
                    height: '180px'
                }, 300);
                $('#header-items').stop().animate({
                    'marginTop': '60px'
                }, 300);
                $('h1').stop().fadeIn(300);
                $('#exchangediv').stop().animate({
                    'marginTop': '180px'
                }, 300);
                $('#canvasdiv').stop().animate({
                    'marginTop': '180px'
                }, 300);
                $('#name').stop().animate({
                    'fontSize': '34px'
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
    });*/

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
        $('#exoverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.ex').stop(true, true).fadeToggle(300);
        $('#exoverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

    $('#canvasdiv').hover(function() {
        $('.cn').stop(true, true).fadeToggle(300);
        $('#cnoverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.cn').stop(true, true).fadeToggle(300);
        $('#cnoverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

    $('#caltaikodiv').hover(function() {
        $('.ct').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.ct').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

    $('#myflowdiv').hover(function() {
        $('.mf').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.mf').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

    $('#enableddiv').hover(function() {
        $('.eb').stop(true, true).fadeToggle(300);
        $('#eboverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.eb').stop(true, true).fadeToggle(300);
        $('#eboverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

    $('#sketchdiv').hover(function() {
        $('.sb').stop(true, true).fadeToggle(300);
        $('#sboverlay').stop(true, true).animate({width: "toggle"}, 200);
    }, function() {
        $('.sb').stop(true, true).fadeToggle(300);
        $('#sboverlay').stop(true, true).animate({width: "toggle"}, 200);
    });

});