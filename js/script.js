$(document).ready(function() {
  $('name').click(function(e) {
    if (
      $(this)
        .parent()
        .hasClass('active')
    ) {
      $(this)
        .parent()
        .transition(
          {
            perspective: '500px',
            rotateX: '-20deg'
          },
          function() {
            $(this).css('z-index', 1);
            $(this).removeClass('active');
          }
        );
    } else {
      $('.active').css('z-index', 1);
      $('.active').transition(
        {
          perspective: '500px',
          rotateX: '-20deg'
        },
        function() {
          $('.active').removeClass('active');
        }
      );

      $(this)
        .parent()
        .css('z-index', 999);
      $(this)
        .parent()
        .transition(
          {
            perspective: '0px',
            rotateX: '0deg'
          },
          function() {
            $(this).addClass('active');
          }
        );
    }
  });

  $('card li:last-child').click(function(e) {
    $(this)
      .parent()
      .parent()
      .toggleClass('max', 400);
  });
});
