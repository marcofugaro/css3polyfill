var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var insert = require('gulp-insert');

var info = "/**" + "\n" +
        " *  CSS3polyfill - v1.0.0" + "\n" +
        " *  A CSS3 polyfill collection for IE8" + "\n" +
        " *  https://github.com/marcofugaro/css3polyfill" + "\n" +
        " **/" + "\n";

gulp.task('scripts', function() { 
    return gulp.src('css3polyfill.js')  
        .pipe(uglify())
        .pipe(insert.prepend(info))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('.')) 
});

gulp.task('default', ['scripts']);