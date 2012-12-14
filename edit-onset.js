(function ($) {

  var $editLink = $('#toolbar-administration li.shortcuts').clone();
  $editLink.after($('#toolbar-administration li.shortcuts').addClass('edit even').next().removeClass('even').addClass('odd');
  $editLink.find('a').attr('href', '/administration/edit').attr('id', 'toolbar-tab-edit');

}(jQuery));
