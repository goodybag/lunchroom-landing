var fs = require('fs');
var path = require('path');
var hbs = require('hbs');

module.exports = function( dir, prefix ){
  var ext = '.hbs';

  prefix = prefix || '';

  fs.readdirSync( dir )
    .filter( function( file ){
      return path.extname( file ) === ext;
    })
    .forEach( function( file ){
      hbs.registerPartial(
        prefix + path.basename( file, ext ).replace( /\-/g, '_' )
      , fs.readFileSync( path.join( dir, file ) ).toString()
      );
    });
};