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




    $(function() {
      
        $(window).scroll(function() {
          if ($(this).scrollTop() != 0) {
            $('.navbar').addClass('change');
            $('#goTop').stop().fadeIn();
          } else {
            $('.navbar').removeClass('change');
            $('#goTop').stop().fadeOut();
          }
        });

        $("#goTop").click(function() {
          $('body, html').animate({
            scrollTop: 0
          }, 400);
        });
      });

      $(".navbar").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

});