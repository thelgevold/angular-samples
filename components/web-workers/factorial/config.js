System.config({
    map: {
        'rxjs': '../node_modules/rxjs',

        '@angular/core': '../node_modules/@angular/core/bundles/core.umd.min.js',
        '@angular/common': '../node_modules/@angular/common/bundles/common.umd.min.js',
        '@angular/compiler': '../node_modules/@angular/compiler/bundles/compiler.umd.min.js',
        '@angular/platform-webworker': '../node_modules/@angular/platform-webworker/bundles/platform-webworker.umd.min.js',
        '@angular/platform-browser': '../node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': '../node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        '@angular/platform-webworker-dynamic': '../node_modules/@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.min.js',

        'factorial': 'factorial'

    },
    packages: {
        'factorial': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }

    }
})