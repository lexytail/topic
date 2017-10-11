$(document).ready(function(){

	$('.slider').slick({
		dots: true,
		arrows: false,
		//autoplay: true,
		speed: 800
	});

	$('.slider2').slick({
		slidesToShow: 2,
		dots: true,
		arrows: false,
		autoplay: true,
		speed: 800,
		 responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	$('.partners__slider').slick({
		arrows: false,
		speed: 800,
		slidesPerRow: 1,
		slidesToShow: 6,
		slidesToScroll: 2,
    	rows: 2,
    	dots: true,
		autoplay: true,
		responsive: [
		    {
		      breakpoint: 990,
		      settings: {
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 3
		      }
		    }
		  ]
	});

	$('.slider2').on('breakpoint',function(event,slick,breakpoint){
		addBtns('.slider2');
	});
	$('.partners__slider').on('breakpoint',function(event,slick,breakpoint){
		addBtns('.partners__slider');
	})

	$(window).resize(function(){
		var w = $(window).width();
		if (w < 768) {
			$('.creator').html('&copy;2017 Все права защищены');
			$('.copyright').html('Сайт изготовлен студией <span><a href="#">Екатерины Громовой</a></span>');
		} else {
			$('.creator').html('Сайт изготовлен студией <span><a href="#">Екатерины Громовой</a></span>');
			$('.copyright').html('&copy;2017 Все права защищены');
		}
		if (w <= 768 && w > 550){
			var scr = ($(window).width()-338)/2;
			$('.select').css('width',scr);
			$('.select select').css('width',scr);
			$('.abs-categ2').css('left',30+scr);
			$('.menu-options a.add').css('margin-left',scr*2+30);
			$('.menu-options .add').css('width','200px');
		} else if (w <= 550 && w >480){
			$('.select:eq(0)').css('width','90');
			$('.select:eq(0) select').css('width','90');
			$('.select:eq(1)').css('width','110');
			$('.select:eq(1) select').css('width','110');
			$('.abs-categ2').css('left','115px');
			$('.menu-options a.add').css('margin-left','225px');
			$('.menu-options .add').css('width',$(window).width()-333);
		} else if (w <= 480){
			var xs = ($(window).width()-30)/2;
			$('.select:eq(0)').css('width',xs-15);
			$('.select:eq(0) select').css('width',xs-15);
			$('.select:eq(1)').css('width',xs);
			$('.select:eq(1) select').css('width',xs);
			$('.abs-categ2').css('left','0');
			$('.menu-options .add').css('width',$(window).width()-110);
			$('.menu-options a.add').css('margin-left','0');
		} else {
			$('.select:eq(0)').css('width','105');
			$('.select:eq(0) select').css('width','105');
			$('.select:eq(1)').css('width','132');
			$('.select:eq(1) select').css('width','132');
			$('.abs-categ2').css('left','0');
			$('.menu-options a.add').css('margin-left','0');
		}
	});

	function getWidth(){
		var w = $(window).width();
		if (w < 768) {
			$('.creator').html('&copy;2017 Все права защищены');
			$('.copyright').html('Сайт изготовлен студией <span><a href="#">Екатерины Громовой</a></span>');
		}
		if (w <= 480){
			$('.menu-options .add').css('width',$(window).width()-110);
		} else {
			$('.menu-options .add').css('width','200');
		}
		if (w <= 768 && w > 550){
			var scr = ($(window).width()-338)/2;
			$('.select').css('width',scr);
			$('.select select').css('width',scr);
			$('.abs-categ2').css('left',30+scr);
			$('.menu-options a.add').css('margin-left',scr*2+30);
			$('.menu-options .add').css('width','200px');
		} else if (w <= 550 && w >480){
			$('.select:eq(0)').css('width','90');
			$('.select:eq(0) select').css('width','90');
			$('.select:eq(1)').css('width','110');
			$('.select:eq(1) select').css('width','110');
			$('.abs-categ2').css('left','115px');
			$('.menu-options a.add').css('margin-left','225px');
			$('.menu-options .add').css('width',$(window).width()-333);
		} else if (w <= 480){
			var xs = ($(window).width()-30)/2;
			$('.select:eq(0)').css('width',xs-15);
			$('.select:eq(0) select').css('width',xs-15);
			$('.select:eq(1)').css('width',xs);
			$('.select:eq(1) select').css('width',xs);
			$('.abs-categ2').css('left','0');
			$('.menu-options .add').css('width',$(window).width()-110);
			$('.menu-options a.add').css('margin-left','0');
		} else {
			$('.select:eq(0)').css('width','105');
			$('.select:eq(0) select').css('width','105');
			$('.select:eq(1)').css('width','132');
			$('.select:eq(1) select').css('width','132');
			$('.abs-categ2').css('left','0');
			$('.menu-options a.add').css('margin-left','0');
		}
	}

	getWidth();

	addBtns('.slider');
	addBtns('.slider2');
	addBtns('.partners__slider');

	function addBtns(name){

		$(name+' .slick-dots li:last-child').append('<div class="next-button"></div>');
		$(name+' .slick-dots li:first-child').append('<div class="prev-button"></div>');
		$(name+' .next-button').bind('click', function(){
		  	$(name).slick('slickNext');
			return false;
		});
		$(name+' .prev-button').bind('click', function(){
		  	$(name).slick('slickPrev');
			return false;
		});
	}

	$( "select" ).change(function () {
	  	var item = $(this);
	    var val = $(item).find('option:selected').text();
	    var span = $(this).closest('.select-changer').find('span').html(val);
	}).change();

})