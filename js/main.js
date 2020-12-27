(function($) {
    "use strict";

    $(document).ready(function($) {

        // ===== Scroll to Top ==== 
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 800) { // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200); // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() { // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        });


        $(".btn-devis").click(function() {
            $("div#seo").removeClass("seo");
            $("div#seo h5, div#seo h2, div#seo ul li").removeAttr('style');
            $('html,body').animate({
                    scrollTop: $("#devis").offset().top
                },
                'slow');
        });

        $(".seo-details").click(function() {
            $("div#seo").addClass("seo");
            $("div#seo h5, div#seo h2, div#seo ul li").css("color", "white");
            $('html,body').animate({
                    scrollTop: $("#seo").offset().top
                },
                'slow');
        });

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        //Fixed nav on scroll
        $(document).on('scroll', function(e) {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > $('#navbar-1').height()) {
                $('#navbar-1').addClass('fixed-top');
                $('#navbar-1').removeClass('navbar-1');
            } else {
                $('#navbar-1').addClass('navbar-1');
                $('#navbar-1').removeClass('fixed-top');
            }
        });

        //Portfolio Popup
        $('.magnific-popup').magnificPopup({
            type: 'image'
        });

        //Video popup
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });


        //Testimonial
        $('.section-testimonial-cont').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,

                }
            }
        });

    });


    $(window).on('load', function() {

        //Portfolio container			
        var $container = $('.portfolioContainer .row');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').on('click', function() {
            $('.portfolioFilter a').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

        //WOW Js
        new WOW().init();

    });


}(jQuery));