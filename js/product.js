var mySwiper = $('.mini-swiper').swiper({
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    slidesPerView: 3
  });

  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.mini-swiper').data('swiper');
    swiper.swipePrev();
  });
	$('.arrow-right').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.mini-swiper').data('swiper');
    swiper.swipeNext();
  });