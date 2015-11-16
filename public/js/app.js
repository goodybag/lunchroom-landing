$(function(){

  function attachSkinApp (config, apiConsumer) {
    config = config || {};
    if (typeof config.initGeneric === "undefined") {
      config.initGeneric = true;
    }
    if (typeof config.initSkinDev === "undefined") {
      config.initSkinDev = true;
    }

    if (typeof config.intlTelUtilsScriptPath === "undefined") {
      config.intlTelUtilsScriptPath = config.intlTelUtilsScriptPath || "/dist/utils.js";
    }

    function initGeneric (consumerApi, withinElement) {

      // Generic helpers that can always attach to any matched elements.

      $('[data-role="popover"]', withinElement).popover();
      // @component:id checkout-form
      $('[name="card_number"]', withinElement).payment('formatCardNumber');
      // @component:id checkout-form
      $('[name="card_cvv"]', withinElement).payment('formatCardCVC');
      // @component:id checkout-form
      $('[name="phone"]', withinElement).intlTelInput({
        autoFormat: true
      , utilsScript: config.intlTelUtilsScriptPath
      , preventInvalidNumbers: true
      });

      $('.checkout-info', withinElement).each( function(){
        var $el = $(this);

        $el.find('[name="will_add_new_card"]').change( function( e ){
          var $wrapper = $el.find('.payment-method-wrapper');
          $wrapper.toggleClass( 'disabled', !e.target.checked );
          $wrapper.find('input').attr( 'disabled', !e.target.checked ? 'disabled' : null );
        });
      });

      $('[data-toggle="tooltip"]', withinElement).tooltip();

    }

    function initSkinDev (consumerApi) {

      // Helpers to animate skin for development and showcase how
      // to use APIs to interact with skin.

      var checkoutValidator = consumerApi.validators.createCheckoutValidator(
        $('#section-checkout-info-validation-test .checkout-info')
      );

      $('.btn-validate').click( function( e ){
        checkoutValidator.validate();
      });

      consumerApi.monitors.createCheckoutMonitor(
        $('#section-checkout-info-validation-test')
      );
    }


    var consumerApi = {
      validators: window.validators,
      monitors: {
        createSignupMonitor: function (formElement) {

          // TODO: Validate email as well.

          $('[name="phone"]', formElement).intlTelInput({
            autoFormat: true
          , utilsScript: config.intlTelUtilsScriptPath
          , preventInvalidNumbers: true
          });
        },
        createCheckoutMonitor: function (formElement) {

          var checkoutValidator = consumerApi.validators.createCheckoutValidator(
            $('.checkout-info', formElement)
          );

          $('input', formElement).blur( function( e ){
            if ( ['checkbox', 'radio'].indexOf( e.target.type ) > -1 ) return;

            if ( e.target.name === 'card_expiration_month' ) return;
            if ( e.target.name === 'card_expiration_year' ){
              return checkoutValidator.validate('card_expiration');
            }

            checkoutValidator.validate( e.target.name );
          });

          initGeneric(consumerApi, formElement);
        }
      }
    };


    if (config.initGeneric) {
      initGeneric(consumerApi, $('body'));
    }
    if (config.initSkinDev) {
      initSkinDev(consumerApi);
    }

    if (apiConsumer) {
      apiConsumer(consumerApi);
    }
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