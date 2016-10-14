$('.sidebarToggle').click(function() {
  var sb = $('.sidebar');
  if (sb.hasClass('shown')) {
    sb.css('left', '-185px');
    sb.removeClass('shown');
    $('span', this).removeClass('glyphicon-chevron-left');
    $('span', this).addClass('glyphicon-chevron-right');
  } else {
    sb.css('left', '2px');
    sb.addClass('shown');
    $('span', this).removeClass('glyphicon-chevron-right');
    $('span', this).addClass('glyphicon-chevron-left');
  }
});
