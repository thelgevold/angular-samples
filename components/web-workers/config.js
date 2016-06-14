System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    map: {
        'london': './london',
        'newyork': './new-york',
        'la': 'la',
        '@angular': 'https://cdn.rawgit.com/angular',
        '@angular/core': 'https://cdn.rawgit.com/angular/core-builds',
        '@angular/common': 'https://cdn.rawgit.com/angular/common-builds',
        '@angular/compiler': 'https://cdn.rawgit.com/angular/compiler-builds',
        '@angular/platform-browser': 'https://cdn.rawgit.com/angular/platform-browser-builds',

        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6'
    },
    //packages defines our app package
    packages: {
        london: {
            main: './london-main.ts',
            defaultExtension: 'ts'
        },
        newyork: {
            main: './new-york-main.ts',
            defaultExtension: 'ts'
        },
        la: {
            main: './la-main.ts',
            defaultExtension: 'ts'
        },
        ny: {
            main: './new-york-main.ts',
            defaultExtension: 'ts'
        },
        la: {
            main: './la-main.ts',
            defaultExtension: 'ts'
        },
        '@angular/core': {
            main: 'master/bundles/core.umd.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'master/bundles/compiler.umd.js',
            defaultExtension: 'js'
        },
        '@angular/common': {
            main: 'master/bundles/common.umd.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'master/bundles/platform-browser-dynamic.umd.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'master/bundles/platform-browser.umd.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});