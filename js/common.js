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
    nextArrow: $('.popular-arrow__right')
  });
  let menu_bottom = $('.page-bottom');
  let otp = pageYOffset;
  window.addEventListener('scroll', function() {
    let new_otp = pageYOffset;
    if (new_otp > otp) {
      $(menu_bottom).addClass('page-bottom-active');
    }
    else{
      $(menu_bottom).removeClass('page-bottom-active');
    }
    otp = pageYOffset;
  });

});
