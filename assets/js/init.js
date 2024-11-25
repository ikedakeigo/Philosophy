
jQuery(document).ready(function($){

	if($.browser.msie){ $('body').addClass('msie'); }
	$('input[type=checkbox]').addClass('checkbox');
	$('input[type=radio]').addClass('radio');
	$('input[type=file]').addClass('file');
	$('[disabled=disabled]').addClass('disabled');
	$('table').find('tr:even').addClass('alt');
	$('ul').find('li:even').addClass('alt');
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


	/*---------------------------------
		MENU Dropdowns
	-----------------------------------*/

	$('.menu').each(function(){
			
		// find menu items with children.
		$(this).find('li').has('ul').addClass('has-menu')
		.find('a:first').append('<span class="arrow">&nbsp;</span>');
	});
	
	$('ul.menu li').hover(function(){
		$(this).find('ul:first').stop(true, true).fadeIn('fast');
		$(this).addClass('hover');
	},
	function(){
		$(this).find('ul').stop(true, true).fadeOut('slow');
		$(this).removeClass('hover');
		
	});
$("#header .menu").hover(
	function () {//---マウスオーバーの処理
		$('.bg').fadeIn('slow');
	},//---カンマを忘れずに
	function () {//---マウスアウトの処理
		$('.bg').fadeOut('slow');
	}
);
	
	
	/*---------------------------------
		HTML5 Placeholder Support
	-----------------------------------*/
	$('input[placeholder], textarea[placeholder]').placeholder();
	

	/*---------------------------------
		Tabs
	-----------------------------------*/
	// tab setup
	$('.tab-content').addClass('clearfix').not(':first').hide();
	$('ul.tabs').each(function(){
		var current = $(this).find('li.current');
		if(current.length < 1) { $(this).find('li:first').addClass('current'); }
		current = $(this).find('li.current a').attr('href');
		$(current).show();
	});
	
	// tab click
	$('ul.tabs a[href^="#"]').live('click', function(e){
		e.preventDefault();
		var tabs = $(this).parents('ul.tabs').find('li');
		var tab_next = $(this).attr('href');
		var tab_current = tabs.filter('.current').find('a').attr('href');
		$(tab_current).hide();
		tabs.removeClass('current');
		$(this).parent().addClass('current');
		$(tab_next).show();
		history.pushState(null, null, encodeURI(window.location.search) + $(this).attr('href'));
		return false;
	});
	
 	// tab hashtag identification and auto-focus
    	var wantedTag = window.location.hash;
    	if (wantedTag != "")
    	{
        	var allTabs = $("ul.tabs a[href^=" + wantedTag + "]").parents('ul.tabs').find('li');
        	var defaultTab = allTabs.filter('.current').find('a').attr('href');
        	$(defaultTab).hide();
        	allTabs.removeClass('current');
        	$("ul.tabs a[href^=" + wantedTag + "]").parent().addClass('current');
        	$("#" + wantedTag.replace('#','')).show();
    	}


	/*---------------------------------
		Image Caption
	-----------------------------------*/
	$('img.caption').each(function(){
		$(this).wrap('<div class="caption">');
		$(this).parents('div.caption')
			.attr('class', 'caption '+$(this).attr('class'));
		if($(this).attr('title')){ 
			$(this).parents('div.caption')
			.append('<span>'+$(this).attr('title')+'</span>');
		}
	});
	
	/*---------------------------------
		Notice
	-----------------------------------*/
	$('.notice a.close').live('click', function(e){
		e.preventDefault();
		var notice = $(this).parents('.notice');
		$(this).hide();
		notice.fadeOut('slow');
	});
	
	/*---------------------------------
		ToolTip - TipTip
	-----------------------------------*/	
	
	// Standard tooltip
	$('.tooltip, .tooltip-top, .tooltip-bottom, .tooltip-right, .tooltip-left').each(function(){
		// variables 
		var tpos = 'top';
		var content = $(this).attr('title');
		var dataContent = $(this).attr('data-content');
		var keepAlive = false;
		var action = 'hover';
		
		// position
		if($(this).hasClass('tooltip-top')) 	{ tpos = 'top'; 	}
		if($(this).hasClass('tooltip-right')) 	{ tpos = 'right'; 	}
		if($(this).hasClass('tooltip-bottom')) 	{ tpos = 'bottom'; 	}
		if($(this).hasClass('tooltip-left')) 	{ tpos = 'left'; 	}
		
		// content
		$('.tooltip-content').removeClass('hide').wrap('<div class="hide"></div>');
		if(dataContent) { content = $(dataContent).html(); keepAlive = true; }
		
		// action (hover or click) defaults to hover
		if($(this).attr('data-action') == 'click') { action = 'click'; }
		
		// tooltip
		$(this).attr('title','')
		.tipTip({defaultPosition: tpos, content: content, keepAlive: keepAlive, activation: action, delay: 1000});
	});
	
	/*---------------------------------
		Table Sort
	-----------------------------------*/
	// init
	var aAsc = [];
	$('table.sortable').each(function(){
		$(this).find('thead th').each(function(index){$(this).attr('rel', index);});
		$(this).find('th,td').each(function(){$(this).attr('value', $(this).text());});
	});

	// table click
	$('table.sortable thead th').live('click', function(e){
		// update arrow icon
		$(this).parents('table.sortable').find('span.arrow').remove();
		$(this).append('<span class="arrow"></span>');
	
		// sort direction
		var nr = $(this).attr('rel');
		aAsc[nr] = aAsc[nr]=='asc'?'desc':'asc';
		if(aAsc[nr] == 'desc'){ $(this).find('span.arrow').addClass('up'); }
		
		// sort rows
		var rows = $(this).parents('table.sortable').find('tbody tr');
		rows.tsort('td:eq('+nr+')',{order:aAsc[nr],attr:'value'});
		
		// fix row classes
		rows.removeClass('alt first last');
		var table = $(this).parents('table.sortable');
		table.find('tr:even').addClass('alt');
		table.find('tr:first').addClass('first');
		table.find('tr:last').addClass('last');
	});
	
	/*---------------------------------
		Fancybox Lightbox
	-----------------------------------*/
	
	
$('a.gallery,div.gallery a').fancybox({
	loop:false,
		helpers : {
    	title : {
    type: 'outside'
    	}}});

$('div.gallery').each(function(i){
		$(this).find('a').attr('rel', 'gallery'+i)
	});


	/*---------------------------------
		font size change
	-----------------------------------*/
$(function(){
var i=$.cookie('switch1') - 0;
var u='../css/fsize1.css';
if(i === 2){
	u='../css/fsize2.css';
}else if(i === 3){
	u='../css/fsize3.css';
}
$("#switch1").attr({href:u});
});
function switch1(cssurl){
var i = 0;
if (cssurl === '../css/fsize1.css'){
	i = 1;
}else if (cssurl ==='../css/fsize2.css' ){
	i = 2;
}else if (cssurl ==='../css/fsize3.css'){
	i = 3;
}else{
	return;
}
$('#switch1').attr({href:cssurl});
$.cookie('switch1',i,{expires:30,path:'/'});
}




	/*---------------------------------
		Readmore
	-----------------------------------*/
	$(".readmore").hover(function(){
	$(this).css("cursor","pointer"); 
	},function(){
	$(this).css("cursor","default");
	});
	$(".moreread").css("display","none");
	$(".readmore").click(function(){
	$(this).next().slideToggle("slow");
	$(this).next().css("display","block");
	});



	/* ---------------------------------------------------------------------- */
	/*	Accordion Content
	/* ---------------------------------------------------------------------- */

	(function() {

		var $container = $('.acc-container'),
			$trigger   = $('.acc-trigger');

		$container.hide();
		$trigger.first().addClass('active').next().show();

		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);
		
		$trigger.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width() );
			$container.css('width', $container.parent().width() );
		});

	})();

	/* end Accordion Content */

//IEで点線を消す
$("a").bind("focus",function(){if(this.blur)this.blur();});

	
});

/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/

(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);


 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

/* TINY SORT */
(function(e){var a=false,g=null,f=parseFloat,b=/(\d+\.?\d*)$/g;e.tinysort={id:"TinySort",version:"1.2.18",copyright:"Copyright (c) 2008-2012 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licenced:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},defaults:{order:"asc",attr:g,data:g,useVal:a,place:"start",returns:a,cases:a,forceStrings:a,sortFunction:g}};e.fn.extend({tinysort:function(m,h){if(m&&typeof(m)!="string"){h=m;m=g}var n=e.extend({},e.tinysort.defaults,h),s,B=this,x=e(this).length,C={},p=!(!m||m==""),q=!(n.attr===g||n.attr==""),w=n.data!==g,j=p&&m[0]==":",k=j?B.filter(m):B,r=n.sortFunction,v=n.order=="asc"?1:-1,l=[];if(!r){r=n.order=="rand"?function(){return Math.random()<0.5?1:-1}:function(F,E){var i=!n.cases?d(F.s):F.s,K=!n.cases?d(E.s):E.s;if(!n.forceStrings){var H=i.match(b),G=K.match(b);if(H&&G){var J=i.substr(0,i.length-H[0].length),I=K.substr(0,K.length-G[0].length);if(J==I){i=f(H[0]);K=f(G[0])}}}return v*(i<K?-1:(i>K?1:0))}}B.each(function(G,H){var I=e(H),E=p?(j?k.filter(H):I.find(m)):I,J=w?E.data(n.data):(q?E.attr(n.attr):(n.useVal?E.val():E.text())),F=I.parent();if(!C[F]){C[F]={s:[],n:[]}}if(E.length>0){C[F].s.push({s:J,e:I,n:G})}else{C[F].n.push({e:I,n:G})}});for(s in C){C[s].s.sort(r)}for(s in C){var y=C[s],A=[],D=x,u=[0,0],z;switch(n.place){case"first":e.each(y.s,function(E,F){D=Math.min(D,F.n)});break;case"org":e.each(y.s,function(E,F){A.push(F.n)});break;case"end":D=y.n.length;break;default:D=0}for(z=0;z<x;z++){var o=c(A,z)?!a:z>=D&&z<D+y.s.length,t=(o?y.s:y.n)[u[o?0:1]].e;t.parent().append(t);if(o||!n.returns){l.push(t.get(0))}u[o?0:1]++}}return B.pushStack(l)}});function d(h){return h&&h.toLowerCase?h.toLowerCase():h}function c(j,m){for(var k=0,h=j.length;k<h;k++){if(j[k]==m){return !a}}return a}e.fn.TinySort=e.fn.Tinysort=e.fn.tsort=e.fn.tinysort})(jQuery);


/*---------------------------------------------- 
 FitVids
------------------------------------------------*/
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){
  "use strict";
  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };
    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );

/*---------------------------------------------- 
 Treeview
------------------------------------------------*/
/*
 * Treeview 1.4 - jQuery plugin to hide and show branches of a tree
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 * Copyright (c) 2007 J??ｽｶrn Zaefferer
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * Revision: $Id: jquery.treeview.js 4684 2008-02-07 19:08:06Z joern.zaefferer $
 */
(function($){$.extend($.fn,{swapClass:function(c1,c2){var c1Elements=this.filter('.'+c1);this.filter('.'+c2).removeClass(c2).addClass(c1);c1Elements.removeClass(c1).addClass(c2);return this;},replaceClass:function(c1,c2){return this.filter('.'+c1).removeClass(c1).addClass(c2).end();},hoverClass:function(className){className=className||"hover";return this.hover(function(){$(this).addClass(className);},function(){$(this).removeClass(className);});},heightToggle:function(animated,callback){animated?this.animate({height:"toggle"},animated,callback):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]();if(callback)callback.apply(this,arguments);});},heightHide:function(animated,callback){if(animated){this.animate({height:"hide"},animated,callback);}else{this.hide();if(callback)this.each(callback);}},prepareBranches:function(settings){if(!settings.prerendered){this.filter(":last-child:not(ul)").addClass(CLASSES.last);this.filter((settings.collapsed?"":"."+CLASSES.closed)+":not(."+CLASSES.open+")").find(">ul").hide();}return this.filter(":has(>ul)");},applyClasses:function(settings,toggler){this.filter(":has(>ul):not(:has(>a))").find(">span").click(function(event){toggler.apply($(this).next());}).add($("a",this)).hoverClass();if(!settings.prerendered){this.filter(":has(>ul:hidden)").addClass(CLASSES.expandable).replaceClass(CLASSES.last,CLASSES.lastExpandable);this.not(":has(>ul:hidden)").addClass(CLASSES.collapsable).replaceClass(CLASSES.last,CLASSES.lastCollapsable);this.prepend("<div class=\""+CLASSES.hitarea+"\"/>").find("div."+CLASSES.hitarea).each(function(){var classes="";$.each($(this).parent().attr("class").split(" "),function(){classes+=this+"-hitarea ";});$(this).addClass(classes);});}this.find("div."+CLASSES.hitarea).click(toggler);},treeview:function(settings){settings=$.extend({cookieId:"treeview"},settings);if(settings.add){return this.trigger("add",[settings.add]);}if(settings.toggle){var callback=settings.toggle;settings.toggle=function(){return callback.apply($(this).parent()[0],arguments);};}function treeController(tree,control){function handler(filter){return function(){toggler.apply($("div."+CLASSES.hitarea,tree).filter(function(){return filter?$(this).parent("."+filter).length:true;}));return false;};}$("a:eq(0)",control).click(handler(CLASSES.collapsable));$("a:eq(1)",control).click(handler(CLASSES.expandable));$("a:eq(2)",control).click(handler());}function toggler(){$(this).parent().find(">.hitarea").swapClass(CLASSES.collapsableHitarea,CLASSES.expandableHitarea).swapClass(CLASSES.lastCollapsableHitarea,CLASSES.lastExpandableHitarea).end().swapClass(CLASSES.collapsable,CLASSES.expandable).swapClass(CLASSES.lastCollapsable,CLASSES.lastExpandable).find(">ul").heightToggle(settings.animated,settings.toggle);if(settings.unique){$(this).parent().siblings().find(">.hitarea").replaceClass(CLASSES.collapsableHitarea,CLASSES.expandableHitarea).replaceClass(CLASSES.lastCollapsableHitarea,CLASSES.lastExpandableHitarea).end().replaceClass(CLASSES.collapsable,CLASSES.expandable).replaceClass(CLASSES.lastCollapsable,CLASSES.lastExpandable).find(">ul").heightHide(settings.animated,settings.toggle);}}function serialize(){function binary(arg){return arg?1:0;}var data=[];branches.each(function(i,e){data[i]=$(e).is(":has(>ul:visible)")?1:0;});$.cookie(settings.cookieId,data.join(""));}function deserialize(){var stored=$.cookie(settings.cookieId);if(stored){var data=stored.split("");branches.each(function(i,e){$(e).find(">ul")[parseInt(data[i])?"show":"hide"]();});}}this.addClass("treeview");var branches=this.find("li").prepareBranches(settings);switch(settings.persist){case "cookie":var toggleCallback=settings.toggle;settings.toggle=function(){serialize();if(toggleCallback){toggleCallback.apply(this,arguments);}};deserialize();break;case "location":var current=this.find("a").filter(function(){return this.href.toLowerCase()==location.href.toLowerCase();});if(current.length){current.addClass("selected").parents("ul, li").add(current.next()).show();}break;}branches.applyClasses(settings,toggler);if(settings.control){treeController(this,settings.control);$(settings.control).show();}return this.bind("add",function(event,branches){$(branches).prev().removeClass(CLASSES.last).removeClass(CLASSES.lastCollapsable).removeClass(CLASSES.lastExpandable).find(">.hitarea").removeClass(CLASSES.lastCollapsableHitarea).removeClass(CLASSES.lastExpandableHitarea);$(branches).find("li").andSelf().prepareBranches(settings).applyClasses(settings,toggler);});}});var CLASSES=$.fn.treeview.classes={open:"open",closed:"closed",expandable:"expandable",expandableHitarea:"expandable-hitarea",lastExpandableHitarea:"lastExpandable-hitarea",collapsable:"collapsable",collapsableHitarea:"collapsable-hitarea",lastCollapsableHitarea:"lastCollapsable-hitarea",lastCollapsable:"lastCollapsable",lastExpandable:"lastExpandable",last:"last",hitarea:"hitarea"};$.fn.Treeview=$.fn.treeview;})(jQuery);
	
$(function() {  
      $(".sidebar-menu").treeview({  
        collapsed: true,  
        animated: "medium",  
        control: "#sidetreecontrol",  
        persist: "location",
		unique: true
      });  
    }) 

/*---------------------------------------------- 
 Cookie plugin
------------------------------------------------*/
/*
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};


/*---------------------------------------------- 
 yuga
------------------------------------------------*/
(function($){$(function(){$.yuga.selflink();$.yuga.rollover();$.yuga.externalLink()});$.yuga={Uri:function(path){var self=this;this.originalPath=path;this.absolutePath=(function(){var e=document.createElement('span');e.innerHTML='<a href="'+path+'" />';return e.firstChild.href})();var fields={'schema':2,'username':5,'password':6,'host':7,'path':9,'query':10,'fragment':11};var r=/^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);for(var field in fields){this[field]=r[fields[field]]}this.querys={};if(this.query){$.each(self.query.split('&'),function(){var a=this.split('=');if(a.length==2)self.querys[a[0]]=a[1]})}},selflink:function(options){var c=$.extend({selfLinkAreaSelector:'body',selfLinkClass:'current',parentsLinkClass:'parentsLink',postfix:'_cr',changeImgSelf:true,changeImgParents:true},options);$(c.selfLinkAreaSelector+((c.selfLinkAreaSelector)?' ':'')+'a[href]').each(function(){var href=new $.yuga.Uri(this.getAttribute('href'));var setImgFlg=false;if((href.absolutePath==location.href)&&!href.fragment){$(this).addClass(c.selfLinkClass);setImgFlg=c.changeImgSelf}else if(0<=location.href.search(href.absolutePath)){$(this).not('.first a').addClass(c.parentsLinkClass);setImgFlg=c.changeImgParents}})},rollover:function(options){var c=$.extend({hoverSelector:'img.btn, .btn img',groupSelector:'.btngroup',postfix:'_on'},options);var rolloverImgs=$(c.hoverSelector).filter(isNotCurrent);rolloverImgs.each(function(){this.originalSrc=$(this).attr('src');this.rolloverSrc=this.originalSrc.replace(new RegExp('('+c.postfix+')?(\.gif|\.jpg|\.png)$'),c.postfix+"$2");this.rolloverImg=new Image;this.rolloverImg.src=this.rolloverSrc});var groupingImgs=$(c.groupSelector).find('img').filter(isRolloverImg);rolloverImgs.not(groupingImgs).hover(function(){$(this).attr('src',this.rolloverSrc)},function(){$(this).attr('src',this.originalSrc)});$(c.groupSelector).hover(function(){$(this).find('img').filter(isRolloverImg).each(function(){$(this).attr('src',this.rolloverSrc)})},function(){$(this).find('img').filter(isRolloverImg).each(function(){$(this).attr('src',this.originalSrc)})});function isNotCurrent(i){return Boolean(!this.currentSrc)}function isRolloverImg(i){return Boolean(this.rolloverSrc)}},externalLink:function(options){var c=$.extend({windowOpen:true,externalClass:'externalLink'},options);var uri=new $.yuga.Uri(encodeURI(location.href));var e=$('a[href^="http://"], a[href^="https://"], a.exLink, a[href$=".pdf"]').not('a.inLink,a[href^="http://www.youtube.com/"],a[href^="https://www.youtube.com/"],a[href^="'+uri.schema+'://'+uri.host+'/'+'"]').not(c.notWindowURL);if(c.windowOpen){e.click(function(){window.open(this.href,'_blank');return false})}if(c)e.not(':has(img), :has(button), .twitter-share-button, a[href$=".pdf"], .iframe a,a.noicon,.noicon a, #nav .menu-item a').append($('<i class="small mL4 mR4 ffs10 fa fa-external-link"></i>'));e.addClass(c.externalClass);$('a[href$=".pdf"]').not(':has(img)').prepend($('<i class="fa fa-file-pdf-o small mR5"></i>'));$('a[href$=".xls"]').not(':has(img)').prepend($('<i class="fa fa-file-excel-o small mR5"></i>'));$('a[href$=".xlsx"]').not(':has(img)').prepend($('<i class="fa fa-file-excel-o small mR5"></i>'));$('a[href$=".doc"]').not(':has(img)').prepend($('<i class="fa fa-file-word-o small mR5"></i>'));$('a[href$=".docx"]').not(':has(img)').prepend($('<i class="fa fa-file-word-o small mR5"></i>'));$('a[href$=".zip"]').not(':has(img)').prepend($('<i class="fa fa-file-archive-o small mR5"></i>'));$('a[href$=".ppt"]').not(':has(img)').prepend($('<i class="fa fa-file-powerpoint-o small mR5"></i>'));$('a[href$=".pptx"]').not(':has(img)').prepend($('<i class="fa fa-file-powerpoint-o small mR5"></i>'))}}})(jQuery);

// 重複を回避
window.addEventListener('DOMContentLoaded', () => {
	const icons = document.querySelectorAll('i.fa-external-link');
	icons.forEach((icon) => {
		const next = icon.nextElementSibling;
		if (next && next.classList.contains('fa-external-link')) {
			next.remove();
		}
	});
});


/*---------------------------------------------- 
 sp-slidemenu
------------------------------------------------*/

$(function() {
var _width = $(window).width();
if(_width <= 961 && !$('body').hasClass('personal')){
var menu = SpSlidemenu('#container', '.slidemenu', '.menu-button', {direction: 'left'});
}else{
}
});


/*---------------------------------------------- 
 jQuery.ScrollTo
------------------------------------------------*/
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*---------------------------------------------- 
 One Page Nav
------------------------------------------------*/
(function(e){e.fn.onePageNav=function(l){var g=e.extend({},e.fn.onePageNav.defaults,l),c={};c.sections={};c.bindNav=function(a,b,d,f){a.find("a").bind("click",function(m){var h=e(this),i=h.parent(),j=h.attr("href"),k=e(document);if(!i.hasClass(b)){c.adjustNav(a,i,b);k.unbind(".onePageNav");e.scrollTo(j,f,{onAfter:function(){if(d)window.location.hash=j;k.bind("scroll.onePageNav",function(){c.scrollChange(a,b)})}})}m.preventDefault()})};c.adjustNav=function(a,b,d){a.find("."+d).removeClass(d);b.addClass(d)};
c.getPositions=function(a){a.find("a").each(function(){var b=e(this).attr("href"),d=e(b).offset();d=d.top;c.sections[b.substr(1)]=Math.round(d)})};c.getSection=function(a){var b="",d=Math.round(e(window).height()/2);for(var f in c.sections)if(c.sections[f]-d<a)b=f;return b};c.scrollChange=function(a,b){c.getPositions(a);var d=e(window).scrollTop();d=c.getSection(d);d!==""&&c.adjustNav(a,a.find("a[href=#"+d+"]").parent(),b)};c.init=function(a,b){c.bindNav(a,b.currentClass,b.changeHash,b.scrollSpeed);
c.getPositions(a);e(document).bind("scroll.onePageNav",function(){c.scrollChange(a,b.currentClass)})};return this.each(function(){var a=e(this),b=e.meta?e.extend({},g,a.data()):g;c.init(a,b)})};e.fn.onePageNav.defaults={currentClass:"current",changeHash:false,scrollSpeed:750}})(jQuery);

$(document).ready(function() {
	$('.scrollnav').onePageNav();
});
			
/*---------------------------------------------- 
 Parallax
------------------------------------------------*/
jQuery(window).load(function($) {		
	
	if(jQuery().parallax) { 
		jQuery('.parallax-section').parallax();
	}

});

/*---------------------------------------------- 
 Sticky-kit
------------------------------------------------*/
$(function(){
  var w = jQuery(window).width();
        var x = 960;
        if (w >= x) {
		setTimeout(function(){
 return $("[data-sticky_column]").stick_in_parent({parent: "[data-sticky_parent]",offset_top:20});
},2000);
        }
});
$(function(){
  var w2 = jQuery(window).width();
        var w3 = 960;
        if (w2 >= w3) {
		setTimeout(function(){
	  return $("#header").stick_in_parent().on("sticky_kit:stick", (function(_this) {
      return function(e) {
        return setTimeout(function() {
          return $(e.target).addClass("show_hidden");
        }, 0);
      };
    })(this)).on("sticky_kit:unstick", (function(_this) {
      return function(e) {
        return setTimeout(function() {
          return $(e.target).removeClass("show_hidden");
        }, 0);
      };
    })(this));
	},1000);
        }
});

/*---------------------------------------------- 
 Owl Carousel
------------------------------------------------*/

$(document).ready(function() {
  $(".carousel3").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [959,2],
	  navigation : true,
	  navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ]
  });
});
$(document).ready(function() {
  $(".carousel-nopn").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [959,2],
	  navigation: false,
	pagination: false
  });
});

$(document).ready(function() {
  $(".slideshow").owlCarousel({
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [959,1],
	  singleItem : true,
	  loop : true,
	  autoHeight: true,
	  navigation : true,
	  navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ]
  });
});

$(document).ready(function() {
function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $(".carousel-random").owlCarousel({
   items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [959,2],
    navigation: false,
	pagination: false,
    beforeInit : function(elem){
      random(elem);
    }
 
  });
  
});

/*---------------------------------------------- 
 Nice Scroll

$(function() {
$("html").niceScroll({styler:"fb",cursorcolor:"rgba(85, 89, 97, 0.66)",cursorborder:"none",mousescrollstep:30,scrollspeed:60,cursorwidth:10});
$(".box-scroll").niceScroll({styler:"fb",cursorcolor:"rgba(85, 89, 97, 0.66)",cursorborder:"none",mousescrollstep:30,scrollspeed:60,cursorwidth:6});
});
------------------------------------------------*/

/*---------------------------------------------- 
 Smooth Scroll
------------------------------------------------*/
$(function(){
	$('a[href^=#], a[href$="html#"]').not('.tabs a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});



var scrolltotop={

	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	setting: {startline:300},

	state: {isvisible:false, shouldvisible:false},

	togglecontrol:function(){

		var scrolltop=jQuery(window).scrollTop()

		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible){
			jQuery(".to-top a").slideDown();
			this.state.isvisible=true;

		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			jQuery(".to-top a").slideUp();
			this.state.isvisible=false;
		}
	},

	init:function(){
		jQuery(document).ready(function($){
			jQuery(".to-top a").hide();
			var mainobj=scrolltotop;

			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol();
			})
		})
	}
}
scrolltotop.init();


/*---------------------------------------------- 
 MixItUp
------------------------------------------------*/
var buttonFilter = {
  $filters: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  init: function(){
    var self = this; 
    self.$filters = $('#filters');
    self.$reset = $('#mix-reset');
    self.$container = $('.mix-container');
    self.$filters.find('.filters').each(function(){
      self.groups.push({
        $buttons: $(this).find('.filter'),
        active: ''
      });
    });
    self.bindHandlers();
  },
  bindHandlers: function(){
    var self = this;
    self.$filters.on('click', '.filter', function(e){
      e.preventDefault();
      var $button = $(this);
      $button.hasClass('active') ?
        $button.removeClass('active') :
        $button.addClass('active').siblings('.filter').removeClass('active');
      self.parseFilters();
    });
    self.$reset.on('click', function(e){
      e.preventDefault();
      self.$filters.find('.filter').removeClass('active');
      self.parseFilters();
    });
  },
  parseFilters: function(){
    var self = this;
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.filter('.active').attr('data-filter') || '';
    }
    self.concatenate();
  },
  concatenate: function(){
    var self = this;
    self.outputString = ''; 
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    !self.outputString.length && (self.outputString = 'all'); 
    console.log(self.outputString); 
	  if(self.$container.mixItUp('isLoaded')){
    	self.$container.mixItUp('filter', self.outputString);
	  }
  }
};
$(function(){
  buttonFilter.init();
  $('.mix-container').mixItUp({
    controls: {
      enable: false
    }
  });    
});

/*---------------------------------------------- 
 Slide Up
------------------------------------------------*/
$(document).ready(function(){
	$('.slideup').hover(function(){
    $(".box-slide", this).stop().fadeIn("slow");
}, function() {
    $(".box-slide", this).stop().fadeOut("slow");
});
});

/*---------------------------------------------- 
 Portfolio
------------------------------------------------*/

$(function(){
	$("a.pf-item-anchor").on('click',function(){
		scrollPfItem($(this).parents("div.pf-item"))
	})	

	$("div.to_next").on('click',function(e,a){
		e.preventDefault()
		e.stopPropagation()
		if(a != 1){
			findShowedNextPfItem($(this).parents("div.pf-item"))			
		}
	})	
	function findShowedNextPfItem(trg){
		var next = trg.next() 
		if(next.css('display') === 'none'){
			findShowedNextPfItem(next)
		}else{
			trg.find("div.to_next").trigger('click', [1])
			scrollPfItem(next)
		}		
	}
	
	$("div.to_prev").on('click',function(e,a){
		e.preventDefault()
		e.stopPropagation()
		if(a != 1){
			findShowedPrevPfItem($(this).parents("div.pf-item"))			
		}
	})		
	
	function findShowedPrevPfItem(trg){
		var prev = trg.prev() 
		if(prev.css('display') === 'none'){
			findShowedPrevPfItem(prev)
		}else{
			trg.find("div.to_prev").trigger('click', [1])
			scrollPfItem(prev)
		}		
	}	

	function scrollPfItem(item){
                $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
                   $('html, body').stop()
                }) 
		var p = item.find(".pf-item-details").offset().top - 90
                $('html,body').animate({ scrollTop: p }, 400 , function(){
                    $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
                })
	}	
	
	function fadeInControls(obj){
		var next = $(obj).find("div.to_next")
		var prev = $(obj).find("div.to_prev")
		if(next.css('display')!=='none'){
			next.hide()
			setTimeout(function(){ next.fadeIn('slow')},1500)
		}
		if(prev.css('display')!=='none'){
			prev.hide()
			setTimeout(function(){ prev.fadeIn('slow')},1500)
		}		
	}
	function removeMB0(){
	  	setTimeout(function(){
			$(".pf-item").each(function(e){
				if ( $(this).css( "margin-bottom") == '0px' ){
					$(this).css( "margin-bottom", "")		
				}
			})
	    },100);				
	}
	function removeMB(){
	  	setTimeout(function(){
			$(".pf-item").each(function(e){
				if ( !$(this).hasClass( "active")  ){
					$(this).css( "margin-bottom", "")		
				}
			})
	    },100);				
	}


	$("#filters button").on('click',function(){
	  	setTimeout(function(){		
			var visible_count = 0
			var visible_first = null
			var visible_last = null
			$(".pf-item").each(function(){
				$(this).find(".to_prev").css('display',"block")
				$(this).find(".to_next").css('display',"block")
				if ( $(this).css( "display") === 'none' ){
				}else{
					if(visible_first== null){
						visible_first = visible_count
					}
					visible_last = visible_count
				}
				visible_count++
			})		
			$(".mix-container .pf-item").eq(visible_first).find(".to_prev").css('display',"none")
			$(".mix-container .pf-item").eq(visible_last).find(".to_next").css('display',"none")
		},1000)
	})
})


	
	/*---------------------------------------------- 
				 B A C K   T O P   T O P
	------------------------------------------------*/
	jQuery('#backtotop').click(function(){
		jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeInOutQuart');
		return false;						   
	});
	