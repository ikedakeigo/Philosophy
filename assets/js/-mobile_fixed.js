$(function(){
  "use strict";
  var state = false;
  var scrollpos;
  console.log('OK1');

  //$('html').hasClass('with-featherlight', function(){
  $('.box-content a' || 'span.featherlight-close-icon.featherlight-close' || 'div.featherlight-inner').on('click', function () {
    console.log('OK2');
    if(state === false) {
      scrollpos = $(window).scrollTop();
      $('html').addClass('fixed').css({'top': -scrollpos});
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      state = false;
    }
  });
    
});