var router = module.exports = require('express').Router();

router.get( '/', function( req, res ){

  res.send("<ul>" + [
  	'/landing',
  	'/admin/kitchen-sink',
  	'/pages/menu',
  	'/pages/login',
  	'/pages/register',
  	'/pages/checkout',
  	'/emails/menu',
  	'/emails/lunch-arrival',
  	'/emails/receipt'
  ].map(function (uri) {
  	return '<li><a href="' + uri + '">' + uri + '</a></li>';
  }).join("\n") + "</ul>");

});

router.get( '/:id', function( req, res ){
  res.send( 'This is lunchroom ' + req.params.id );
});