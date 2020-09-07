$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".backToTop").addClass("show");
    } else {
        $(".backToTop").removeClass("show");
    }
});

const scrollTo = (link) => {
    $('html, body').animate({
        scrollTop: $(link).offset().top - 100
    }, 800);
}

$(".backToTop").on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 500);
});

$("a.nav-link, a.navbar-brand").click(function() {    
    scrollTo($(this).attr("href"));
});

$("#scrollDown").click(function() {
    scrollTo("#global");
})


