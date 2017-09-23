$(function(){
  var newCars_details_slide = new Swiper( '.swiper-newCar-details', {
      loop: true,
      autoplay: 5000,
      pagination : '.swiper-pagination',
      paginationType : 'fraction'
  });
  $('div.details_push_btn>button').tap(function(){
		$('section.details_push_tip').show();
	})
  $('.details_push_change span.close').tap(function(){
				$(this).addClass('hidden');
				$('section.newCar_details_share').css({'padding-bottom': '1.2rem'});
				$(this).parents('.details_push').animate({'right': '-100%'}, 300, function(){
					$(this).parent().find('span.open').removeClass('hidden').addClass('details_push_change_fixed');
				});
	});
	$('.details_push_change span.open').tap(function(){
				$(this).addClass('hidden');
				$(this).parents('.details_push').css({'right': 0});
				$(this).parent().find('span.close').removeClass('hidden details_push_change_fixed');
				$('section.newCar_details_share').css({'padding-bottom': '4.2rem'});
	})
})
