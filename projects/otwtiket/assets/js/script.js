$(document).ready(function(){
  $('.js-example-basic-single').select2();
  $('.details').hide();
  $('.result-details').on('click', function() {
    var this_details = $(this).parent().find('.details');
    if (this_details.is(':visible')) {
      this_details.slideUp();
    } else {
      this_details.slideDown();
    }
  });

  $('select[name=seat_number]').html(function() {
    var number = [];
    for(var i = 1; i < 32; i++) {
      number.push('<option value="'+ i +'">'+ i + '</option>');
    }
    return number;
  });

  if($('body').hasClass('booked')) {
    JsBarcode("#barcode", "06202019105300");
  }

  $('#print-ticket').on('click', function() {
    window.print();
  });


  $('#btn-next').on('click', function() {
    $('.form-1').animate({
      left: '-=100%',
      opacity: 0
    }, 'slow');
    $('.form-2').animate({
      left: 0,
      opacity: 1
    }, 'slow');

    $('p.reg-footer').css({
      marginTop: '83px'
    });
  });

  $('#btn-back').on('click', function() {
    $('.form-1').animate({
      left: 0,
      opacity: 1
    }, 'slow');
    $('.form-2').animate({
      left: '+=100%',
      opacity: 0
    }, 'slow');
    $('p.reg-footer').css({
      marginTop: '0px'
    });
  });

  $('#btn-ubah').on('click', function() {
    $(this).parent().find('.form-group input, .form-group textarea').prop('disabled', false);
  });
  $('#btn-batal').on('click', function () {
    $(this).parent().find('.form-group input, .form-group textarea').prop('disabled', true);
  });
});