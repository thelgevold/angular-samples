(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    defaultExtension: 'js',
    map: {
      'app': 'built-es5-commonjs/app',
      'demo-page': 'built-es5-commonjs',
      'components': 'built-es5-commonjs/components',
      'algorithms': 'built-es5-commonjs/algorithms',
     
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

      'rxjs': 'npm:rxjs'
    },
    packages: {
    
      app: {
        main: './main-jit.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      components: {
        defaultExtension: 'js'
      },
      algorithms: {
        defaultExtension: 'js'
      },
      'demo-page': {
        main: './demo-page.js',
        defaultExtension: 'js',
      }
    }
  });
})(this);