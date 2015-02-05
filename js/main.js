 $(document).ready(function() {

   $('.close-banner').click(function () {
      $(".attention").animate({opacity: "0"}, 400)
      .slideUp()
    });
       $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });

            
 });
var top_show = 100; 
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

