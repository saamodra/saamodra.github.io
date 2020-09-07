$(document).ready(function() {
  var click = 0;
  var jumlah = 0;
  var pesanan = [];

  $("#menu").on("click", function() {
    var menu = $(".menu-mobile");
    var cont = $(".container-fluid");
    
    console.log(click);
    if (click == 0) {
      menu.animate({
        'left' : '+=31%'
      });
      cont.animate({
        'left': '+=30%'
      });
      click++;
    } else {
      menu.animate({
        'left': '-=31%'
      });
      cont.animate({
        'left': '-=30%'
      });
      click = 0;
    }
    
  });

  $(".btn-close").on("click", function() {
    $(".menu-mobile").animate({
      'left': '-=31%'
    });
    $(".container-fluid").animate({
      'left': '-=30%'
    });
    click = 0;
  });

  $(".beli").on("click", function() {
    var icon = $(".btn-menu span");
    var name = $(this).parent().parent().find("a").html();
    var price = parseInt($(this).siblings("p").find("span").html());

    var total = pesanan.filter(function (value) {
      return value.nama === name;
    }).length;
    
    if (total == 0) {
      pesanan.push({
        jumlah: 1,
        nama: name,
        harga: price
      });    
    } else {
      pesanan.some(function(obj) {
        if (obj.nama === name) {
          obj.jumlah++;
          obj.harga = obj.jumlah * price;
          return true; //breaks out of he loop
        }
      });
    }

    jumlah = pesanan.length;

    icon.html(jumlah);
    if (icon.css("display") != "block") {
      icon.fadeIn();
    }

    console.log(pesanan);
  });

  $('#exampleModal').on('show.bs.modal', function (e) {
    $(this).find(".list-menu").children("li").remove();
    for(let i = 0; i < pesanan.length; i++) {
      $(this).find(".list-menu").append(`
      <li>
        <div class="d-flex justify-content-between w-100">
          <span>${pesanan[i].jumlah}&times; ${pesanan[i].nama}</span>
          <span>Rp. ${pesanan[i].harga}</span>
        </div>
      </li>`);
    }
  });
});

window.onscroll = function () { myFunction() };

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}