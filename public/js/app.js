$(function(){
  $('[data-role="popover"]').popover();
  $('[name="card_number"]').payment('formatCardNumber');
  $('[name="card_cvv"]').payment('formatCardCVC');
});