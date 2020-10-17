// Projects Gallery
import "./project-list.js";
import projects from "./projects-data.js";

const gallery = document.querySelector('.gallery-container');

function resizeProjects(height, width) {
  if (height <= 560) {
    refreshProjects(4);
  } else {
    refreshProjects(8);
  }
}
$(document).ready(function () {

  var height = $(window).height();
  var width = $(window).width();

  var autoplay_animation = false;

  if (width > 480) {
    new fullScroll({
      mainElement: "main",
      displayDots: true,
      dotsPosition: "right",
      animateTime: 0.7,
      animateFunction: "ease",
    });


    // Page 1 Content
    var page1 = anime.timeline({
      easing: 'easeOutQuint',
      autoplay: autoplay_animation
    });

    autoplay_animation = true;

    if (height <= 560) {
      titletop = "30%";
    } else {
      titletop = "35%";
    }

    if (width <= 320) {
      titletop = "10%";
    }

    page1.add({
      targets: '.page-1 .title',
      opacity: 1,
      top: titletop,
      duration: 800,
      delay: 200,
      endDelay: -950,
    }).add({
      targets: '.page-1 .sub-title',
      opacity: 1,
      top: '60%',
      duration: 800,
    })

    // Left Navigation
    anime.timeline({
        easing: 'easeOutQuart',
      })
      .add({
        targets: '.right-nav',
        width: '75px',
        duration: 1000,
        delay: 500,
        endDelay: -500,
      })
      .add({
        targets: '.right-nav ul li a',
        opacity: 1,
        duration: 200,
        // delay: -300
      });

    VanillaTilt.init(document.querySelector(".wm"), {
      max: 25,
      speed: 400
    });

    $(window).on('hashchange', page1.play);

    $(".scroll").on('click', function (e) {
      e.preventDefault();
    });
  } else {

    $(".scroll").on('click', function (e) {
      e.preventDefault();
      console.log('menu clicked');
      var target = $(this).data('goto');
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      }, 500);
    });
  }


  $('.container').css('display', 'none');
  $('.dots').css('display', 'none');

  setTimeout(function () {
    $('.container-loading').fadeOut();
    $('.container').css('display', 'flex');
    $('.dots').css('display', 'block');

    page1.play();
  }, 3000);

  $(window).on('hashchange', function (e) {
    var slide = Number(window.location.hash.substr(1));

    $('.right-nav ul li').each(function (i, obj) {
      var ionicon = $(this).find('a');
      ionicon.removeClass('active');
    });

    $('.right-nav ul li').eq(slide).find('a').addClass('active');

  });



  var titletop = "30%";

  resizeProjects(height, width);

  $(window).on('resize', function () {
    var height = $(this).height();
    resizeProjects(height, width);
  });


});



function refreshProjects(gallerySize) {
  const maxPage = Math.ceil(projects.length / gallerySize);
  gallery.innerHTML = "";
  
  projects.forEach((project, i) => {
    const projectItemElement = document.createElement('project-item');
    projectItemElement.project = project;
    if (i < gallerySize) {
      gallery.appendChild(projectItemElement);
    }
    
  });


  var currentPage = 1;

  $('.pagination-container').empty();

  $('.pagination-container').append('<button data-page="prev">Prev</button>');
  for (let i = 1; i <= maxPage; i++) {
    if (i == 1) {
      $('.pagination-container').append(`<button class="active" data-page="${i}">${i}</button>`);
    } else {
      $('.pagination-container').append(`<button data-page="${i}">${i}</button>`);
    }
  }
  $('.pagination-container').append('<button data-page="next">Next</button>');

  $('.pagination-container button').on('click', function () {
    let btnPage = $(this).data('page');

    // Set current page from clicked Button
    if (btnPage != 'prev' && btnPage != "next") currentPage = btnPage;
    else {
      if (btnPage == 'prev') {
        btnPage = (currentPage - 1 >= 1) ? --currentPage : currentPage;
      } else {
        btnPage = (currentPage + 1 <= maxPage) ? ++currentPage : currentPage;
      }
    }

    // Activate Page Button
    $('.pagination-container button').removeClass('active');
    $(`.pagination-container button[data-page="${currentPage}"]`).addClass('active');

    const nextButton = $('.pagination-container button[data-page="next"]');
    const prevButton = $('.pagination-container button[data-page="prev"]');


    if (currentPage == maxPage) nextButton.prop('disabled', true);
    else nextButton.prop('disabled', false);

    if (currentPage == 1) prevButton.prop('disabled', true);
    else prevButton.prop('disabled', false);

    // Empty gallery
    gallery.innerHTML = "";

    // Fill the gallery content
    for (let i = (btnPage - 1) * gallerySize; i < btnPage * gallerySize; i++) {
      if (i < projects.length) {
        const projectItemElement = document.createElement('project-item');
        projectItemElement.project = projects[i];
        if (btnPage == maxPage && projects.length % 8 <= 4) {
          projectItemElement.classList.add("project-full");
        } else {
          projectItemElement.classList.remove("project-full");
        }
        gallery.appendChild(projectItemElement);
      }
    }
  });

  // End Projects Gallery
}