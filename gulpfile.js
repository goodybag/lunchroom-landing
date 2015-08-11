var fs        = require('fs');
var gulp      = require('gulp');
var transform = require('vinyl-transform');
var alias     = require('alias-module');
var pkg       = require('./package.json');
var config    = require('./config');
gulp.util     = require('gulp-util');

var server;

var scripts = {
  public: ['./public/js/*.js', './public/js/**/*.js']
, server: ['*.js', './config/*.js', './server/*.js', './server/**/*.js', './server/**/**/*.js']
};

scripts.lint = scripts.public.concat(['*.js', 'test/*.js']);
scripts.lint = scripts.lint.concat( scripts.server );

gulp.task( 'compile-frontend-js', function(){
  return require('browserify')({
      debug: true
    })
    .add('./public/js/app.js')
    .bundle()
    .pipe( fs.createWriteStream('./public/dist/app.js') );
});

gulp.task( 'less', function(){
  return gulp.src('less/app.less')
    .pipe( require('gulp-less')() )
    .pipe( gulp.dest('public/dist') );
});

gulp.task( 'less-landing', function(){
  return gulp.src('less/landing-page.less')
    .pipe( require('gulp-less')() )
    .pipe( gulp.dest('public/dist') );
});

gulp.task( 'less-kitchen-sink', function(){
  return gulp.src('less/kitchen-sink.less')
    .pipe( require('gulp-less')() )
    .pipe( gulp.dest('public/dist') );
});

gulp.task( 'lint', function(){
  return gulp.src( scripts.lint )
    .pipe( require('gulp-jshint')( pkg.jshint || {} ) )
    .pipe( require('gulp-jshint').reporter('default') );
});

gulp.task( 'watch', function(){
  gulp.watch( scripts.lint, ['lint'] );
  gulp.watch( scripts.public, [ 'alias-modules', 'compile-frontend-js'] );
  gulp.watch( ['less/*.less', 'less/**/*.less'], ['less', 'less-landing', 'less-kitchen-sink'] );
  gulp.watch( ['server/*.js', 'server/**/*.js', 'server/**/**/*.js'], [ 'stop-server', 'server'] );
});

gulp.task( 'server', function( done ){
  var port = (process.env.PORT && parseInt(process.env.PORT)) || config.http.port;
  server = require('./server').listen( port, function( error ){
    if ( error ) return done( error );

    gulp.util.log( 'Server started on port ' + gulp.util.colors.blue( config.http.port ) );

    done();
  });
});

gulp.task( 'stop-server', function( done ){
  gulp.util.log('Stopping server');
  server.close( done );
});

gulp.task( 'create-tables', function( done ){
  require('./db').dirac.createTables( done );
});

gulp.task( 'alias-modules', function(){
  alias( 'utils', __dirname + '/lib/utils/server.js' );
});

gulp.task( 'fonts', function(){
  return gulp.src('./node_modules/font-avenir/font/*')
    .pipe( gulp.dest('./public/dist/font/avenir') );
});

gulp.task( 'icon-font', function(){
  return gulp.src('./node_modules/gb-icon-font/font/*')
    .pipe( gulp.dest('./public/dist/font/gb-icon-font') );
});

gulp.task( 'less-modules', function(){
  return gulp.src('./node_modules/diet-tags/img/*')
    .pipe( gulp.dest('./public/dist/img') );
});

gulp.task( 'build', [
  'lint', 'less', 'less-landing', 'less-kitchen-sink', 'less-modules'
, 'fonts', 'icon-font', 'alias-modules'
, 'compile-frontend-js', 'create-tables'
]);

gulp.task( 'default', [ 'build', 'server', 'watch' ] );