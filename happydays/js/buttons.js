function openForm() {
    $('.callform-wrap').css("display", "block").animate({opacity: 1}, 500);
    $('.callform').css("display", "block").animate({opacity: 1}, 500);
}

function closeForm() {
    $('.callform-wrap').animate({opacity: 0}, 500, function(){
    	$(this).css("display", "none");
    });
    $('.callform').animate({opacity: 0}, 500, function(){
    	$(this).css("display", "none");
    });
}

$('.menu-btn').click(function(){
	if ($('.menu').css("width") == "50px"){
		$('.menu').animate({ 
			borderTopLeftRadius: "20px",
			borderTopRightRadius: "20px",
			borderBottomLeftRadius: "20px",
			borderBottomRightRadius: "20px",
		}, 200, function(){
			$('.menu').animate({
				width: "180px",
			}, 200, function(){
				$(this).css({height: "auto"});
				$('.menu-list').animate({opacity: 1}, 200);
			})		
		});
	} else {
		$('.menu-list').animate({opacity: 0}, 200, function(){
			$('.menu').css({height: "50px"});
			$('.menu').animate({width: "50px",}, 200, function(){
				$('.menu').animate({
					borderTopLeftRadius: "25px",
					borderTopRightRadius: "25px",
					borderBottomLeftRadius: "25px",
					borderBottomRightRadius: "25px",
				}, 200);
			});
		});	
	}
})

$("#menu1").click(function() {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 1000);
});

$("#menu2").click(function() {
    $('html, body').animate({
        scrollTop: $('.facts-section').offset().top
    }, 1000);
});

$("#menu3").click(function() {
    $('html, body').animate({
        scrollTop: $('.hits-section').offset().top
    }, 1000);
});

$("#menu4").click(function() {
    $('html, body').animate({
        scrollTop: $('.holiday-section').offset().top
    }, 1000);
});

$("#menu5").click(function() {
    $('html, body').animate({
        scrollTop: $('.smiles-section').offset().top
    }, 1000);
});

$("#menu6").click(function() {
    $('html, body').animate({
        scrollTop: $('.impressions-section').offset().top
    }, 1000);
});

$("#menu7").click(function() {
    $('html, body').animate({
        scrollTop: $('.howto-section').offset().top
    }, 1000);
});