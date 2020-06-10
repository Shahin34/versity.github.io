$(document).ready(function(){
	
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function(){
		$('.navbar-collapse').collapse('hide');
		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target:'#mainNav',
			offset:56
		});
	});
	
	//Strat course owl carorusel slide
	$('.explore-course').owlCarousel({
		loop:true,
		margin:20,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})
});