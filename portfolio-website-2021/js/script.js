/* Return To Top */

jQuery(document).ready(function($) {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#return-to-top').fadeIn('slow');
    } else {
      $('#return-to-top').fadeOut('slow');
    }
  });
  $('#return-to-top').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});

/* Pop up image */

$(function() {
  var moveLeft = 20;
  var moveDown = 10;

  $('span.trigger').hover(function(e) {
    $('div#berkeimage-pop-up').show();
  }, function() {
    $('div#berkeimage-pop-up').hide();
  });

  $('span.trigger').mousemove(function(e) {
    $("div#berkeimage-pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});

/* Font Awesome Fix */

FontAwesomeConfig = {searchPseudoElements: true}

/* Lazy Load Youtube */

window.addEventListener('load', ytdefer_setup);
