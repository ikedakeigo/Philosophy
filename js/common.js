$(function(){
  $('.animation').css("opacity","0");
    $(window).scroll(function (){
      $('.animation').each(function(){
        var ef = $(this).offset().top;
        var sc = $(window).scrollTop();
        var wh = $(window).height();
        if (sc > ef - wh + 100){
        $(this).animate({
        "opacity": "1"
        }, 1000);
      }
    });
  });
});

$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });
 
  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});

function init() {
  // スクロールして何ピクセルでアニメーションさせるか
  var px_change   = 150;

  // スクロールのイベントハンドラを登録
  window.addEventListener('scroll', function(e){
      // 変化するポイントまでスクロールしたらクラスを追加
      if ( $(window).scrollTop() > px_change ) {
          $(".navbar").addClass("smaller");

      // 変化するポイント以前であればクラスを削除
      } else if ( $(".navbar").hasClass("smaller") ) {
          $(".navbar").removeClass("smaller");
      }
  });
}
window.onload = init();

$(window).load(function(){
  var biggestHeight = "0";
    $("#performance *").each(function(){
      if ($(this).outerHeight(true) > biggestHeight ) {
        biggestHeight = $(this).outerHeight(true) 
      }
    });
  $("#performance").outerHeight(biggestHeight);
})