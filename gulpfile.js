var elixir = require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*

    ./node_modules/bootstrap/scss/bootstrap.scss
    ./node_modules/jquery/dist/jquery.min.js
    ./node_modules/tether/dist/js/tether.min.js
    ./node_modules/bootstrap/dist/js/bootstrap.min.js

    ./node_modules/scrollreveal/dist/scrollreveal.min.js
    ./node_modules/@tweenjs/tween.js/src/Tween.js
    ./node_modules/waypoints/lib/jquery.waypoints.min.js

     .scripts([
        scrollreveal,
        Tween.js,
        waypoints.js,
        flickity,
        rellax,
     ], 'public/js/visuals.js')

*/

elixir(function(mix) {
    mix
        .sass([
            './node_modules/bootstrap/scss/bootstrap.scss',
            'components.scss',
            'styles.scss'
        ], 'public/css/styles.css')
        .scripts([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/tether/dist/js/tether.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            'angular.min.js',
            'angular-static-directives.js'
        ], 'public/js/fundamentals.js')
        .browserSync({
            proxy: 'localhost:8000'
        });
});
