$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
  $('.catalog-slider-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  });
  $('.brends-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  });
  $('.popular-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    dots: true,
    prevArrow: $('.popular-arrow__left'),
    nextArrow: $('.popular-arrow__right')
  });
  let menu_bottom = $('.page-bottom');
  $(function(){
    $(document).on('mousewheel DOMMouseScroll', function(event){
  	var course = event.originalEvent.wheelDelta;
  	if(course  > 0){
          $(menu_bottom).removeClass('page-bottom-active');
        }
        else{
          $(menu_bottom).addClass('page-bottom-active');
        }
    });
});
});
