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
          var scroll = $(this).scrollTop();
          if (scroll > 100) {
            $('.navbar').addClass('change');
            $('#goTop').stop().show('fast');
          } else {
            $('.navbar').removeClass('change');
            $('#goTop').stop().hide('fast');
          }
        });

        $("#goTop").click(function() {
          $('body, html').animate({
            scrollTop: 0
          }, 400);
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