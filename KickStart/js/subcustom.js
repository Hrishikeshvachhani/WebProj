
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
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

    function drop() {
      // body...
    $('.dropdown-toggle').dropdown();
    $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });
  }
  drop();

$( ".acom1" ).mouseover(function() {
  $(".vcom").addClass("hidden");
  $(".com1").removeClass("hidden");
});    
$( ".acom1" ).mouseout(function() {
  $(".vcom").removeClass("hidden");
  $(".com1").addClass("hidden");
}); 
$( ".acom2" ).mouseover(function() {
  $(".vcom").addClass("hidden");
  $(".com2").removeClass("hidden");
});    
$( ".acom2" ).mouseout(function() {
  $(".vcom").removeClass("hidden");
  $(".com2").addClass("hidden");
}); 
 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#CompEng').parallax("100%", 0.3);
    $('#MechEng').parallax("100%", 0.3);

  }
  initParallax();

function scrollmenu(){ 
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
}
scrollmenu();
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

