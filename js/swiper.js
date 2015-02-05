  var mySwiper = $('.swiper-container').swiper({
    pagination: '.pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop:true,
    watchActiveIndex: true
  });
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.swiper-container').data('swiper');
    swiper.swipePrev();
  });
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.swiper-container').data('swiper');
    swiper.swipeNext();
  });