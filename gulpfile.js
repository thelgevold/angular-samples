var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('bundle', function() {
    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder();

    builder.loadConfig('./system.config.js')
        .then(function(){
            var outputFile = 'dist/bundle.js';
            return builder.buildStatic('app', outputFile, {
                minify: true,
                mangle: true,
                rollup: false
            });
        })
        .then(function(){
            console.log('bundle built successfully!');
        });
});

gulp.task('es5', function () {
    return gulp.src('dist/temp.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
