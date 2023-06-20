

/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets
});

if ($.fn.owlCarousel) {
  $(".app_screenshots_slides").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 800,
    margin: 30,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });
  $(".app_screenshots_slidess").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 800,
    margin: 30,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
}



/* HTML document is loaded. DOM is ready.
-------------------------------------------*/

$(document).ready(function () {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#blog').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

  $(function () {
    $('.custom-navbar a, #home a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });



  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({mobile: false}).init();


});


const name = ["Shubham Shinde", "Kaizen"];
let index = 0;
let typed = document.getElementById("typed");

function type() {
  let currentName = name[index % name.length];
  let text = "";
  let i = 0;

  function typing() {
    if (i < currentName.length) {
      text += currentName.charAt(i);
      typed.innerHTML = text;
      i++;
      setTimeout(typing, 150);
    } else {
      setTimeout(backspace, 1500);
    }
  }

  function backspace() {
    if (i > 0) {
      text = currentName.substring(0, i - 1);
      typed.innerHTML = text;
      i--;
      setTimeout(backspace, 100);
    } else {
      index++;
      setTimeout(type, 500);
    }
  }

  typing();
}

type();







