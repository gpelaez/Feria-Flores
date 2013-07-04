$(document).bind("mobileinit", function() {
	$.extend($.mobile, {
		defaultPageTransition : 'slide'
	});
	$('.menu-link').bind('vmousedown', function() {
		var target = $(this).attr('target');
		window.location = target;
	});
});

$(document).on( "pagebeforechange", function( event ) {
		
});
/*
$(document).bind('pageinit',function(event){
	var auxPageId = $(event.target).attr('id');
	if(auxPageId=='home') {
		$('#home-nav-menu-wrapper').removeClass('menu-in').removeClass('menu-out');
		$('#home-nav-menu-wrapper').addClass('menu-in');
	}
});
*/
$(document).bind('pagebeforeshow',function(event){
	var auxPageId = $(event.target).attr('id');
	console.log(auxPageId);
	var deviceHeight = $('#site-background').height();
	if(auxPageId=='home') {
		setMenuRotation(360, (-deviceHeight/2)+'px' );
	} else {
		var strIndex = $(event.target).attr('index');
		var index = parseInt(strIndex);
		setMenuRotation(60*index, 0);
		if(auxPageId=='calendar') {
			var auxFrame = document.createElement('iframe');
			auxFrame.setAttribute('width','100%');
			auxFrame.setAttribute('height','100%');
			auxFrame.setAttribute('frameborder',0);
			auxFrame.setAttribute('scrolling','no');
			
			auxFrame.setAttribute('name','calendarFrame');
			auxFrame.setAttribute('id','calendarFrame');
			$(auxFrame).css({
				borderWidth:0,
				display: 'none'
			});
			
			auxFrame.src = 'https://www.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=gustavopelaezrpo%40gmail.com&amp;color=%23A32929&amp;ctz=America%2FBogota';
			
			var frame = '<iframe src="'+
				'https://www.google.com/calendar/embed?'+
				'showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF'+
				'&amp;src='+window.settings.calendar+'&amp;color=%23A32929&amp;ctz=America%2FBogota'+
				'&dates='+window.settings.beginDate+'%2F'+window.settings.endDate
			'" style=" border-width:0 " width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
			
			$('#'+auxPageId+' .content-wrapper').append(frame);
			$('#'+auxPageId+' .content-wrapper iframe').bind('load',function(){
				$(this).fadeIn('slow');
				var ss = document.createElement("link");
				ss.type = "text/css";
				ss.rel = "stylesheet";
				ss.setAttribute('id','calendar-style');
				ss.href = "css/style-calendar.css";
				frames['calendarFrame'].document.body.appendChild(ss);
//				$(document).find('head').append(ss);
//				$(this).contents().find("head")[0].appendChild('<link type="text/css" rel="stylesheet" href="'+$('#calendar-style').attr('href')+'"/>');
				
			});
		}
	}
})
var currentAngle = 0;
function setMenuRotation(rotation, top) {
	$('#home-nav-menu-wrapper').css({
		WebkitTransform: ' rotate('+(-rotation)+'deg) translate3d(0,'+top+',0)',
		MsTransform: ' rotate('+(-rotation)+'deg) translate3d(0,'+top+',0)',
		transform: ' rotate('+(-rotation)+'deg) translate3d(0,'+top+',0)',
	});
	currentAngle = rotation;
//		$(this).css('-webkit-transform','rotate('+rotation+'deg) !important');
//		$(this).css('-ms-transform','rotate('+rotation+'deg) !important');
//	});
}
var moving = false;
/*
$('#home-nav-menu-wrapper').bind('touchstart',function(event){
	if (event.targetTouches.length == 1) {
		moving = true;
	}
	
});
*/
$('#home-nav-menu-wrapper').bind('touchend',function(e,x){
	if(moving) {
		console.log(e);
		console.log(x);
		moving = false;
	}
});
$('#home-nav-menu-wrapper').bind('touchmove',function(e,x){
	console.log(e);
		console.log(x);
	if(!moving) return false;
	
});