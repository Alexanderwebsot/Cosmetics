$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });
  $('.catalog-slider-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  });
  $('.header-catalog-slider').slick({
    slidesToScroll: 1,
    variableWidth: true,
  })
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
    nextArrow: $('.popular-arrow__right'),
  });
  let menu_searh = $('.header-search-fixed');
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 57) {
      $(menu_searh).addClass('header-search-fixed__active');
    }
    else{
      $(menu_searh).removeClass('header-search-fixed__active');
    }
  });
});
