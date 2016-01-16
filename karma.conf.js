'use strict';

module.exports = function(config) {
    config.set({

        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/traceur/bin/traceur-runtime.js',
            'node_modules/traceur/bin/traceur.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',

            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false },

            { pattern: 'components/**/*.js', included: false, watched: true },

            'test-main.js'
        ],

        exclude: [
            'node_modules/angular2/**/*_spec.js'
        ],

        reporters: ['dots'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,
        autoWatch: true,

        browsers: [
            'PhantomJS2'
        ],

        singleRun: false
    });
};
