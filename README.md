This package makes it easy to create homepage work using LiveReload, angularjs, etc.

## features
- Shareable Header and Footer
- Simplify script and css
- LiveReload on developing

## before Start
#### module require
npm
gulp

and check 'package.json' is exist. then,`npm install`

### Shareable Header and Footer
You see these DOMs
```
<static-header></static-header>
<static-footer></static-footer>
```
in **index.html**. Those are custom DOMs by angularJS directive components. Module declaration is in **resources/assets/js/angular-static-directives.js**.
and DOMs content declaration is in **templates/**. These DOMs only applies within the DOMs that made the angularJS directive declaration **ng-app ="body"** (check ***<body ng-app="body">*** in index.html)

### Simplify script and css
Simplify depends on **gulp** and **laravel-elixir**. See **gulpfile.js**.
```
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

### LiveReload on developing
Convenient LiveReload execution during development is `gulp watch`.
And see browser on `localhost:8000`. If you changed **declarations files in gulpfile.js**, browser will be changed soon and will be reloaded.

After developing, all files you need are in public directory.
