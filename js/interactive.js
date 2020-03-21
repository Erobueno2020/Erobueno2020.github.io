
$(document).ready(function(){
  window.onload = function() {
   $('.comparison-slider-mobile').matchHeight();
   $('.catalog-items__item-content').matchHeight();
   $('.catalog-items__item').matchHeight();
   $('.catalog-items__item-inner').matchHeight();
   $('.catalog-items__item-container').matchHeight();
   $('.item-kit__block-content').matchHeight();
   $('.order-page__payment-method__block').matchHeight();
 };
});
$(window).resize(function(){
 $('.comparison-slider-mobile').matchHeight();
 $('.catalog-items__item-content').matchHeight();
 $('.catalog-items__item').matchHeight();
 $('.catalog-items__item-inner').matchHeight();
 $('.catalog-items__item-container').matchHeight();

 $('.item-kit__block-content').matchHeight();
 $('.order-page__payment-method__block').matchHeight();
});



$(document).ready(function(){

  if(width > 800){

    // Наивысшая высота блока
    jQuery(document).ready(function(){
      function itemContentHeight(){
        var array = jQuery(".catalog-items__item-content");
        var height = 0;
        for(i = 0; i < array.length; i++){
          if(jQuery(array[i]).height() > height){
            height = jQuery(array[i]).height();
          }
        }
        jQuery(array).height(height);
      }
      setTimeout(itemContentHeight, 1000);
    });

    jQuery(window).resize(function(){
      function itemContentHeight(){
        var array = jQuery(".catalog-items__item-content");
        var height = 0;
        for(i = 0; i < array.length; i++){
          if(jQuery(array[i]).height() > height){
            height = jQuery(array[i]).height();
          }
        }
        jQuery(array).height(height);
      }
      setTimeout(itemContentHeight, 1000);
    });

    jQuery(document).ready(function(){
      function itemContentHeight222(){
        var array22 = jQuery(".catalog-items__item");
        var height22 = 0;
        for(i = 0; i < array22.length; i++){
          if(jQuery(array22[i]).height() > height22){
            height22 = jQuery(array22[i]).height();
          }
        }
        jQuery(array22).height(height22);
      }
      setTimeout(itemContentHeight222, 1000);
    });

    jQuery(window).resize(function(){
      function itemContentHeight222(){
        var array22 = jQuery(".catalog-items__item");
        var height22 = 0;
        for(i = 0; i < array22.length; i++){
          if(jQuery(array22[i]).height() > height22){
            height22 = jQuery(array22[i]).height();
          }
        }
        jQuery(array22).height(height22);
      }
      setTimeout(itemContentHeight222, 1000);
    });
  };
});



$(document).ready(function(){

  if(width < 800){
    jQuery(document).ready(function(){
      function itemContentHeightMob(){
        var array33 = jQuery(".comparison-slider-mobile .catalog-items__item-content");
        var height33 = 0;
        for(i = 0; i < array33.length; i++){
          if(jQuery(array33[i]).height() > height33){
            height33 = jQuery(array33[i]).height();
          }
        }
        jQuery(array33).height(height33);
      }
      setTimeout(itemContentHeightMob, 1100);
    });

    jQuery(window).resize(function(){
      function itemContentHeightMob(){
        var array33 = jQuery(".comparison-slider-mobile .catalog-items__item-content");
        var height33 = 0;
        for(i = 0; i < array33.length; i++){
          if(jQuery(array33[i]).height() > height33){
            height33 = jQuery(array33[i]).height();
          }
        }
        jQuery(array33).height(height33);
      }
      setTimeout(itemContentHeightMob, 1100);
    });

    jQuery(document).ready(function(){
      function itemContentHeight233(){
        var array23 = jQuery(".comparison-slider-mobile .catalog-items__item");
        var height23 = 0;
        for(i = 0; i < array23.length; i++){
          if(jQuery(array23[i]).height() > height23){
            height23 = jQuery(array23[i]).height();
          }
        }
        jQuery(array23).height(height23);
      }
      setTimeout(itemContentHeight233, 1000);
    });
    jQuery(window).resize(function(){
      function itemContentHeight233(){
        var array23 = jQuery(".comparison-slider-mobile .catalog-items__item");
        var height23 = 0;
        for(i = 0; i < array23.length; i++){
          if(jQuery(array23[i]).height() > height23){
            height23 = jQuery(array23[i]).height();
          }
        }
        jQuery(array23).height(height23);
      }
      setTimeout(itemContentHeight233, 1000);
    });
  };
});






$(document).ready(function(){

    // RANGE SLIDERS
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

    //   ADAPTIVE RANGE SLIDER FOR GLIDE MOBILE
    $('#slider-range1').draggable();
    $('#slider-range2').draggable();
    $('#slider-range3').draggable();

  });



    // FILTER BUTTON
    $(".catalog-filter__title-block").click(function(){
     $(".catalog-filter__container").toggleClass("filterOpen");
     $(".catalog-filter__title-block").toggleClass("borderRadiusChange");
   });



    // FILTER OPEN CHILD
    $(".catalog-filter__nav li").click(function(){
     $(this).find(".child").toggleClass("child-open");
   });



    // HEADER - BASKET POPUP
    var width = $(window).width();
    $(document).on('click', '#basket-toggle', function(e) {
     e.preventDefault();
     if (width > 1169) {
      $( '.basket-popup' ).toggleClass('show-popup');
    }
    else
      $( '.basket-mob, .basket-block-mobile' ).fadeToggle(150).toggleClass('opened');
    $( '.basket-icon' ).css({zIndex: '2003'});
    $( '.basket-number' ).css({zIndex: '2004'});
  });



    // HEADER - MENU POPUP
    $(document).on('click', '.menu-toggle', function(e) {
     e.preventDefault();
     $( '.menu-mobile' ).fadeToggle(150).toggleClass('opened');
     $( '.basket-icon' ).css({zIndex: '100'});
     $( '.basket-number' ).css({zIndex: '101'});
   });



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



    // SLICK SLIDERS
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
    $(document).ready(function () {
     $('.numb').number_plugin();
   });



    // STICKY BLOCK SIDEBAR AND MENU
    $(document).ready(function(){

        // Находим плавающий блок и делаем его плавающим
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

     });


    
    // HOVER COLORS
    $('.catalog-filter__colors__color').click(function(){
     if ($(".catalog-filter__colors__color").hasClass('color-active') ) {
      $(".catalog-filter__colors__color").removeClass('color-active');
      $(this).addClass('color-active');
                //Insert logic if you want a type of optional click/off click code
              } 
              else
              {
                $(this).addClass('color-active');
                //Insert event handling logic
              }
            });

    $(document).on('mouseover', 'a', function () {
     var $this = $(this);
     var menu;
     if ((menu = $this.attr('id'))) 
      var target = menu; {
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
    }
  });



    // MOBILE NAV OPEN
    $(document).ready(function(){
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
   });

  //   $(document).ready(function () {

  //    var length = $('.item-info__block-images-group a').length;
  //    if (length>6){
  //     $(".item-info__block-images-group").addClass("flex-wrap-class");
  //   }

  // });

    // INPUT COLORS OPEN
    $(".select-block__colors__input").click(function(){
     $(this).parent().find(".select-block__colors").toggleClass("flex");
   });

    // COLOR SELECT INPUT
    $(document).ready(function () {
     $('.input-color').click(function(){
      $(this).parent().parent().parent().parent().find(".block-input-color .placeholder").css('background', $inputColor);
      $(this).parent().parent().find(".select-block__colors").toggleClass("flex");
      $(this).parent().parent().parent().parent().find(".select-block__colors-name").html( $(this).find("input").attr('data-color-name') );
    })
   });

    // SIZE INPUT HIDE PLACEHOLDER
    $(document).ready(function () {
     $('.block-select__element select').click(function(){
      $(this).parent().parent().find(".placeholder").css("opacity","0");
    })
   });

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

    jQuery(document).ready(function() {
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




    $(window).resize(function(){
      $catalogItemWidth = $(".catalog-items__item").css("width");
      $(".comparison-slider-mobile").css("width", $catalogItemWidth);
      $(".comparison-slider-mobile .catalog-items__item").css("width", $catalogItemWidth);
    });

    $(document).ready(function(){
      $catalogItemWidth = $(".catalog-items__item").css("width");
      $(".comparison-slider-mobile").css("width", $catalogItemWidth);
      $(".comparison-slider-mobile .catalog-items__item").css("width", $catalogItemWidth);

      if ($(window).width() < 800) {

        $('.comparison-slider-mobile1').slick({
          asNavFor: '.parameters-slider-mobile1',
          variableWidth: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          appendArrows: $('.slider-mobile__arrows1'),
          prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
          nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
        });

        $('.parameters-slider-mobile1').slick({
          asNavFor: '.comparison-slider-mobile1',
          variableWidth: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        });

        $('.comparison-slider-mobile2').slick({
          asNavFor: '.parameters-slider-mobile2',
          variableWidth: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button id="prev-charMobile" class="slider-mobile__arrows__left" type="button"></button>',
          nextArrow: '<button id="next-charMobile" class="slider-mobile__arrows__right" type="button"></button>',
          appendArrows: $('.slider-mobile__arrows2'),
        });
        $('.parameters-slider-mobile2').slick({
          asNavFor: '.comparison-slider-mobile2',
          variableWidth: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        });

      }
    });

    // СОХРАНЕНИЕ ВЫСОТЫ БЛОКА
    $(document).ready(function(){
     $catalogItemHeight = $(".catalog-items__item").css('height');
     $(".catalog-items__item-container").css('height', $catalogItemHeight);
   });
    $(window).resize(function(){
     $catalogItemHeight = $(".catalog-items__item").css('height');
     $(".catalog-items__item-container").css('height', $catalogItemHeight);
   });

    // TEST
    $(document).ready(function(){
     $('.foo').offset().top - $('.bar').offset().top
   });

    // DELETE BUTTON CARD COMPRISON OAGE
    $(document).ready(function(){

     $(".catalog-items__item").hover(function(){
      $(this).find(".catalog-items__item-delete").toggleClass("opacityVisible");
    });
   });

    // Synchronization slider with slider char
    $(".comparison-slider #next").click(function(){
      $('#next-char').trigger('click');
    });
    $(".comparison-slider #prev").click(function(){
      $('#prev-char').trigger('click');
    });

// BORDER AROUND THE SELECTED BLOCK
$(document).ready(function(){
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
});


$(".catalog-items__item-image").click(function(){
 $(".product-popup").fadeIn();
 $(".product-popup").css("display", "flex");
 $("body").css("overflow", "hidden");
});


    $(document).ready(function(){
      $sliderMobileArrowsWidth = $(".comparison-slider-mobile .catalog-items__item").css("width");
      $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
    });
    $(window).resize(function(){
      $sliderMobileArrowsWidth = $(".comparison-slider-mobile .catalog-items__item").css("width");
      $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
    });

      window.addEventListener("orientationchange", function() {
      $sliderMobileArrowsWidth = $(".comparison-slider-mobile .catalog-items__item").css("width");
      $(".slider-mobile__arrows").css("width", $sliderMobileArrowsWidth);
    }, false);