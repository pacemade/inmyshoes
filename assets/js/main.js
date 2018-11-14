window.onload = function () {

  // Fade Up

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
      // } else {
      //   $element.removeClass('faded-up');
      }
    });
  }


// page transition

  $("a").on("click", function(event) {
    console.log(event);
    event.preventDefault();

    const href = $(this).attr("href");

    console.log("1st" + href);

    window.history.pushState(null, null, href);

    // $(".card a").removeClass("active")
    // $(this).addClass('active')

    $.ajax({
      url: href,
      success: function (data) {
        $("main").fadeOut(250, function () {
          const newPage = $(data).filter("main").html()

          $("main").html(newPage)

          $("main").fadeIn(250)
          console.log("2nd" + href);
        })
      }
    })


  });

}
