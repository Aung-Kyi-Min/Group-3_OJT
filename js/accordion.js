$(document).ready(function () {
  $('.accordion .accordion-title').click(function () {
        let $this = $(this);
    
    if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
      $this.next().slideUp('350');
      $('.plus-minus').text('+');
        } else {
          $this.parent().parent().find('li p').removeClass('show');
          $this.parent().parent().find('li p').slideUp('350');
      $this.next().toggleClass('show');
      $this.children('.plus-minus').text('-');
          $this.next().slideToggle('350');
        }
  });
})