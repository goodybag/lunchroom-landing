var utils = require('utils');
var $     = require('jquery');

/**
 * Creates an instance of CheckoutValidator
 *
 * Usage:
 *   var validator = validators.createCheckoutValidator( $('.checkout-form') );
 *
 *   validator.validate();
 * 
 * @param  {jQuery} $el     Context element
 * @param  {Object} options Options
 */
module.exports.createCheckoutValidator = function( $el, options ){
  options = utils.defaults( options || {}, {
    
  });

  return Object.create({
    options: options

    // Field names whose error messages are appended to the
    // .error-group[data-group-name]="payment-method" element
  , fieldsThatGoInPaymentMethodErrorGroup: [
      'payment_method', 'card_number', 'card_cvv'
    , 'card_expiration_month', 'card_expiration_year'
    ]

  , validators: [
      function name(){
        var $input = $el.find('[name="name"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ){
          return {
            field: 'name'
          , message: 'Name is required'
          };
        }
      }

    , function email(){
        var $input = $el.find('[name="email"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ){
          return {
            field: 'email'
          , message: 'Email is required'
          };
        }
      }

    , function phone(){
        var $input = $el.find('[name="phone"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ){
          return {
            field: 'phone'
          , message: 'Phone is required'
          };
        }
      }

    , function name_on_card(){
        if ( !this.willAddNewCard() ) return;

        var $input = $el.find('[name="card_member_name"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ){
          return {
            field: 'card_member_name'
          , message: 'Name is required'
          };
        }
      }

    , function card_number(){
        if ( !this.willAddNewCard() ) return;

        var val = $el.find('[name="card_number"]').val();

        if ( $.payment.validateCardNumber( val ) ) return;

        return {
          field: 'card_number'
        , message: 'Invalid card number'
        };
      }

    , function card_cvc(){
        if ( !this.willAddNewCard() ) return;

        var val = $el.find('[name="card_cvv"]').val();

        if ( $.payment.validateCardCVC( val ) ) return;

        return {
          field: 'card_cvv'
        , message: 'Invalid security code'
        };
      }

    , function card_expiration(){
        if ( !this.willAddNewCard() ) return;

        var val = [
          $el.find('[name="card_expiration_month"]').val()
        , $el.find('[name="card_expiration_year"]').val()
        ];

        if ( $.payment.validateCardExpiry( val[0], val[1] ) ) return;

        return {
          field: ['card_expiration_month', 'card_expiration_year']
        , message: 'Invalid card expiry'
        };
      }
    ]

  , getErrorElement: function( message ){
      return $('<div class="error-msg">' + message + '</div>');
    }

    /**
     * Validates the checkout form
     */
  ,  validate: function(){
      this.clear();
      this.displayErrors( this.getErrors() );
      return this;
    }

    /**
     * Given an array of errors, shows them in the DOM
     * @param  {Array} errors Array of errors
     */
  , displayErrors: function( errors ){
      errors.forEach( this.displayError.bind( this ) );
      return this;
    }

    /**
     * Gets an array of errors from the current state of the form
     * @return {Array} Errors list
     */
  , getErrors: function(){
      return this.validators
        .map( function( validator ){
          return validator.call( this );
        }.bind( this ))
        .filter( function( error ){
          return !!error;
        });
    }

    /**
     * Clears errors in the $el
     */
  , clear: function(){
      $el.find('.error').removeClass('error');
      $el.find('.error-msg').remove();
      return this;
    }

    /**
     * Performs the dom operations to display an error
     * @param  {Object} error The error object
     */
  , displayError: function( error ){
      if ( !error.field || !error.message ) return;

      var $error = this.getErrorElement( error.message );

      if ( !Array.isArray( error.field ) ){
        error.field = [ error.field ];
      }

      var fieldFinder = error.field
        .map( function( field ){
          return '[name="' + field + '"]';
        })
        .join(', ');

      var $formGroup = $el
        .find( fieldFinder )
        .closest('.form-group')
        .addClass('error');

      if ( error.message ){
        var fieldPMIntersection = utils.intersection( this.fieldsThatGoInPaymentMethodErrorGroup, error.field );

        if ( fieldPMIntersection.length === error.field.length ){
          $el.find('[data-error-group="payment_method"]').append( $error );

          if ( error.field === 'payment_method' ){
            $el.find('.payment-method-wrapper .form-group').addClass('error');
          }
        } else {
          $formGroup.find('label').after( $error );
        }
      }
    }

  , willAddNewCard: function(){
      return $('[name="will_add_new_card"]:checked').length > 0;
    }
  });
};