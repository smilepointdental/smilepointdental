(function ($) {
  "use strict";

  // data - background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

  // active
  $('.pt-wrp').on('mouseenter', function () {
    $(this).addClass('active').parent().siblings().find('.pt-wrp').removeClass('active');
  })

  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992",
    onePage: true,
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#header-sticky").removeClass("sticky-bar");
    } else {
      $("#header-sticky").addClass("sticky-bar");
    }
  });


// One Page Nav
var top_offset = $('.header-area').height() - 0;
 	$('.main-menu nav ul').onePageNav({
   	currentClass: 'active',
   	scrollOffset: top_offset,
});
	
	// scrollToTop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

		$(window).load(function() {
        $('#nivoslider').nivoSlider();
    });    

  /*---------------------
        Circular Bars - Knob
     --------------------- */

  if (typeof ($.fn.knob) != 'undefined') {
    $('.knob').each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function () {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function () {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }


  $('.popup-img').magnificPopup({
    type: 'image'
  });

  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  $('.testimonail-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
	
	

  $('.brand-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
	
	
	 // :: Testimonial Slides Active Code
    if ($.fn.owlCarousel) {
        var testimonialSlider = $('.client-feedback-slides');
        testimonialSlider.owlCarousel({
            items: 5,
            margin:5,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 5000,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1700: {
                    items: 5
                }
            }
        })
    }
	
	
	
	/*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            responsive: {
                0 : {
                    items: 2
                },

                550 : {
                    items: 3
                },

                992 : {
                    items: 4
                },

                1200 : {
                    items: 5
                }
            }
        });
    }


})(jQuery);