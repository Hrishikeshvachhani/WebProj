
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(6000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});



/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    

 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#CareerOption').parallax("100%", 0.1);
    $('#doubt').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.1);
  }
  initParallax();

$('ul.nav').find('a').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-CareerOption").owlCarousel({
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });
  $(document).ready(function() {
    $("#owl-about").owlCarousel({
      autoPlay: 3000,
      items : 8,
      itemsDesktop : [1000,5],
      itemsDesktopSmall : [900,3],
      itemsTablet: [600,2],
      itemsTabletSmall: [900,3],
      itemsMobile : false
    });
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

