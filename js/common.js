$(document).ready(function () {
  $('.menu-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.header-ul').toggleClass('show-menu');
  });
});