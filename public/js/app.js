window.$ = window.jQuery = require('jquery');

require('jquery-popover');
require('bootstrap/js/modal');
require('bootstrap/js/dropdown');
require('utils');

$(function(){
  $('[data-role="popover"]').popover();
});