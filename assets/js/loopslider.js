$(function(){
    $('#loopslider01').each(function(){
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap01"></div>');
        var listWidth = $('#loopslider_wrap01').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap01').children('ul').children('li').length;
        var loopWidth = (listWidth)*(listCount);
        $('#loopslider_wrap01').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 2),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });
        $('#loopslider_wrap01 ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();
        function loopsliderPosition(){
            $('#loopslider_wrap01').css({left:'0'});
            $('#loopslider_wrap01').stop().animate({left:'-' + (loopWidth) + 'px'},55000,'linear');
            setTimeout(function(){
                loopsliderPosition();
            },55000);
        };
        $('#loopslider_wrap01 ul').clone().appendTo('#loopslider_wrap01');
    });
});


$(function(){
    $('#loopslider02').each(function(){
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap02"></div>');
        var listWidth = $('#loopslider_wrap02').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap02').children('ul').children('li').length;
        var loopWidth = (listWidth)*(listCount);
        $('#loopslider_wrap02').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 2),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });
        $('#loopslider_wrap02 ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();
        function loopsliderPosition(){
            $('#loopslider_wrap02').css({left:'0'});
            $('#loopslider_wrap02').stop().animate({left:'-' + (loopWidth) + 'px'},55000,'linear');
            setTimeout(function(){
                loopsliderPosition();
            },55000);
        };
        $('#loopslider_wrap02 ul').clone().appendTo('#loopslider_wrap02');
    });
});


$(function(){
    $('#loopslider03').each(function(){
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap03"></div>');
        var listWidth = $('#loopslider_wrap03').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap03').children('ul').children('li').length;
        var loopWidth = (listWidth)*(listCount);
        $('#loopslider_wrap03').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 2),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });
        $('#loopslider_wrap03 ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();
        function loopsliderPosition(){
            $('#loopslider_wrap03').css({left:'0'});
            $('#loopslider_wrap03').stop().animate({left:'-' + (loopWidth) + 'px'},55000,'linear');
            setTimeout(function(){
                loopsliderPosition();
            },55000);
        };
        $('#loopslider_wrap03 ul').clone().appendTo('#loopslider_wrap03');
    });
});


//$(function(){
//	$('#loopslider02').on({
//		/* フリック開始時 */
//		'touchstart': function(e) {
//				this.touchX = event.changedTouches[0].pageX;
//				this.slideX = $(this).position().left;
//		},
//		/* フリック中 */
//		'touchmove': function(e) {
//				e.preventDefault();
//				this.slideX = this.slideX - (this.touchX - event.changedTouches[0].pageX );
//				$(this).css({left:this.slideX});
//				this.accel = (event.changedTouches[0].pageX - this.touchX) * 5;
//				this.touchX = event.changedTouches[0].pageX;
//		},
//		/* フリック終了 */
//				'touchend': function(e) {
//				this.slideX += this.accel
//				$(this).animate({left : this.slideX },200,'linear');
//				this.accel = 0;
//				if (this.slideX > 0) {
//					 this.slideX = 0;
//					 $(this).animate({left:"0px"},500);
//				}
//				if (this.slideX < -720) {
//					 this.slideX = -720;
//					 $(this).animate({left:"-600px"},500);
//				}
//		}
//	});
//});




















