const {src, dest, task, series}= require('gulp');
var sass = require('gulp-sass');
var rm = require( 'gulp-rm' );
sass.compiler = require('node-sass');

task('copy', () => {
    return src("./index.html").pipe(dest("./dist"));
})

task('clean', () => {
  return src( 'dist/**/*', { read: false }).pipe( rm() )
})

task('styles', () => {
    return src('src/css/main/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
})
task("default", series("clean", "styles"))
