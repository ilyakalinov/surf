$(function(){
    
    $('.header__slider').slick({
        Infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-right" src="../img/arrow-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows-left" src="../img/arrow-right.svg">',
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
      });
    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-right" src="../img/arrow-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows-left" src="../img/arrow-right.svg">',
        asNavFor: '.slider__map'
    });
    $('.slider__map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.surf-slider',
        arrows: false,
        focusOnSelect: true
      });
    $('.shop__slider-name').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.shop__slider-surf-item'
    });
    $('.shop__slider-surf-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1, 
        fade: true,
        asNavFor: '.shop__slider-name',
        prevArrow: '<img class="slider-arrows slider-arrows-right" src="../img/arrow-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows-left" src="../img/arrow-right.svg">',
    });
    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('active');
    });
});
