$(function(){
  $('[data-role="popover"]').popover();
  // @component:id checkout-form
  $('[name="card_number"]').payment('formatCardNumber');
  // @component:id checkout-form
  $('[name="card_cvv"]').payment('formatCardCVC');
  // @component:id checkout-form
  $('[name="phone"]').intlTelInput({
    autoFormat: true
  , utilsScript: '/dist/utils.js'
  , preventInvalidNumbers: true
  });
});