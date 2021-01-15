$(document).ready(function(){
	
	$('.webdev-slider').slick({
        infinite: true,
		arrows: false,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true
    });
	
	$('#left').click(function(event){
		$('.webdev-slider').slick('slickPrev');
	});
	$('#right').click(function(event){
		$('.webdev-slider').slick('slickNext');
	});	
	
	$('.webdev-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('#numberSlide').html(currentSlide+1);
		$('#totalSlide').html(slick.slideCount);
	});	
	
	$('.webdev-slider').slick('goTo',1);

});