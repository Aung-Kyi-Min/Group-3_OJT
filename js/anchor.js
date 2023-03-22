$(document).ready(function () {
  $('.anchor-links a').on('click', function (e) {
    $(".anchor-links a").removeClass("active");
    $(this).addClass("active");
      var href = $(this).attr('href')
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, '1000');


      e.preventDefault();

  });

})