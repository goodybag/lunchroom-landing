/**
 * config.http
 */

module.exports = {
  port:     (process.env.PORT && parseInt(process.env.PORT)) || 3010
, host:     'localhost'
, protocol: 'http'

, get baseUrl(){
    return [
      this.protocol
    , '://'
    , this.host
    , this.port && this.port !== 80 ? ':' + this.port : ''
    ].join('');
  }
};

if ( process.env.GB_ENV === 'production' ){
  delete module.exports.port;
  module.exports.host = 'lunchroom.goodybag.com';
}
