var app = module.exports = require('express').Router();
var inlineCss = require('inline-css');
var config = require('../../../config');
var m = require('../../middleware');
var data = require('../../data/dummy');

var registerPartials = require('../../../lib/partials-registrar').bind(
  null, __dirname + '/views/partials/', 'email_'
);

registerPartials();

/**
 * Given a view in this routers ./views dir, render the view
 * with the layout in this routers ./views dir, and inlines
 * the css
 * @param  {String} view View path relative to ./views
 */
var renderEmail = function( view ){
  var viewPath = [ __dirname, 'views', view ].join('/');

  var viewOptions = {
    layout: 'routes/emails/views/layout'
  };

  var inlineCssOptions = {
    url: config.http.baseUrl
  };

  return function( req, res ){
    res.render( viewPath, viewOptions, function( error, html ){
      if ( error ){
        console.error( 'res.render', error );
        return res.status(500).send( error );
      }

      inlineCss( html, inlineCssOptions, function( error, result ){
        if ( error ){
          console.error( 'inlineCss', error );
          return res.status(500).send( error );
        }

        res.send( result );
      });
    });
  };
};

app.use( function( req, res, next ){
  registerPartials();
  return next();
});

app.get( '/menu'
, m.locals({
    items: data.items
  , itemRows: data.items.reduce( function( curr, item, i ){
                if ( i % 2 === 0 ){
                  curr.push([ item ]);
                } else {
                  curr[ curr.length - 1 ].push( item );
                }

                return curr;
              }, [] )
  })
, renderEmail('menu')
);

app.get( '/lunch-arrival'
, m.locals({
    location: '1st Floor Waiting Area'
  })
, renderEmail('lunch-arrival')
);

app.get( '/receipt'
, m.locals({
    order: data.order
  })
, renderEmail('receipt')
);