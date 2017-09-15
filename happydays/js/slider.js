var config = {

	fileDirectory: './img/slider/',
	fileBase: 'hit',
    fileExtension: 'png',
    sliderSpeed: 1000,
    sliderTimeout: 4000,
    numberOfImages: 4,
};

var currentSlide = 0;

var slides = [],
	titles = [],
	buttons = [];

var timer = $.timer(config.sliderTimeout, function(){

	changeSlide(null);
}, false);

function init(){

	for(i = 1; i <= config.numberOfImages; i++){

		var slide = $('<img class="slide" src="' + config.fileDirectory + config.fileBase 
			+ i + '.' + config.fileExtension + '" />');
		
		slide.appendTo($('.slider'));
		slides.push(slide);

		/*

		var button = $('<div class="slider-button"></div>');

		button.appendTo($('.slider-button-wrap'));
		buttons.push(button);       

		*/
	}

	$(slides[0]).css('opacity', 1);

	$.get('http://happydays.adr.com.ua/img/slider/titles.txt', function(data){

		data.split("\n").forEach(function(currentValue){
           
              titles.push(currentValue);
        });

        $('.slider-title').html('&laquo' + titles[0] + '&raquo');
	});

	$('.arrow-right').click(function(){

		changeSlide(null);
		timer.reset(config.sliderTimeout);
	});

	$('.arrow-left').click(function(){

		if(currentSlide == 0) changeSlide(config.numberOfImages - 1);
		else changeSlide(currentSlide - 1);

		
		timer.reset(config.sliderTimeout);
	});
};

function changeSlide(index){

	var prevSlide = $(slides[currentSlide]);

	if(index != null) currentSlide = index;
	else if (currentSlide == config.numberOfImages - 1) currentSlide = 0;
	else currentSlide++;

	var newSlide = $(slides[currentSlide]);

	$(newSlide).animate({opacity: 1}, config.sliderSpeed);
	$(prevSlide).animate({opacity: 0}, config.sliderSpeed);

	$('.slider-title').html('&laquo' + titles[currentSlide] + '&raquo');
};

$(document).ready(function(){

	init();
});