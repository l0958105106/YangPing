$(document).ready(function () {

    $('.products a').click(function (e) {

        e.preventDefault();

        var url = $(this).prop('href');
        var image = $('<img>');
        image.prop('src', url);

        $('.modal').html(image);
        console.log(image);
        $('.modal-container').fadeIn();
    });

    $(".modal-container").click(function(e){
        $(this).fadeOut();
    });


      
        $(window).scroll(function() {
          var scroll = $(this).scrollTop()
          if (scroll > 100) {
            $('#goTop ,.navbar').addClass('show');
          } else {
            $('#goTop ,.navbar').removeClass('show');
          }
        });

        $("#goTop").click(function() {
          $('body, html').animate({scrollTop: 0}, 400);
        });

      $(".contact-btn").click(function(e) {
        e.preventDefault();
      });


      $(".navbar").find("a").click(function(e) {
        e.preventDefault();
        $(".navbar-collapse").removeClass('show');
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

});