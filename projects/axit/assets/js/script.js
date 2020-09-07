$(document).ready(function(){
	$(".active").css("display", "block");
	
});
$(window).scroll(function(){
	$('.fly-left, .fly-right, .fly-up, .fly-down, .rotate').each(function(){
		var bottom_object = $(this).offset().top + $(this).height();
		var bottom_window = $(window).scrollTop() + $(window).height();
		if (bottom_window > bottom_object) {
			$(this).addClass('show-block');
				// $('.fly-left').css('display', 'block');
		} else {
			$(this).removeClass('show-block')
			// $('.fly-left').css('display', 'none');
		}
	});
});

console.log('asdasdasd');