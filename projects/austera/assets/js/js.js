function expand(e) {
	e.preventDefault();
}

$(document).ready(function(){
	$('#search-show').on('click', function(){
		$('form.search').toggleClass('show');
	});

	$('.nav-expand').on('click', function() {
		$(this).toggleClass('fixed');
		var margin = $('.navbar-menu').css('right');
		$('.navbar-menu').css('display', 'flex');
		if (margin == '-500px') {
			$('.navbar-menu').animate({ 'right' : '+=500px'});
		} else {
			$('.navbar-menu').animate({ 'right' : '-=500px'});
		}
	});
});