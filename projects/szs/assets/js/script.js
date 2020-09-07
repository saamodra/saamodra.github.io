// Run once the document is ready.
$(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 1) {
      $('.navb').addClass('bg-white').removeClass('top');
      $('#backTop').addClass('active-2');
    } else if($(this).scrollTop() == 0) {
      $('.navb').removeClass('bg-white').addClass('top');
      $('#backTop').removeClass('active-2');
    }
  });

  $('#backTop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('header').offset().top }, 0);
  });
  
  $('#close').on('click', function() {
    $('.modal-1').removeClass('active-1');
  });
  
  //modal image index
  var index, src;

  function plusSlide(n) {
    var imglength = $('.img-gallery').length;
    index += n;
    if (index > imglength-1) {
      index = 0;
    } else if(index < 0) {
      index = imglength-1;
    }
    src = $('.img-gallery').eq(index).find('img').attr('src');
    $('.img-modal').attr('src', src);
  }

  $('.img-gallery').on('click', function(){
    $('.modal-1').addClass('active-1');
    index = $(this).index();
    src = $(this).find('img').attr('src');
    $('.img-modal').attr('src', src);
  });

  $('#next').on('click', function() {
    plusSlide(1);
  });
  
  $('#prev').on('click', function() {
    plusSlide(-1);
  });

  $('#closeNav').on('click', function() {
    $('.navbar-menu').animate({
      'left': '-=100%'
    }, 'fast');
  });
  $('#openNav').on('click', function() {
    $('.navbar-menu').animate({
      'left': '+=100%'
    }, 'fast');
  });
});