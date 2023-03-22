$(document).ready(function () {
  $('.nav-tab ul li a').click(function () {
      $('.nav-tab ul li').removeClass('active');
      $(this).parent().addClass('active');

      let currentTab = $(this).data('tag');
      $('.tab-blk .all-tab').hide();
      $('#'+currentTab).show();
  });
})