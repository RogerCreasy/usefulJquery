var none_checked = true;
$('.checkAll').click(function() {
  if (none_checked) {
    $('input.all-checkable').prop('checked', 'checked');
    none_checked = false;
  } else {
    $('input.all-checkable').prop('checked', false);
    none_checked = true;
  }
});
