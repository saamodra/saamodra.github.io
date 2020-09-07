$(document).ready(function(){
  $('#navbar-mobile2').css('display','none');
  $('#navbar-mobile').on('click', function(){
    $('.navbar-menu').animate({
      'right': '+=200px'
    }, 600);
    $('#navbar-mobile2').css('display','block');
  });

  $('#navbar-mobile2').on('click', function(){
    $('.navbar-menu').animate({
      'right' : '-=200px'
    }, 600);
    $(this).css('display','none');
    $('#navbar-mobile').css('display','block');
  });
});