/*-----------------------------------------------------------------------------------

 	Script - All Custom frontend jQuery scripts & functions
 
-----------------------------------------------------------------------------------*/
setTimeout(function() { jQuery("body").addClass("loading"); },200); // Start loading animation


jQuery(window).load(function($) {		
	
	splitSection();
	jQuery(window).resize(function() {
		splitSection();
	});
	
	  
	
	/*---------------------------------------------- 
			H I D E   P A G E   L O A D E R  + S M O O T H   S H O W
	------------------------------------------------*/
	var openSection = window.location.hash.substr(1);
	var borderWidthHeight = parseInt(jQuery("#bodyborder-top").height());
	jQuery("#page-loader .page-loader-inner").delay(250).fadeIn(5, function(){
		jQuery("body").addClass("loading-end");
		jQuery("#page-loader .page-loader-inner").fadeOut(500, function(){
			if (openSection) { 
				jQuery('html,body').animate({ scrollTop: jQuery( "#"+openSection ).offset().top-jQuery("header").height()+80}, 10, 'easeInOutExpo'); 
			}	
		});
		jQuery("#page-loader").delay(800).animate({top:borderWidthHeight+'px',height:jQuery(window).height()-(borderWidthHeight*2)+'px'},10).slideUp(500, 'easeInOutExpo',function(){ jQuery("#page-loader").animate({top:'0',height:'100%'},10) });
	});
	
	
	
	/*---------------------------------------------- 
			 T R A N S I T I O N   (when leaving the page)
	------------------------------------------------*/
	jQuery(window).unload(function() { });		// work-around for browser back button
	jQuery('.transition').click(function(e) {
		href = jQuery(this).attr('href');
		if (href.charAt(0) !== '#') {
			smoothtransistion(href);
			return false;
		} else {
			return true;
		}
	});
	
	function smoothtransistion(url) {
		jQuery("#page-loader").slideDown(800, 'easeInOutExpo', function() {
			setTimeout(function() { window.location = url; }, 300);
		});
		setTimeout(function() { jQuery("body").removeClass("loading-end"); }, 500);
	}
	
	
		
	if( jQuery().isotope ) {
		
		/*---------------------------------------------- 
					  C A L L   I S O T O P E   
		------------------------------------------------*/	
		jQuery('.masonry').each(function(){
			var $container = jQuery(this);
			
			$container.imagesLoaded( function(){
				$container.isotope({
					itemSelector : '.masonry-item',
					transformsEnabled: true			// Important for videos
				});	
			});
		});
		
		
		/*---------------------------------------------- 
					 I S O T O P E : Filter
		------------------------------------------------*/
		jQuery('.filter li a').click(function(){
			
			var parentul = jQuery(this).parents('ul.filter').data('related-grid');
			jQuery(this).parents('ul.filter').find('li a').removeClass('active');
			jQuery(this).addClass('active');
			
			var selector = jQuery(this).attr('data-option-value');
			jQuery('#'+parentul).isotope({ filter: selector }, function(){ });
			
			return(false);
		});
		
		
		/*---------------------------------------------- 
					 I S O T O P E : reorganize
		------------------------------------------------*/
		function reorganizeIsotope() {
			jQuery('.masonry').each(function(){
				$container = jQuery(this);
				var maxitemwidth = $container.data('maxitemwidth');
				if (!maxitemwidth) { maxitemwidth = 370; }
				var containerwidth = Math.ceil((($container.width()+(parseInt($container.css('marginLeft'))*2)) / 120) * 100 - (parseInt($container.css('marginLeft'))*2));
				//alert(containerwidth);
				var itemmargin = parseInt($container.children('div').css('marginRight')) + parseInt($container.children('div').css('marginLeft'));
				var rows = Math.ceil(containerwidth/maxitemwidth);
				var marginperrow = (rows-1)*itemmargin;
				var newitemmargin = marginperrow / rows;
				var itemwidth = Math.floor((containerwidth/rows)-newitemmargin+1);
				//$container.css({ 'width': '110%' });
				$container.children('div').css({ 'width': itemwidth+'px' });
				if ($container.children('div').hasClass('isotope-item')) { $container.isotope( 'reLayout' ); }
			});
		}
		reorganizeIsotope();
			
		jQuery(window).resize(function() {
			reorganizeIsotope();
		});
		
		
	} /* END if isotope */
	
	
	
	/*---------------------------------------------- 
			 D R O P   D O W N   N A  V I   (Mobile) + SHARE CLICK
	------------------------------------------------*/
	jQuery('nav#main-nav ul').on("click", "li", function() {
		if (jQuery(window).width() < 1025) {
			if (jQuery(this).find("ul").length > 0) {
				if (jQuery(this).find("ul").css('visibility') == 'hidden') {
					jQuery(this).addClass("hovered");
					return false;	
				} else {
					jQuery(this).removeClass("hovered");
					return false;	
				}
			}
		}
		var href = jQuery(this).find('a').attr('href');
		if (href.charAt(0) !== '#') {
			smoothtransistion(href);
			return false;
		} else {
			hideResponsiveNav();
			return true;
		}
	});
	
	
	/*---------------------------------------------- 
					 O P E N   N A V 
	------------------------------------------------*/
	jQuery('header').on("click", ".open-nav", function() { 
		var hidden = jQuery('#main-nav').css('display');
		var borderWidthHeight = parseInt(jQuery("#page-content").css("padding-top"));
		var fullheight = jQuery(window).height()-(borderWidthHeight*2);
		
		if (hidden == 'block') {
			hideResponsiveNav();
		} else {
			jQuery('.open-nav span').toggleClass('is-clicked'); 
			jQuery('#main-nav').slideDown(700,'easeInOutExpo',function(){
				jQuery('#main-nav').addClass("nav-visible");
				var menuHeight = jQuery(".nav-inner").height();
				jQuery(".nav-inner").css({'max-height':menuHeight+'px'});
				if(menuHeight < fullheight) {
					var marginTop = parseInt((fullheight-menuHeight)/2);
				} else {
					var marginTop = 0;
				}
				jQuery(".nav-inner").animate({"marginTop": marginTop+'px', opacity: 1}, 700, 'easeInOutQuart');
			});
		}
		return false;
	});
	
	function hideResponsiveNav(){
		jQuery('.open-nav span').toggleClass('is-clicked'); 
		jQuery('#main-nav').removeClass("nav-visible");
		jQuery('.nav-inner').animate({marginTop: '0px', opacity: 0}, 700, 'easeInOutExpo', function(){ });
		jQuery("#main-nav").delay(100).slideUp(700,'easeInOutExpo');
		
	}
	
	
	
	/*---------------------------------------------- 
			S H A R E   C L I C K  (MOBILE)
	------------------------------------------------*/
	jQuery('body').on("click", ".show-share", function() {
		if (jQuery(window).width() < 1025) {
			if (parseInt(jQuery(this).siblings("ul").css('top')) < 0) {
				jQuery(this).parent("#social-share").addClass("hovered");
				return false;	
			} else {
				jQuery(this).parent("#social-share").removeClass("hovered");
				return false;	
			}
			return false;	
		}
		return false;
	});
		
	
	
	
	/*---------------------------------------------- 
				        T A B S 
	------------------------------------------------*/	
	jQuery(".tabs").each(function(i) {
		jQuery(this).find('.tab-content').removeClass('active');
		var rel = jQuery(this).find('.active').attr('href');
		jQuery(this).find('.'+rel).addClass('active');
	});
	
	jQuery(".tab-nav").on("click", "a", function() { 
		
		var parentdiv = jQuery(this).parent('li').parent('ul').parent('div');
		var rel = jQuery(this).attr('href');
		
		jQuery(parentdiv).find(".tab-nav a").removeClass("active");
		jQuery(this).addClass("active");
		
		jQuery(parentdiv).find(".tab-container .tab-content").hide().removeClass('active');
		jQuery(parentdiv).find(".tab-container ."+rel).fadeIn(500).addClass('active');
		
		return(false);
		
	});
	
	
	
	
	/*---------------------------------------------- 
			T O G G L E  &  A C C O R D I O N
	------------------------------------------------*/		
	jQuery(".toggle-item").each(function(i) {
		jQuery(this).find('.toggle-active').siblings('.toggle-inner').slideDown(300);							
	});
	
	jQuery(".toggle-item").on("click", ".toggle-title", function() { 
				
		var parentdiv = jQuery(this).parent('div').parent('div');
		var active = jQuery(this).parent('div').find('.toggle-inner').css('display');
		
		if (jQuery(parentdiv).attr('class') == 'accordion') {
			if (active !== 'none' ) { 
				jQuery(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
				jQuery(this).toggleClass('toggle-active');
			} else {
				jQuery(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
				jQuery(parentdiv).find('.toggle-item .toggle-title').removeClass('toggle-active');
				
				jQuery(this).toggleClass('toggle-active');
				jQuery(this).siblings('.toggle-inner').slideDown(300);
			}
		} else {
			jQuery(this).toggleClass('toggle-active');
			jQuery(this).siblings('.toggle-inner').slideToggle(300);
		}
		
		return(false);
	});
	
	
	
	
	/*---------------------------------------------- 
				 B A C K   T O P   T O P
	------------------------------------------------*/
	jQuery('#backtotop').click(function(){
		jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeInOutQuart');
		return false;						   
	});
	
	
	
	/*---------------------------------------------- 
			R E V O L U T I O N   S L I D E R
	------------------------------------------------*/
	if(jQuery().revolution) {
		jQuery('.rev-slider').revolution({
			delay:10000,
			startheight: 500,
			startwidth: 1200,
			hideTimerBar: "on",
			onHoverStop:"on",
			navigationType:"bullet",
			hideThumbs:0,					// Bullets always visible
			navigationHAlign:"right",
         	navigationVAlign:"center",
         	navigationHOffset:20,
         	navigationVOffset:0,
			navigationArrows:"none",
			fullWidth:"off",
			fullScreen:"on",
			fullScreenOffsetContainer: "#pseudo-header"
		});
	};
	
	
	/*---------------------------------------------- 
				   O W L   C A R O U S E L
	------------------------------------------------*/
	if(jQuery().owlCarousel) { 
	
		/* for all owlslider classes (single item) */
		jQuery(".owlslider").owlCarousel({
			autoPlay : false,
			stopOnHover : true,
			navigation: false,
			navigationText : false,
			slideSpeed : 800,			// speed for mouseslide/touchslide
			paginationSpeed : 800,	// speed for autoPlay/pagination bullets
			singleItem : true,
			autoHeight : true
		});
		
		/* for all owlcarousel classes (multiple items) */
		jQuery(".owlcarousel").owlCarousel({
			items : 4,
			itemsDesktop:false,
			itemsDesktopSmall:false,
			itemsTablet: [860,2],
			itemsMobile: [640,1],
			autoplay: false,
			autoHeight : true,
			navigationText : false,
			rewindNav: false
		});
		
		 jQuery(".carousel3").owlCarousel({
			autoPlay: 3000,
			items : 4,
			itemsTablet: [860,3],
			itemsMobile: [640,2],
			navigation : true,
			navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ]
});
		
	}
	
	
			
	/*---------------------------------------------- 
				   	 P A R A L L A X
	------------------------------------------------*/
	if(jQuery().parallax) { 
		jQuery('.parallax-section').parallax();
	}
	
	
	
	
	/*---------------------------------------------- 
				   	 V I D E O   B G
	------------------------------------------------*/
	if(jQuery().bgVideo) { 
		setTimeout(function() {
			jQuery('.videobg-section').bgVideo();
		}, 1000);
	}
	


	
	/*---------------------------------------------- 
				   F I T   V I D E O S
	------------------------------------------------*/
	if(jQuery().fitVids) { 
		jQuery("body").fitVids();
	}
	
	
	
	/*---------------------------------------------- 
		  R E S P O N S I V E   J P L A Y E R
	------------------------------------------------*/
	if(jQuery().jPlayer && jQuery('.jp-interface').length){
		jQuery('.jp-interface').each(function(){ 
			var playerwidth = jQuery(this).width();	
			var newwidth = playerwidth - 175;
			jQuery(this).find('.jp-progress-container').css({ width: newwidth+'px' });
		});
	}
	
	smoothShow();
		
});


jQuery( window ).scroll(function() {
	smoothShow();
});


// SMOOTH SHOW FUNCION FOR ELEMENTS THAT TAKE ACTION WHEN VISIBLE (counter & animations & skills, etc)
function smoothShow() {
	
	
	
	/*---------------------------------------------- 
				   	 B I G   L E T T E R
	------------------------------------------------*/
	jQuery('h1[data-bigletter],h2[data-bigletter],h3[data-bigletter],h4[data-bigletter],h5[data-bigletter],h6[data-bigletter]').each(function() {
		if (jQuery(window).width() > 700) {
			var visible = jQuery(this).visible(false);
			if (visible) {
				if (jQuery(this).hasClass( "visible" )) {} else { jQuery(this).addClass("visible"); }
			} else {
				jQuery(this).removeClass("visible");
			}
		} else {
				jQuery(this).addClass("visible");
		}
	});
	
	
	
	
	/*---------------------------------------------- 
				   	 C O U N T E R
	------------------------------------------------*/
	jQuery('.counter-value').each(function() {
		if (jQuery(window).width() > 700) {
			var visible = jQuery(this).visible(false);
			if (jQuery(this).hasClass( "anim" )) {} 
			else if (visible) {
				jQuery(this).addClass("anim");
				var from = parseInt(jQuery(this).attr('data-from'));
				var to = parseInt(jQuery(this).attr('data-to'));
				var speed = parseInt(jQuery(this).attr('data-speed'));
				jQuery(this).count(from, to, speed);
			}
		} else {
			var to = parseInt(jQuery(this).attr('data-to'));
			jQuery(this).html(to);
		}
	});
	
	
	
	
	/*---------------------------------------------- 
		 	G E N E R A L   A N I M A T I O N S
	------------------------------------------------*/
	jQuery('.sr-animation').each(function() {
		if (jQuery(window).width() > 700) {
			var visible = jQuery(this).visible(true);
			var delay = jQuery(this).attr("data-delay");
			if (!delay) { delay = 0; }
			if (jQuery(this).hasClass( "animated" )) {} 
			else if (visible) {
				jQuery(this).delay(delay).queue(function(){jQuery(this).addClass('animated')});
			}
		} else {
			jQuery(this).addClass('animated');	
		}
	});
	
	
	/*---------------------------------------------- 
		 	S K I L L   A N I M A T I O N
	------------------------------------------------*/
	jQuery('.skill').each(function() {
		var visible = jQuery(this).visible(true);
		var percent = jQuery(this).find('.skill-bar .skill-active ').attr('data-perc');
		if (jQuery(this).hasClass( "anim" )) {} 
		else if (visible) {
			var randomval = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
			jQuery(this).addClass("anim");
			jQuery(this).find('.skill-bar .skill-active ').animate({'width': percent+'%',}, 2000, 'easeInOutQuart', function(){
				jQuery(this).find('.tooltip').delay(randomval).animate({'top':'-25px','right':'-8px','opacity':1}, 500);	
			}).css('overflow', 'visible');
		}
	});
	
		
}


function splitSection() { 
	
	var borderWidthHeight = parseInt(jQuery("#bodyborder-top").height());
	
	/*---------------------------------------------- 
			S P L I T   S E C T I O N
	------------------------------------------------*/
	if (jQuery(".split-section").length > 0) {
		contentWidth =  jQuery(".wrapper").width();
		if(!contentWidth || contentWidth < 300) {
			contentWidth = 1080;
			if (jQuery(window).width() < 1281) { contentWidth = 900;  } else
			if (jQuery(window).width() < 1121) { contentWidth = 730; } else
			if (jQuery(window).width() < 861) { contentWidth = 280; }
		}
		contentThird =  Math.round(contentWidth/3);
		windowWidth =  jQuery(window).width()-(borderWidthHeight*2);
		difference = Math.round((windowWidth - contentWidth) /2);
		smallWidth = contentThird+difference+13;
		bigWidth = windowWidth-smallWidth;
		
		if (jQuery(window).width() < 861) { 
			jQuery(".split-onethird, .split-onethird .split-bg, .split-twothird, .split-twothird .split-bg").css({"width": "100%"});
		} else {
			jQuery(".split-onethird, .split-onethird .split-bg").css({"width": smallWidth+"px"});
			jQuery(".split-twothird, .split-twothird .split-bg").css({"width": bigWidth+"px"});
		}
		
		setTimeout(function() {
			jQuery(".split-section .vertical-center").each(function(index, element) { 
				var centerHeight =  jQuery(this).height();
				var padding =  parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-bottom'));
				var fullHeight = centerHeight+padding;
				var splitHeight =  jQuery(this).parents(".split-section").height();
				if (fullHeight < splitHeight && jQuery(window).width() > 861) {
					var margin = (splitHeight-fullHeight)/2;
					jQuery(this).css({"marginTop": margin+"px"});
				} else {
					jQuery(this).css({"marginTop": "0px"});
				}
			});
		},500);
	}
	
	
	if (jQuery(window).width() < 861) { 
		jQuery(".split-left, .split-right").each(function(index, element) {
			var thisHeight = jQuery(this).height();
			if (thisHeight < 50) {
				jQuery(this).css({"min-height": "300px"});
			} 
		});
	}
	
}


	if($.browser.msie){ $('body').addClass('msie'); }
	$('input[type=checkbox]').addClass('checkbox');
	$('input[type=radio]').addClass('radio');
	$('input[type=file]').addClass('file');
	$('[disabled=disabled]').addClass('disabled');
	$('table').find('tr:even').addClass('alt');
	$('table').find('tr:first-child').addClass('first');
	$('table').find('tr:last-child').addClass('last');
	$('ul').find('li:first-child').addClass('first');
	$('ul').find('li:last-child').addClass('last');
	$('hr').before('<div class="cB">&nbsp;</div>');
	$('[class*=col_]').not('input, label,dl,table,.tabs li').addClass('column').each(
	    function (i,o){
	      var div = document.createElement('div'); div.className="inner";
	      while (o.firstChild) div.appendChild(o.firstChild);
	      o.appendChild(div);
	    }
	  );
	 	$('[class*=box-link]').not('input, label,dl,table,.tabs li').each(
	    function (i,o){
	      var div = document.createElement('div'); div.className="box-link-inner";
	      while (o.firstChild) div.appendChild(o.firstChild);
	      o.appendChild(div);
	    }
	  );
	$('.main-body ul').not('.tabs,.noicon,[class*=col_],[class*=grid_]').addClass('list-icon').each(
	function(){
		$(this).find('li')
		.prepend('<i class="fa fa-angle-double-right"></i>');
	});
	
	$('ol li').each(
	    function (i,o){
	      var span = document.createElement('span'); span.className="ol-li";
	      while (o.firstChild) span.appendChild(o.firstChild);
	      o.appendChild(span);
	    }
	  );
/*---------------------------------------------- 
 yuga
------------------------------------------------*/
(function($){$(function(){$.yuga.selflink();$.yuga.rollover();$.yuga.externalLink()});$.yuga={Uri:function(path){var self=this;this.originalPath=path;this.absolutePath=(function(){var e=document.createElement('span');e.innerHTML='<a href="'+path+'" />';return e.firstChild.href})();var fields={'schema':2,'username':5,'password':6,'host':7,'path':9,'query':10,'fragment':11};var r=/^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);for(var field in fields){this[field]=r[fields[field]]}this.querys={};if(this.query){$.each(self.query.split('&'),function(){var a=this.split('=');if(a.length==2)self.querys[a[0]]=a[1]})}},selflink:function(options){var c=$.extend({selfLinkAreaSelector:'body',selfLinkClass:'current',parentsLinkClass:'parentsLink',postfix:'_cr',changeImgSelf:true,changeImgParents:true},options);$(c.selfLinkAreaSelector+((c.selfLinkAreaSelector)?' ':'')+'a[href]').each(function(){var href=new $.yuga.Uri(this.getAttribute('href'));var setImgFlg=false;if((href.absolutePath==location.href)&&!href.fragment){$(this).addClass(c.selfLinkClass);setImgFlg=c.changeImgSelf}else if(0<=location.href.search(href.absolutePath)){$(this).not('.first a').addClass(c.parentsLinkClass);setImgFlg=c.changeImgParents}})},rollover:function(options){var c=$.extend({hoverSelector:'img.btn, .btn img',groupSelector:'.btngroup',postfix:'_on'},options);var rolloverImgs=$(c.hoverSelector).filter(isNotCurrent);rolloverImgs.each(function(){this.originalSrc=$(this).attr('src');this.rolloverSrc=this.originalSrc.replace(new RegExp('('+c.postfix+')?(\.gif|\.jpg|\.png)$'),c.postfix+"$2");this.rolloverImg=new Image;this.rolloverImg.src=this.rolloverSrc});var groupingImgs=$(c.groupSelector).find('img').filter(isRolloverImg);rolloverImgs.not(groupingImgs).hover(function(){$(this).attr('src',this.rolloverSrc)},function(){$(this).attr('src',this.originalSrc)});$(c.groupSelector).hover(function(){$(this).find('img').filter(isRolloverImg).each(function(){$(this).attr('src',this.rolloverSrc)})},function(){$(this).find('img').filter(isRolloverImg).each(function(){$(this).attr('src',this.originalSrc)})});function isNotCurrent(i){return Boolean(!this.currentSrc)}function isRolloverImg(i){return Boolean(this.rolloverSrc)}},externalLink:function(options){var c=$.extend({windowOpen:true,externalClass:'externalLink'},options);var uri=new $.yuga.Uri(encodeURI(location.href));var e=$('a[href^="http://"], a[href^="https://"], a.exLink, a[href$=".pdf"]').not('a.inLink,a[href^="http://www.youtube.com/"],a[href^="https://www.youtube.com/"],a[href^="'+uri.schema+'://'+uri.host+'/'+'"]').not(c.notWindowURL);if(c.windowOpen){e.click(function(){window.open(this.href,'_blank');return false})}if(c)e.not(':has(img), :has(button), .twitter-share-button, a[href$=".pdf"], .iframe a,a.noicon,.noicon a, #nav .menu-item a').append($('<i class="small mL4 mR4 ffs10 fa fa-external-link fa-arrow-up-right-from-square"></i>'));e.addClass(c.externalClass);$('a[href$=".pdf"]').not(':has(img)').prepend($('<i class="fa fa-file-pdf-o small mR5"></i>'));$('a[href$=".xls"]').not(':has(img)').prepend($('<i class="fa fa-file-excel-o small mR5"></i>'));$('a[href$=".xlsx"]').not(':has(img)').prepend($('<i class="fa fa-file-excel-o small mR5"></i>'));$('a[href$=".doc"]').not(':has(img)').prepend($('<i class="fa fa-file-word-o small mR5"></i>'));$('a[href$=".docx"]').not(':has(img)').prepend($('<i class="fa fa-file-word-o small mR5"></i>'));$('a[href$=".zip"]').not(':has(img)').prepend($('<i class="fa fa-file-archive-o small mR5"></i>'));$('a[href$=".ppt"]').not(':has(img)').prepend($('<i class="fa fa-file-powerpoint-o small mR5"></i>'));$('a[href$=".pptx"]').not(':has(img)').prepend($('<i class="fa fa-file-powerpoint-o small mR5"></i>'))}}})(jQuery);


/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
$(function(){
$.backstretch([
      "http://www.interliteracy.com/base/uploads/main_office1.jpg"
  	]
);
});

/*!--------------------------------------------------------------------------*
 *  
 *  jquery.heightLine.js
 *  
 *  MIT-style license. 
 *  
 *  2013 Kazuma Nishihata 
 *  http://www.to-r.net
 *  
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.heightLine = function(){
		var target = this,fontSizeChangeTimer,windowResizeId= Math.random();
		var heightLineObj = {
			op : {
				"maxWidth" : 10000,
				"minWidth" : 0,
				"fontSizeCheck" : false
			},
			setOption : function(op){
				this.op = $.extend(this.op,op);
			},
			destroy : function(){
				target.css("height","");
			},
			create : function(op){
				var self = this,
					maxHeight = 0,
					windowWidth = $(window).width();
				self.setOption(op);
				if( windowWidth<=self.op.maxWidth && windowWidth>=self.op.minWidth ){
					target.each(function(){
						if($(this).outerHeight()>maxHeight){
							maxHeight = $(this).outerHeight();
						}
					}).each(function(){
						var height = maxHeight
								   - parseInt($(this).css("padding-top"))
								   - parseInt($(this).css("padding-bottom"));
						$(this).height(height);
					});
				}
			},
			refresh : function(op){
				this.destroy();
				this.create(op);
			},
			removeEvent :function(){
				$(window).off("resize."+windowResizeId);
				target.off("destroy refresh");
				clearInterval(fontSizeChangeTimer);
			}
		}
		if(typeof arguments[0] === "string" && arguments[0] === "destroy"){
			target.trigger("destroy");
		}else if(typeof arguments[0] === "string" && arguments[0] === "refresh"){
			target.trigger("refresh");
		}else{
			heightLineObj["create"](arguments[0]);
			
			$(window).on("resize."+windowResizeId,function(){
				heightLineObj["refresh"]();
			});

			target.on("destroy",function(){
				heightLineObj["removeEvent"]();
				heightLineObj["destroy"]();
			}).on("refresh",function(){
				heightLineObj["refresh"]();
			});

			if(heightLineObj.op.fontSizeCheck){
				
				if($("#fontSizeChange").length<=0){
					var fontSizeChange = $("<span id='fontSizeChange'></span>").css({
						width:0,
						height:"1em",
						position:"absolute",
						left:0,
						top:0
					}).appendTo("body");
				}
				var defaultFontSize = $("#fontSizeChange").height();
				fontSizeChangeTimer = setInterval(function(){
					if(defaultFontSize != $("#fontSizeChange").height()){
						heightLineObj["refresh"]();
					}
				},100);
			}
		}
		return target;
	}
})(jQuery);

$(window).load(function () {
$(".hlnav").heightLine({
});
$(".hl").heightLine({
});
$(".hl1").heightLine({
});
$(".hl2").heightLine({
});
$(".hl3").heightLine({
});
$(".hl4").heightLine({
});
$(".lg-hl").heightLine({
	minWidth:768
});
$(".lg-hl1").heightLine({
	minWidth:768
});
$(".lg-hl2").heightLine({
	minWidth:768
});
$(".md-hl").heightLine({
	minWidth:480
});
$(".md-hl1").heightLine({
	minWidth:480
});
$(".md-hl2").heightLine({
	minWidth:480
});
$(".hl-box div").heightLine({
	minWidth:768
});
$(".hl-box1 div").heightLine({
	minWidth:768
});
$(".hl-box2 div").heightLine({
	minWidth:768
});
});

/*---------------------------------
	CSS Browser Selector v0.4.0 (Nov 02, 2010)
	Rafael Lima (http://rafael.adm.br)
	http://rafael.adm.br/css_browser_selector
	License: http://creativecommons.org/licenses/by/2.5/
	Contributors: http://rafael.adm.br/css_browser_selector#contributors
-----------------------------------*/
		function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
		
		
$('a.gallery,div.gallery a').fancybox({
	loop:false,
		helpers : {
    	title : {
    type: 'outside'
    	}}});

$('div.gallery').each(function(i){
		$(this).find('a').attr('rel', 'gallery'+i)
	});

	  