$(function(){


  $('.revive__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '<button class="slick-arrow-prew" type="button"><img src="./img/arrow-left.svg"></button>',
    nextArrow: '<button class="slick-arrow-next" type="button"><img src="./img/arrow-right.svg"></button>'
  });

  $('.title-1').hover(function(){
    $('.title_top-1, .boost__top-text, .boost__top-title').addClass('hovered');
  }, function() {
    $('.title_top-1,.boost__top-text, .boost__top-title').removeClass('hovered');
  });

  $('.title-2').hover(function(){
    $('.title_top-2, .boost__top-text, .boost__top-title').addClass('hovered');
  }, function() {
    $('.title_top-2,.boost__top-text, .boost__top-title').removeClass('hovered');
  });


  $('.title-3').hover(function(){
    $('.title_top-3, .boost__top-text, .boost__top-title').addClass('hovered');
  }, function() {
    $('.title_top-3,.boost__top-text, .boost__top-title').removeClass('hovered');
  });


  $('.title-4').hover(function(){
    $('.title_top-4, .boost__top-text, .boost__top-title').addClass('hovered');
  }, function() {
    $('.title_top-4,.boost__top-text, .boost__top-title').removeClass('hovered');
  });




});



