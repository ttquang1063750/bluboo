window.onload = function() {

  new WOW().init();

  var $btnMenu = $('#btn-menu');
  var $navigation = $("#navigation");

  $btnMenu.click(function(event){
    event.stopPropagation();
    $navigation.slideToggle("fast");
  });
  $navigation.on("click", function (event) {
    event.stopPropagation();
  });

  $(document).on("click", function () {
    $navigation.hide();
  });


  //Slider for picture in promotion in home page
  $('.slider-for-promotion').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-promotion'
  });
  $('.slider-nav-promotion').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-promotion',
    focusOnSelect: true
  });


  //Slider for picture in product info
  $('.slider-for').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows: true,
    vertical: true,
    prevArrow: $('.picture-nav-prev-arrow'),
    nextArrow: $('.picture-nav-next-arrow'),
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        vertical: false
      }

    }]
  });



  //Slider for video in product page
  $('.slider-for-video').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-video'
  });
  $('.slider-nav-video').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-video',
    focusOnSelect: true
  });


  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });
}