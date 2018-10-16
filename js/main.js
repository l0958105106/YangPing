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

});