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

elixir(function(mix) {
    mix
        .sass([
            'components.scss',
            'styles.scss'
        ], 'public/css/styles.css')
        .scripts([
            'angular.min.js',
            'angular-static-directives.js'
        ], 'public/js/angular.js')
        .browserSync({
            proxy: 'localhost:8000'
        });
});