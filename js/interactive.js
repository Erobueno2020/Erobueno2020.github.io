$(document).ready(function(){
$('a.lightbox').divbox({caption: false});
$('a.lightbox2').divbox({caption: false, width: 600, height: 400});
$('a.iframe').divbox({ width: 200, height: 200 , caption: false});
$('a.ajax').divbox({ type: 'ajax', width: 200, height: 200 , caption: false,api:{
afterLoad: function(o){
$(o).find('a.close').click(function(){
  o.closed();
  return false;
});

$(o).find('a.resize').click(function(){
  o.resize(200,50);
  return false;
});
}
}});
});



var width = $(window).width();
$(document).ready(function(){

  // Выравниваем по высоте
  function matchHeight(){
   $('.comparison-slider-mobile').matchHeight();
   $('.item-kit__block-content').matchHeight();
   $('.order-page__payment-method__block').matchHeight();
 };
 $(document).ready(matchHeight);
 $(window).resize(matchHeight);

 
  // Наивысшая высота блока на декстопных карточках товара
  if(width > 800){

    function itemContentHeight(){
      var arrayICH = jQuery(".catalog-items__item-content");
      var heightICH = 0;
      for(i = 0; i < arrayICH.length; i++){
        if(jQuery(arrayICH[i]).height() > heightICH){
          heightICH = jQuery(arrayICH[i]).height();
        }
      }
      jQuery(arrayICH).height(heightICH);
    }
    $(document).ready(itemContentHeight);
    $(window).resize(itemContentHeight);

    function itemHeight(){
      var arrayIH = jQuery(".catalog-items__item");
      var heightIH = 0;
      for(i = 0; i < arrayIH.length; i++){
        if(jQuery(arrayIH[i]).height() > heightIH){
          heightIH = jQuery(arrayIH[i]).height();
        }
      }
      jQuery(arrayIH).height(heightIH);
    }
    $(document).ready(itemHeight);
    $(window).resize(itemHeight);

  };

  // Наивысшая высота на мобильных слайдерах у карточки
  if (width < 799){

    function itemContentHeightMob(){
      var arrayICHM = jQuery(".comparison-slider-mobile .catalog-items__item-content");
      var heightICHM = 0;
      for(i = 0; i < arrayICHM.length; i++){
        if(jQuery(arrayICHM[i]).height() > heightICHM){
          heightICHM = jQuery(arrayICHM[i]).height();
        }
      }
      jQuery(arrayICHM).height(heightICHM);
    }
    $(document).ready(itemContentHeightMob);
    $(window).resize(itemContentHeightMob);

    function itemHeightMob(){
      var arrayIHM = jQuery(".comparison-slider-mobile .catalog-items__item");
      var heightIHM = 0;
      for(i = 0; i < arrayIHM.length; i++){
        if(jQuery(arrayIHM[i]).height() > heightIHM){
          heightIHM = jQuery(arrayIHM[i]).height();
        }
      }
      jQuery(arrayIHM).height(heightIHM);
    }
    $(document).ready(itemHeightMob);
    $(window).resize(itemHeightMob);

  };

  // Ползунки у Range Sliders
  $( function() {
   $( "#slider-range1" ).slider({
    range: true,
    min: 0,
    max: 50000,
    values: [ 0, 50000 ],
    slide: function( event, ui ) {
     $( "#amount1" ).val( ui.values[ 0 ] + " руб"  );
     $( "#amount2" ).val( ui.values[ 1 ] + " руб" );
   }
 });
   $( "#amount1" ).val( $( "#slider-range1" ).slider( "values", 0 ) + " руб");
   $( "#amount2" ).val( $( "#slider-range1" ).slider( "values", 1 ) + " руб");

 } );

  $( function() {
   $( "#slider-range2" ).slider({
    range: true,
    min: 0,
    max: 50,
    values: [ 0, 50 ],
    slide: function( event, ui ) {
     $( "#amount3" ).val( ui.values[ 0 ] + " см");
     $( "#amount4" ).val( ui.values[ 1 ] + " см" );
   }
 });
   $( "#amount3" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " см");
   $( "#amount4" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " см" );
 } );

  $( function() {
   $( "#slider-range3" ).slider({
    range: true,
    min: 0,
    max: 50,
    values: [ 0, 50 ],
    slide: function( event, ui ) {
     $( "#amount5" ).val( ui.values[ 0 ] + " см");
     $( "#amount6" ).val( ui.values[ 1 ] + " см" );
   }
 });

   $( "#amount5" ).val( $( "#slider-range3" ).slider( "values", 0 ) + " см");
   $( "#amount6" ).val( $( "#slider-range3" ).slider( "values", 1 ) + " см" );
 } );


    // // Чтобы можно было перемещать ползунки на мобилке свайпом
    // $('#slider-range1').draggable();
    // $('#slider-range2').draggable();
    // $('#slider-range3').draggable();


    // FILTER OPEN CHILD
    $(".catalog-filter__nav li").click(function(){
     $(this).find(".child").toggleClass("child-open");
   });

  });
// END OF DOCUMENT READY


    // HEADER - BASKET POPUP
    $(document).on('click', '#basket-toggle', function(e) {
     e.preventDefault();
     if (width > 1169) {
      $( '.basket-popup' ).toggleClass('show-popup');
    } else {
      $( '.basket-mob, .basket-block-mobile' ).fadeToggle(150).toggleClass('opened');
      $( '.basket-icon' ).css({zIndex: '2003'});
      $( '.basket-number' ).css({zIndex: '2004'});
    };
  });

    // HEADER - MENU POPUP
    $(document).on('click', '.menu-toggle', function(e) {
     e.preventDefault();
     $( '.menu-mobile' ).fadeToggle(150).toggleClass('opened');
     $( '.basket-icon' ).css({zIndex: '100'});
     $( '.basket-number' ).css({zIndex: '101'});
   });




    $(document).ready(function(){


    // SEARCH - INPUT FOCUS
    $( ".search-input" ).focus(function() {
     if (width > 1169) {
      $( '.contact-block' ).addClass('focused');
      $('.search').css({maxWidth: '630' + 'px'});
      $( '.info' ).hide('fast');
    }
  });
    $( ".search-input" ).focusout(function() {
     if (width > 1169) {
      $( '.contact-block' ).removeClass('focused');
      $('.search').css({maxWidth: '240' + 'px'});
      $( '.info' ).show(500);
    }
  });
    $( ".search-input" ).focus(function() {
     if (width > 319 && width < 767) {
      $( '.burger-btn, .logo-btn' ).hide(150);
    }
  });
    $( ".search-input" ).focusout(function() {
     if (width > 319 && width < 767) {
      $( '.burger-btn, .logo-btn' ).show(150);
    }
  });


    // HEADER - PHONE POPUP 
    $(document).on('click', '.phone-toggle', function(e) {
     e.preventDefault();
     $('.phone-popup').toggleClass('show-popup');
   });


    // FOOTER TABLET ADAPTIVE 
    if (width > 767 && width < 1169) {
     $('.element-one, .element-two').wrapAll('<div class="tablet-adaptive">');
   };


    // POPUPS CLOSE ON BODY CLICK
    $(document).click(function(event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".basket-popup, #basket-toggle, .phone-toggle, .phone-popup").length) {
     $("body").find(".basket-popup, .phone-popup").removeClass("show-popup");
   }
 });


  // POPUPS CLOSE ON ESCAPE
  document.addEventListener('keydown', function (e) {
   if(e.keyCode === 27) $('.basket-popup, .phone-popup').removeClass('show-popup');
 }); 


 // FIXED HEADER
 $(document).on('click', '.menu-toggle', function() {
  if (($('.menu-mobile').hasClass('opened')) && width < 1170) {
   $('.navigation').css({position: 'relative'});
   $('.header').css({zIndex: 'auto'});
   window.scrollTo({top: 0, behavior: 'smooth'});
 }
 else {
   $('.navigation').css({position: 'fixed'});
   $('.header').css({zIndex: '9999'});
 }
});


 $(document).on('click', '.basket-open', function() {
   if (width < 1170 && $('.basket-mob').hasClass('opened')) {
    $('.navigation').css({position: 'relative'});
    $('.header').css({zIndex: 'auto'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  else {
    if (width < 1170) {
      $('.navigation').css({position: 'fixed'});
      $('.header').css({zIndex: '9999'});
    }   
  }
});

  // DROPDOWN HEADER
  $(".category, .promo").hover(function () {
    var $this = $(this);
    var menu;
    setTimeout(function () {
      if ((width > 1169) && (menu = $this.attr('id'))) {
        var menuId = menu.split('_');
        var target = $('#aa_' + menuId[1]);
        target.toggleClass('visible');
        if (!target.is(":visible")) {
          $this.removeClass('active');
          target.unbind('mouseover');
        } else $this.addClass('active');
        target.one('mouseover', function () {
          target.one('mouseout', function mouseout() {
            if (target.is(':hover')) {
              target.one('mouseout', mouseout);
              return;
            }
            $this.removeClass('active');
          });
        });
      };
    }, 0);
  });


// DROPDOWN MOBILE

$(document).on('click', '.cat-mob, .promo-mob', function (e) {
  var $this = $(this);
  var menu;
  e.preventDefault();
  if ((width < 1168) && (menu = $this.attr('id'))) {
    var menuId = menu.split('_');
    var target = $('#list_' + menuId[1]);
    target.fadeToggle('fast');
  };
});

$(document).on('click', '.sm-li_main', function (e) {
  var $this = $(this);
  var menu;
  e.preventDefault();
  if ((width < 1168) && (menu = $this.attr('id'))) {
    var menuId = menu.split('_');
    var target = $('#test_' + menuId[1]);
    target.fadeToggle('fast');
  };
});


// SLIDER

$(function() {
  $('.slider-mp').slick({
    settings: "unslick",
    infinite: true,
    slidesToScroll: 2,
    slidesToShow: 2,
    autoplay: true,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 3000,
      settings: "unslick"
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });
});

$(function() {
  if (width < 1169) {
    $('.sponsors-upblock').slick({
      infinite: true,
      slidesToScroll: 2,
      slidesToShow: 2,
      arrows: false,
      dots: false,
      asNavFor: '.sponsors-botblock',
      responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      ]
    });
  };
});

$(function() {
  if (width < 1169) {
    $('.sponsors-botblock').slick({
      infinite: true,
      slidesToScroll: 2,
      slidesToShow: 2,
      arrows: false,
      dots: true,
      asNavFor: '.sponsors-upblock',
      responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      ]
    });
  };
});


// BOOTSTRAP TABS
$('.tab-pane').slick({
 variableWidth: false,
 infinite: true,
 slidesToShow: 5,
 slidesToScroll: 1,
 dots: true,
 arrows: false,
 responsive: [ 
 {
  breakpoint: 1200,
  settings: {
   slidesToShow: 4,
   slidesToScroll: 1,
 } 
},
{
  breakpoint: 992,
  settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
 } 
},
{
  breakpoint: 750,
  settings: {
   slidesToShow: 2,
   slidesToScroll: 1,
 } 
},
]
});


    // INPUT NUMBER
    $('.numb').number_plugin();


    // STICKY BLOCK SIDEBAR AND MENU
    // SIDEBAR
    $('.item-page__sidebar-container').stick_in_parent({
        // Отступ сверху
        offset_top: 10
      });

    // MENU
    if (width < 992 ) {

     $('.item-nav').stick_in_parent({
        // Отступ сверху
        offset_top: 0
      });
     $('.item-nav').css({
      "margin": "0",
      "background": "white",
      "z-index": "999999999",
    });
     $(".item-nav ul").css({
      "border-bottom":"1px solid",
    });
     $(".item-nav ul li").css("padding-top", "10px");
   };


    // HOVER COLORS
    $('.catalog-filter__colors__color').click(function(){
     if ($(".catalog-filter__colors__color").hasClass('color-active') ) {
      $(".catalog-filter__colors__color").removeClass('color-active');
      $(this).addClass('color-active');
    } else {
      $(this).addClass('color-active');
      //Insert event handling logic
    }
  });

    // MOBILE NAV OPEN
    $(".mobile-nav-block__sizes").click(function(){
      $(".item-sizes").toggleClass("nav-open-class");
      $(".mobile-nav-block__sizes").toggleClass("nav-open-button");

      if ($(".item-sizes").hasClass("nav-open-class")){
       $(".mobile-nav-block__sizes span").html("-");
     } else {
       $(".mobile-nav-block__sizes span").html("+");
     };
   });
    $(".mobile-nav-block__delivery").click(function(){
      $(".item-delivery").toggleClass("nav-open-class");
      $(".mobile-nav-block__delivery").toggleClass("nav-open-button");

      if ($(".item-delivery").hasClass("nav-open-class")){
       $(".mobile-nav-block__delivery span").html("-");
     } else {
       $(".mobile-nav-block__delivery span").html("+");
     };
   });
    $(".mobile-nav-block__guarantee").click(function(){
      $(".item-guarantee").toggleClass("nav-open-class");
      $(".mobile-nav-block__guarantee").toggleClass("nav-open-button");

      if ($(".item-guarantee").hasClass("nav-open-class")){
       $(".mobile-nav-block__guarantee span").html("-");
     } else {
       $(".mobile-nav-block__guarantee span").html("+");
     };
   });


    // INPUT COLORS OPEN
    $(".select-block__colors__input").click(function(){
     $(this).parent().find(".select-block__colors").toggleClass("flex");
   });

    // COLOR SELECT INPUT
    $('.input-color').click(function(){
      $(this).parent().parent().parent().parent().find(".block-input-color .placeholder").css('background', $inputColor);
      $(this).parent().parent().find(".select-block__colors").toggleClass("flex");
      $(this).parent().parent().parent().parent().find(".select-block__colors-name").html( $(this).find("input").attr('data-color-name') );
    })

    // SIZE INPUT HIDE PLACEHOLDER
    $('.block-select__element select').click(function(){
      $(this).parent().parent().find(".placeholder").css("opacity","0");
    })

    // PRODUCT POPUP
    $(".product-popup__close").click(function(){
     $(".product-popup").fadeOut();
     $("body").css("overflow", "visible");
   });
    $(".product-popup__interactive-button").click(function(){
     $(".product-popup").fadeOut();
     $("body").css("overflow", "visible");
   });
    $(".product-popup__background").click(function(){
     $(".product-popup").fadeOut();
     $("body").css("overflow", "visible");
   });
    $(".item-kit .item-kit__block-image").click(function(){
     $(".product-popup").fadeIn();
     $(".product-popup").css("display", "flex");
     $("body").css("overflow", "hidden");
   });
    $(".comparison-page .catalog-items__item-image").click(function(){
     $(".product-popup").fadeIn();
     $(".product-popup").css("display", "flex");
     $("body").css("overflow", "hidden");
   });


    document.addEventListener('keydown', function (e) {
     if(e.keyCode === 27) $('.product-popup').fadeOut();
     $("body").css("overflow", "visible");
   }); 


    $('a').on('click', function(e){
     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
     e.preventDefault();
   });


    $('[data-fancybox]').fancybox({
     thumbs : {
      fitToView: true, 
      autoResize: true, 
      autoCenter: true, 
      autoSize:true
    }
  });


// Скрываем попап по клику на фон
$(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".product-popup__container-block"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
     $(".product-popup").fadeOut();
   $("body").css("overflow", "visible");
 }
});
}); 

$(".parameters-cloud-icon").mouseover(function(){
  $(this).parent().find(".parameters-cloud").css("opacity", "1");
  $(this).parent().find(".parameters-cloud").css("z-index", "1");
});
$(".parameters-cloud-icon").mouseout(function(){
  $(this).parent().find(".parameters-cloud").css("opacity", "0");
  $(this).parent().find(".parameters-cloud").css("z-index", "-1");
});

$(".parameters-kit__title").click(function(){
  $(this).parent().find(".parameters-kit__block-element-container").toggleClass("max-height100");
  // $(this).parent().find(".parameters-kit__block-element-container").toggleClass("max-height100");
  // $(this).parent().find(".parameters-kit__block-element").toggleClass("flex");
  $(this).parent().find(".parameters-kit__title-text-icon").toggleClass("parameters-kit__title-text-icon__bg2");
});


    // SLICK SLIDERS
    $('.comparison-slider').slick({
     variableWidth: false,
     infinite: false,
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows: true,
     asNavFor: '.parameters-kit__block-element__list-container',

     nextArrow: '<button id="next" class="slick-arrow2" type="button"></button>',
     prevArrow: '<button id="prev" class="slick-arrow2" type="button"></button>',
     responsive: [ 
     {
      breakpoint: 1200,
      settings: {
       slidesToShow: 4,
     } 
   },
   {
    breakpoint: 992,
    settings: {
     slidesToShow: 3,
   } 
 },
 {
  breakpoint: 800,
  settings: {
   slidesToShow: 2,
   swipe: false,
 } 
},

]
});


    $('.parameters-kit__block-element__list-container').slick({
      swipe: false,
      asNavFor: '.comparison-slider',
      focusOnSelect: true,
      variableWidth: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,

      responsive: [ 
      {
        breakpoint: 1200,
        settings: {
         slidesToShow: 4,
       } 
     },
     {
      breakpoint: 992,
      settings: {
       slidesToShow: 3,
     } 
   },
   {
    breakpoint: 800,
    settings: {
     slidesToShow: 2,
   } 
 },
 ]
});


    function sliderMobileItemWidth(){
      $catalogItemWidth = $(".catalog-items__item").css("width");
      $(".comparison-slider-mobile").css("width", $catalogItemWidth);
      $(".comparison-slider-mobile .catalog-items__item").css("width", $catalogItemWidth);
    }
    $(document).ready(sliderMobileItemWidth);
    $(window).resize(sliderMobileItemWidth);


    $(function (){

      $('.comparison-slider-mobile1').slick({
        settings: 'unslick',
        asNavFor: '.parameters-slider-mobile1',
        variableWidth: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.slider-mobile__arrows1'),
        prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
        nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
        responsive: [ 
        {
          breakpoint: 300,
          settings: 'unslick'
        },
        {
          breakpoint: 800,
          settings: {
            asNavFor: '.parameters-slider-mobile1',
            variableWidth: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: $('.slider-mobile__arrows1'),
            prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
            nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
          } 
        },
        ]
      });


// SLIDERS MOBILE ITEMS

$('.parameters-slider-mobile1').slick({
  settings: 'unslick',
  asNavFor: '.comparison-slider-mobile1',
  variableWidth: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [ 
  {
    breakpoint: 300,
    settings: 'unslick'
  },
  {
    breakpoint: 800,
    settings: {
      asNavFor: '.comparison-slider-mobile1',
      variableWidth: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    } 
  },
  ]
});

$('.comparison-slider-mobile2').slick({
  settings: 'unslick',
  asNavFor: '.parameters-slider-mobile2',
  variableWidth: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
  nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
  appendArrows: $('.slider-mobile__arrows2'),
  responsive: [ 
  {
    breakpoint: 300,
    settings: 'unslick'
  },
  {
    breakpoint: 800,
    settings: {
      asNavFor: '.parameters-slider-mobile2',
      variableWidth: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
      nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
      appendArrows: $('.slider-mobile__arrows2'),
    } 
  },
  ]
});


$('.parameters-slider-mobile2').slick({
  settings: 'unslick',
  asNavFor: '.comparison-slider-mobile2',
  variableWidth: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [ 
  {
    breakpoint: 300,
    settings: 'unslick'
  },
  {
    breakpoint: 800,
    settings: {
      asNavFor: '.comparison-slider-mobile2',
      variableWidth: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    } 
  },
  ]
});

});



    // СОХРАНЕНИЕ ВЫСОТЫ БЛОКА
    function catalogItemHeightContainer(){
      $catalogItemHeightContainer = $(".catalog-items__item").css('height');
      $(".catalog-items__item-container").css('height', $catalogItemHeightContainer);
    }
    $(document).ready(catalogItemHeightContainer);
    $(window).resize(catalogItemHeightContainer);

    // // TEST
    // $('.foo').offset().top - $('.bar').offset().top

    // Synchronization slider with slider char
    $(".comparison-slider #next").click(function(){
      $('#next-char').trigger('click');
    });
    $(".comparison-slider #prev").click(function(){
      $('#prev-char').trigger('click');
    });

// BORDER AROUND THE SELECTED BLOCK
$(".method-payment-input").click(function(){
  if ($(this).is(":checked")) {
    $(".order-page__payment-method__block").css({
      border: "1px solid #eccdba",
      padding: "12px 20px",
    });
    $(this).parent().parent().css({
      border: "2px solid #ff98b4",
      padding: "11px 19px",
    });
  }
});



$(".catalog-items__item-image").click(function(){
 $(".product-popup").fadeIn();
 $(".product-popup").css("display", "flex");
 $("body").css("overflow", "hidden");
});


});


$(document).ready(function(){
  $sliderMobileArrowsWidth = $(".comparison-slider-mobile .catalog-items__item").css("width");
  $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
});
$(window).resize(function(){
  $sliderMobileArrowsWidth = $(".catalog-items__item").css("width");
  $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
});

window.addEventListener("orientationchange", function() {
  $sliderMobileArrowsWidth = $(".catalog-items__item").css("width");
  $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
});