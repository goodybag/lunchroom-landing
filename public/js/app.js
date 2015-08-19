$(function(){

  function attachSkinApp (config) {
    config = config || {};
    config.intlTelUtilsScriptPath = config.intlTelUtilsScriptPath || "/dist/utils.js";

    $('[data-role="popover"]').popover();
    // @component:id checkout-form
    $('[name="card_number"]').payment('formatCardNumber');
    // @component:id checkout-form
    $('[name="card_cvv"]').payment('formatCardCVC');
    // @component:id checkout-form
    $('[name="phone"]').intlTelInput({
      autoFormat: true
    , utilsScript: config.intlTelUtilsScriptPath
    , preventInvalidNumbers: true
    });

    var checkoutValidator = validators.createCheckoutValidator(
      $('#section-checkout-info-validation-test .checkout-info')
    );

    $('.btn-validate').click( function( e ){
      checkoutValidator.validate();
    });

    $('#section-checkout-info-validation-test input').blur( function( e ){
      if ( ['checkbox', 'radio'].indexOf( e.target.type ) > -1 ) return;
      checkoutValidator.validate( e.target.name );
    });

    $('.checkout-info').each( function(){
      var $el = $(this);

      $el.find('[name="will_add_new_card"]').change( function( e ){
        var $wrapper = $el.find('.payment-method-wrapper');
        $wrapper.toggleClass( 'disabled', !e.target.checked );
        $wrapper.find('input').attr( 'disabled', !e.target.checked ? 'disabled' : null );
      });
    });

    $('[data-toggle="tooltip"]').tooltip();
  }

  // Allow app to skip auto-attachment on load by setting
  // 'window.autoAttachSkinApp = false' before laoding this script.
  if (
    typeof window.autoAttachSkinApp === "undefined" ||
    window.autoAttachSkinApp !== false
  ) {
    attachSkinApp();
  }
  window.attachSkinApp = attachSkinApp;

});