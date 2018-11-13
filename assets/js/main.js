window.onload = function () {

  // const wrapperEle = document.getElementsByClassName("header-container")[0];
  //
  // const titleOpacity = () => {
  //
  //   if ($(this).scrollTop() > 50) {
  //     console.log("top");
  //   }
  //   if ($(this).scrollTop() < 50) {
  //     console.log("down");
  //   }
  //
  // }
  //
  // document.body.addEventListener("scroll", titleOpacity)
  //
  // console.log(wrapperEle);


  // Fade in quotes

  //Cache reference to window and animation items
  var $animation_elements = $('.to-fade-up');
  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);

  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('faded-up');
      } else {
        $element.removeClass('faded-up');
      }
    });
  }
}

  // var animateHTML = function() {
  //   var elems;
  //   var windowHeight;
  //   function init() {
  //     elems = document.querySelectorAll('.hidden');
  //     windowHeight = window.innerHeight;
  //     addEventHandlers();
  //     checkPosition();
  //   }
  //   function addEventHandlers() {
  //     window.addEventListener('scroll', checkPosition);
  //     window.addEventListener('resize', init);
  //   }
  //   function checkPosition() {
  //     console.log("scrolling");
  //     for (var i = 0; i < elems.length; i++) {
  //       var positionFromTop = elems[i].getBoundingClientRect().top;
  //       if (positionFromTop - windowHeight <= 0) {
  //         elems[i].className = elems[i].className.replace(
  //           'hidden',
  //           'fade-in-element'
  //         );
  //       }
  //     }
  //   }
  //   return {
  //     init: init
  //   };
  // };
  // animateHTML().init();
