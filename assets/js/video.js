$(function(){

	// 操作対象のvideoを指定
	var video = document.getElementById('bgvideo');	

	$.fn.videocontrol = function(options){
		var target = this;

		options = $.extend({
			movieWidth: targetW,
			movieHeight: targetH,
		    seekbar : true,
		    control : true,
		    chapter : false,
		    chapterTarget : '#chapter',
		    chapterTimes: [0],
		    ended: true
		}, options);

 
		//---------------------------------------------------------
		// 動画のサイズを全画面にする
		//---------------------------------------------------------

		var targetW = options.movieWidth,
			targetH = options.movieHeight;

		fixSize(targetW,targetH,target);

		$(window).resize(function(){
			fixSize(targetW,targetH,target);
		});

		function fixSize(w,h,targetWrap){

			var $targetVideo = $(targetWrap).children('#bgvideo'),
				winW	= $(window).width(),
				winH	= $(window).height(),
				scale	= Math.max(winW/targetW,winH/targetH),
				fixW	= (targetW*scale)+10,
				fixH	= (targetH*scale)+10;

			$(targetWrap).css({ width: winW, height: winH });
			$('#ended').css({ width: winW, height: winH });

			$targetVideo.css({
				position: 'absolute',
				top: '50%',
				left: '50%',
				'margin-top': -(fixH/2),
				'margin-left': -(fixW/2),
				width: fixW,
				height: fixH
			});
		}


		//---------------------------------------------------------
		// 要素の追加
		//---------------------------------------------------------

		// シークバーがtrueだったら要素を追加
		if(options.seekbar){
			target.append('<div id="seekbar"></div>');
			$('#seekbar').wrapInner('<div id="currenttime">');

			// 再生中はリアルタイムに処理を実行
			video.addEventListener("timeupdate",seekbar,false);
		}

		// ビデオコントロールがtrueだったら要素を追加
		if(options.control){
			target.append('<div id="control"></div>');
			$('#control')
			.append('<div id="panel">VIDEO CONTROL</div>')
			.append('<div id="playcontrol" class="stop"></div>')
			.append('<div id="volumecontrol" class="volumeon"></div>');
			
			controller();
		}

		// チャプターがtrueだったら再生用のアイコンを設置
		if(options.chapter){
			video.addEventListener("loadedmetadata",chapterSet,false);
		}

		// endedがtrueだったら再生終了後にエンド画面を出す
		if(options.ended){
			video.addEventListener("ended",ended,false);
		}


		//---------------------------------------------------------
		// チャプターの設定
		//---------------------------------------------------------

		function chapterSet(){

			var chapters = options.chapterTimes;

			$.each(chapters, function(i,value) {
				var num = i+1;	// 1からスタート
				var fullTime = video.duration;	// 動画全体の時間
				var chapterPos = (value/fullTime)*100;	// 全体に対する各チャプターの位置(%)

				$(options.chapterTarget).children('li:nth-child('+num+')').addClass('chapter'+num);
				$(options.chapterTarget).children('.chapter'+num).css({
					left: chapterPos+'%'
				})
				.wrapInner('<div class="caption">')
				.append('<span></span>');

				// アイコンをクリックすると再生位置を変更
				$('.chapter'+num+' span').click(function(){
					video.currentTime = value;
				});
			});
		}


		//---------------------------------------------------------
		// シークバーの設定
		//---------------------------------------------------------
		
		function seekbar(){
			var fullTime = video.duration;			// 動画全体の時間
			var nowTime = video.currentTime;		// 現在の再生時間
			var setPos = (nowTime/fullTime)*100;	// 全体に対する現在の位置

			$('#currenttime').css({'width':setPos+'%'});
		}


		//---------------------------------------------------------
		// 動画再生完了後のエンド画面の設定
		//---------------------------------------------------------
	
		function ended(){

			$('#ended').css({
				'text-indent':0,
				'z-index':50
			});
			setTimeout(function(){$('#ended').animate({opacity:1},400); },500);

			// 最初から再生
			$('#replay').click(function(){
				$('#ended').animate({opacity:0},400).css({'text-indent':'100%','z-index':1});
				video.currentTime = 0;
				video.play();
			});
		}


		//---------------------------------------------------------
		// コントローラーの設定
		//---------------------------------------------------------

		function controller(){
			// 動画再生のコントロール
			$('#playcontrol').click(function(){
				if($(this).hasClass('play')){
					// 再生
					video.play();
					$(this).removeClass().addClass('stop');
				}else{
					// 一次停止
					video.pause();
					$(this).removeClass().addClass('play');
				}
			});
			
			// 音量のコントロール
			$('#volumecontrol').click(function(){
				if($(this).hasClass('volumeon')){
					// ミュート
					video.muted = video.muted ? false : true;
					$(this).removeClass().addClass('mute');
				}else{
					// ミュート解除
					video.muted = video.muted ? false : false;
					$(this).removeClass().addClass('volumeon');
				}
			});
		}

	};

});