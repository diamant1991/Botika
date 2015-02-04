 $(document).ready(function() {

   $('.close-banner').click(function () {
      $(".attention").animate({opacity: "0"}, 400)
      .slideUp()
    });
            
 });
var top_show = 200; 
  var delay = 1300; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#scrollup').fadeIn();
      else $('#scrollup').fadeOut();
    });

    $('#scrollup').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });