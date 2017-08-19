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
})
