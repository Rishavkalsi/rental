
$(function () {
    $('a[href*=\\#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 300);
    });
 });
$('.menu-toggle').click(function(){
   $(".navigation").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});
$(".navigation, .nav-item").click(function() {
   $(".navigation").toggleClass("mobile-nav");
});
$('.navigation-data').click(function (evt) {
    evt.stopPropagation();
});

$('.cyber-testimony-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    dots:true,
    items:1,
    smartSpeed: 800,
});
$('.property_slider').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    dots:true,
    smartSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        557:{
            items:2
        },
        991:{
            items:3
        },
    }
    });
    $('.app_slider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        smartSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            357:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });