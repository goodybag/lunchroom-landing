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

  var checkoutValidator = validators.createCheckoutValidator(
    $('#section-checkout-info-validation-test .checkout-info')
  );

  $('.btn-validate').click( function( e ){
    checkoutValidator.validate();
  });

  $('.checkout-info').each( function(){
    var $el = $(this);

    $el.find('[name="will_add_new_card"]').change( function( e ){
      $el.find('.payment-method-wrapper').toggleClass( 'disabled', e.checked );
    });
  });
});