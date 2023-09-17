$( document ).ready(function() {
  $('body').velocity({ opacity: 1 }, 2400);
  $('#intro0').velocity({ opacity: 1 }, 1200);
  $('#intro1').velocity({ opacity: 1 }, 2200);
  $('#intro2').velocity({ opacity: 1 }, 3200);
  $('#intro3').velocity({ opacity: 1 }, 4200);
  $('.intro-img').velocity({ opacity: 1 }, 4200);
  var i = 0,
      j = 0;
  while(i<=5) { $('.other-work').eq(i).velocity({ opacity: 1 }, 600); i++; }
  while(j<=2) { $('.character').eq(j).velocity({ opacity: 1 }, 600); j++; }
});
