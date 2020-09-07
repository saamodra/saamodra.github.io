$(function() {
	$('#content2').on('click', function(){
		$('.content, #content1').removeClass('active');
		$('#content2, .content2').addClass('active');
	});
	$('#content1').on('click', function(){
		$('.content, #content2').removeClass('active');
		$('#content1, .content1').addClass('active');
	});

	$('.close').on('click', function(){
		// $('.modal-image').fadeOut();
		$('.modal-image').removeClass('active');
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var img = document.getElementsByClassName('overlay');
	var myimg = document.getElementById('myimg');
	var modal = document.querySelector('.modal-image');
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var index;

	function plusSlide(n) {
		index += n;
		if (index > img.length-1) {
			index = 0;
		}
		if (index < 0) {
			index = img.length-1;
		}
		myimg.src = img[index].nextSibling.nextSibling.src;
		// myimg.style.opacity = 0;
		// myimg.classList.add('fly-left');
	}

	for(var i = 0; i < img.length; i++) {
		let n = i;
		img[i].addEventListener('click', function(e) {
			modal.classList.add('active');
			myimg.src = this.nextSibling.nextSibling.src;
			index = n;

		});
	}

	next.addEventListener('click', function() {
		plusSlide(1);
	});

	prev.addEventListener('click', function() {
		plusSlide(-1);
	});
});
