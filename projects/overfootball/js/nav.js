document.addEventListener("DOMContentLoaded", function() {
    // Activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
   
    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status != 200) return;
       
            // Muat daftar tautan menu
            document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
              elm.innerHTML = xhttp.responseText;
            });
       
            // Daftarkan event listener untuk setiap tautan menu
            document.querySelectorAll(".sidenav a, .topnav a, .footer-links li a").forEach(function(elm) {
              
              elm.addEventListener("click", function(event) {
                // Tutup sidenav
                var sidenav = document.querySelector(".sidenav");
                M.Sidenav.getInstance(sidenav).close();
       
                // Muat konten halaman yang dipanggil
                page = event.target.getAttribute("href").substr(1);
                
                loadPage(page);
                window.scrollTo({ top: 0 });
              });
            });
          }
        };
        xhttp.open("GET", "../nav.html", true);
        xhttp.send();
    }

    // Load page content
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadHomeCourse() {
      document.querySelectorAll(".card-action a").forEach(function(elm) {
        elm.addEventListener("click", function(event) {
          // Tutup sidenav
          var sidenav = document.querySelector(".sidenav");
          M.Sidenav.getInstance(sidenav).close();
 
          // Muat konten halaman yang dipanggil
          page = event.target.getAttribute("href").substr(1);
          loadPage(page);
          window.scrollTo({ top: 0 });
        });
      });
    }

    function loadPage(page) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            var content = document.querySelector(".body-content");
            if (this.status == 200) {
                content.innerHTML = xhttp.responseText;
                
            } else if (this.status == 404) {
                content.innerHTML = "<p class='p-content-notifications'>Halaman tidak ditemukan.</p>";
            } else {
                content.innerHTML = "<p class='p-content-notifications'>Ups.. halaman tidak dapat diakses.</p>";
            }
            var cardaction = document.querySelectorAll("#body-content .card-action a")
            if(cardaction.length > 0) {
              loadHomeCourse();
            }
          }
      };
      xhttp.open("GET", "../pages/" + page + ".html", true);
      xhttp.send();


      $.get("../pages/" + page + ".html", function() {
        switch(page) {
          case 'klasemen':
            getStandings();
            break;
          case 'tim':
            getTeams();
            break;
          case 'jadwal':
            getMatches();
            break;
          case 'saved':
            getSavedTeams();
            getSavedSchedule();
          break;

          default:
        }
      });
    }
  });