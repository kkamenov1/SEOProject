$(function() {
  $('#navbarDropdownMenuLink').off('click');
  $('#navbarDropdownMenuLink').on('click', function() {
    window.location.href = $(this).attr('href');
  });
});