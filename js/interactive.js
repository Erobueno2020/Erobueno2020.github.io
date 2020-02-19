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

    $(".catalog-filter__button").click(function(){
        $(".catalog-filter__container").toggleClass("filterOpen");
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

    $("select option").click(function(){

    });    

    // STICKY BLOCK
    $(document).ready(function(){
        // Находим плавающий блок и делаем его плавающим
        $('.item-page__sidebar-container').stick_in_parent({
            // Отступ сверху
            offset_top: 10
        });
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

    $(document).ready(function () {

        var length = $('.item-info__block-images-group a').length;
        if (length>6){
            $(".item-info__block-images-group").addClass("flex-wrap-class");
        }

    });

    // SELECT FIX
    $(document).ready(function () {
        $('select').click(function(){
            $(this).parent().parent().find( $(".placeholder") ).hide();
        })
    });

    // INPUT COLORS OPEN
    $(".select-block__colors__input").click(function(){
        $(".select-block__colors").toggleClass("flex");
    });
    // COLOR SELECT INPUT
    $(document).ready(function () {
        $('.input-color').click(function(){
            $(".block-input-color .placeholder").css('background', $inputColor);
            $(".select-block__colors").toggleClass("flex");
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

    jQuery(document).ready(function($) {
      $('.catalog-items__item-content').matchHeight();
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