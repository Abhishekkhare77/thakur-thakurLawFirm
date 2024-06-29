$(document).ready(function () {
    "use strict";

    // Load background image
    var bgi = $("[data-background]");
	console.log(bgi)
    bgi.length > 0 && bgi.each(function() {
    	var e = $(this),
    	t = e.attr('data-background');
    	e.css({'background-image': 'url(' + t + ')'});
    });


    // Banner Slider

    var slides = $(".full-screen"),
        b = slides.find('.item');
    b.each(function () {
        var e = $(this),
            ocImg = e.find('img').attr('src');
        e.css({ 'background-image': 'url(' + ocImg + ')' });
    });

    slides.owlCarousel({
        // stagePadding: 50,
        loop: true,
        // margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.banner .custom-nav',
        items: 1,
    });





    /* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
  
        fixedContentPos: false
      });
  
      $('.grid, .popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '';
          }
        }
      });
    

});
