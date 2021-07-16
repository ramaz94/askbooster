$(function(){


  $('.revive__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '<button class="slick-arrow-prew" type="button"><img src="./img/arrow-left.svg"></button>',
    nextArrow: '<button class="slick-arrow-next" type="button"><img src="./img/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
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


  $('.products__item-tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.products__item-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.products__item-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

    $('.burger__btn').on('click', function(){
      $('.products__item-tabs').slideToggle();
    });
});



