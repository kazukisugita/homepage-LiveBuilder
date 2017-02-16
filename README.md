This package makes it easy to create homepage work using LiveReload, angularJs, etc.

## Features
- Shareable Header and Footer
- Simplify script and css
- LiveReload on developing

## Before Start
#### module require
npm
gulp

and check `package.json` is exist. then,`npm install`

## Shareable Header and Footer
You see these DOMs
```
<static-header></static-header>
<static-footer></static-footer>
```
in `index.html`. Those are custom DOMs by angularJS directive components. Module declaration is in `resources/assets/js/angular-static-directives.js`.
and DOMs content declaration is in `templates/`. These DOMs only applies within the DOMs that made the angularJS directive declaration `ng-app ="body"` (check `<body ng-app="body">` in `index.html`)

## Simplify script and css
Simplify depends on `gulp` and `laravel-elixir`. See `gulpfile.js`.
```javascript
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
```
This is very cool. Declarations which file to put multiple files together into a file.
When you generate files, `gulp` or `gulp --production`
( `--production` is option for file minifying )
- - -
`laravel-elixir` has `autoprefixer` as default which config is in `node_modules/laravel-elixir/Config.js`.
```javascript
/*
 |----------------------------------------------------------------
 | CSS3 Autoprefixing
 |----------------------------------------------------------------
 |
 | When working with any form of CSS, Elixir automatically runs
 | your file through a CSS autoprefixer, which automatically
 | adds or removes vendor-specific CSS3 prefixes. Useful!
 |
 */

autoprefix: {
    enabled: true,

    // https://www.npmjs.com/package/gulp-autoprefixer#api
    options:  {
        browsers: ['last 2 versions'],
        cascade: false
    }
},
```
## LiveReload on developing
Convenient LiveReload execution during development is `gulp watch`.
And see browser on `localhost:8000`. If you changed `declarations files in gulpfile.js`, browser will be changed soon and will be reloaded.

After developing, all files you need are in public directory.
