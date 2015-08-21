var utils = require('utils');
var $     = require('jquery');

var regs = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i
};

/**
 * Creates an instance of CheckoutValidator
 *
 * Usage:
 *   var validator = validators.createCheckoutValidator( $('.checkout-form') );
 *
 *   validator.validate();
 *
 * Validators:
 *
 *  Validators are functions that return either `null` for no error,
 *  or an error object. You can add new validators by adding a function
 *  to the validators array.
 *
 * Error Objects:
 *
 *  {
 *    // A single or list of form field names
 *    field: string|string[]
 *    // The error message associated
 *    message: string
 *  }
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

  , groups: {
      payment_method: {
        validators: [ 'card_number', 'card_cvv', 'card_expiration' ]
      , fields: [
          'payment_method', 'card_number', 'card_cvv'
        , 'card_expiration_month', 'card_expiration_year'
        ]
      }
    }

  , validators: {
      name: function name(){
        var $input = $el.find('[name="name"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ){
          return {
            field: 'name'
          , message: 'Name is required'
          };
        }
      }

    , email: function email(){
        var $input = $el.find('[name="email"]');
        if ( $input.length === 0 ) return;

        var val = $input.val();

        if ( val.length === 0 ){
          return {
            field: 'email'
          , message: 'Email is required'
          };
        }

        if ( !regs.email.test( val ) ){
          return {
            field: 'email'
          , message: 'Invalid email'
          };
        }
      }

    , phone: function phone(){
        var $input = $el.find('[name="phone"]');
        if ( $input.length === 0 ) return;

        if ( $input.val().length === 0 ) return;

        if ( !$input.intlTelInput('isValidNumber') ){
          return {
            field: 'phone'
          , message: 'Invalid phone number'
          };
        }
      }

    , card_member_name: function card_member_name(){
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

    , card_number: function card_number(){
        if ( !this.willAddNewCard() ) return;

        var val = $el.find('[name="card_number"]').val();

        if ( $.payment.validateCardNumber( val ) ) return;

        return {
          field: 'card_number'
        , message: 'Invalid card number'
        };
      }

    , card_cvv: function card_cvv(){
        if ( !this.willAddNewCard() ) return;

        var val = $el.find('[name="card_cvv"]').val();

        if ( $.payment.validateCardCVC( val ) ) return;

        return {
          field: 'card_cvv'
        , message: 'Invalid security code'
        };
      }

    , card_expiration: function card_expiration(){
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
    }

  , getErrorElement: function( error ){
      var $el = $('<div class="error-msg" />');
      $el.attr( 'data-field', error.field );
      $el.html( error.message );
      return $el;
    }

    /**
     * Validates the checkout form
     */
  // ,  validate: function(){
  //     this.clear();
  //     this.displayErrors( this.getErrors() );
  //     return this;
  //   }

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
      return Object
        .keys( this.validators )
        .map( function( k ){
          return this.validators[ k ].call( this );
        }.bind( this ))
        .filter( function( error ){
          return !!error;
        });
    }

    /**
     * Clears errors in the $el
     */
  , clear: function( field ){
      var $context = $el;

      if ( field && this.fieldInGroup( 'payment_method', field ) ){
        $el.find('.error-msg[data-field="' + field + '"]').remove();
      }

      if ( field ){
        $context = this.getFormGroupForField( field );
        $context.removeClass('error');
      } else {
        $context.find('.error').removeClass('error');
      }

      $context.find('.error-msg').remove();
      $context
        .find('.state-success, .state-error')
        .removeClass('state-success')
        .removeClass('state-error');

      return this;
    }

    /**
     * Performs the dom operations to display an error
     * @param  {Object} error The error object
     */
  , displayError: function( error ){
      if ( !error || !error.field || !error.message ) return;

      var $error = this.getErrorElement( error );

      if ( !Array.isArray( error.field ) ){
        error.field = [ error.field ];
      }

      var $formGroup = this.getFormGroupForField( error.field );
      $formGroup.addClass('error');

      if ( error.message ){
        if ( this.fieldInGroup( 'payment_method', error.field ) ){
          var $group = $el.find('[data-error-group="payment_method"]');

          if ( $group.find('[data-field="' + error.field + '"]').length === 0 ){
            $group.append( $error );
          }

          if ( error.field === 'payment_method' ){
            $el.find('.payment-method-wrapper .form-group').addClass('error');
          }
        } else {
          $formGroup.find('label').after( $error );
        }
      }
    }

  , willAddNewCard: function(){
      return $el.find('[name="will_add_new_card"]:checked').length > 0;
    }

  , getFormGroupForField: function( field ){
      var fieldFinder = ( Array.isArray( field ) ? field : [ field ] )
        .map( function( name ){
          return '[name="' + name + '"]';
        })
        .join(', ');

      return $el
        .find( fieldFinder )
        .closest('.form-group');
    }

  , validate: function( field ){
      if ( !field ){
        this.clear();

        return Object
          .keys( this.validators )
          .map( function( v ){
            return this.validators[ v ].call( this );
          }.bind( this ))
          .filter( function( error ){
            return !!error;
          })
          .forEach( this.displayError.bind( this ) );

        // var validate = this.validate.bind( this );

        // return $el.find('[name]').each( function(){
        //   if ( this.disabled ) return;
        //   validate( this.name );
        // });
      }

      // if ( this.fieldInGroup( 'payment_method', field ) ){
      //   this.displayError( );
      //   return this;
      // }

      if ( !(field in this.validators) ){
        return this;
      }

      var error = this.validators[ field ].call( this );

      if ( this.fieldInGroup( 'payment_method', field ) ){
        console.log('field is in payment_metod group');
        if ( !error ){
          console.log('clearing field', field);
          return this.clear( field );
        }

        return this.displayError( error );
      }

      var $formGroup = this.getFormGroupForField( field );
      var $indicator = $formGroup.find('.form-group-indicator');

      this.clear( field );

      if ( !$indicator.length ){
        $indicator = $('<div class="form-group-indicator" />');
        $formGroup.find('[name]').before( $indicator );
      }

      setTimeout(function(){
        if ( error ){
          $indicator.addClass('state-error');
          this.displayError( error );
        } else {
          $indicator.addClass('state-success');
          $formGroup.removeClass('error');
        }
      }.bind( this ), 0);

      return this;
    }

  , setFieldSuccessFailState: function( field, state ){

    }

  , fieldInGroup: function( group, field ){
      return utils.intersection(
        this.groups[ group ].fields, Array.isArray( field ) ? field : [ field ]
      ).length > 0;
    }
  });
};