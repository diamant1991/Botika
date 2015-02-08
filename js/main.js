

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


$('.slct').click(function(){
  /* Заносим выпадающий список в переменную */
  var dropBlock = $(this).parent().find('.drop');

  /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(300);

    /* Выделяем ссылку открывающую select */
    $(this).addClass('active');

    /* Работаем с событием клика по элементам выпадающего списка */
    $('.drop').find('li').click(function(){

      /* Заносим в переменную HTML код элемента
      списка по которому кликнули */
      var selectResult = $(this).html();

      /* Находим наш скрытый инпут и передаем в него
      значение из переменной selectResult */
      $(this).parent().parent().find('input').val(selectResult);

      /* Передаем значение переменной selectResult в ссылку которая
      открывает наш выпадающий список и удаляем активность */
      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      /* Скрываем выпадающий блок */
      dropBlock.slideUp(300);
    });

  /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
  } else {
    $(this).removeClass('active');
    dropBlock.slideUp(300);
  }

  /* Предотвращаем обычное поведение ссылки при клике */
  return false;
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



