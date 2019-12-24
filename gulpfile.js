const {src, dest, task, series, watch, parallel}= require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var rm = require( 'gulp-rm' );
sass.compiler = require('node-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
var px2rem = require('gulp-smile-px2rem');
var gcmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
const env = process.env.NODE_ENV;
const styles = [
   // './node_modules/normalize.css/normalize.css',
    './src/css/main.scss'
]
task('copy:js', () => {
    return src("./src/javascript/*.js")
    .pipe(dest("./dist/javascript"))
    .pipe(reload({stream: true}));
})
task('copy:img', () => {
    return src("./src/pictures/**/*")
    .pipe(dest("./dist/pictures"))
    .pipe(reload({stream: true}));
})
task('copy:html', () => {
    return src("./src/*.html")
    .pipe(dest("./dist"))
    .pipe(reload({stream: true}));
})

task('clean', () => {
  return src( 'dist/**/*', { read: false }).pipe( rm() )
})

task('styles', () => {
    return src(styles)
    .pipe(gulpif(env=='dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    //.pipe(px2rem())
    .pipe(gulpif(env=='dev',autoprefixer({
        cascade: false
    })))
    .pipe(gulpif(env=='prod',gcmq()))
    .pipe(gulpif(env=='prod',cleanCSS()))
    .pipe(gulpif(env=='dev',sourcemaps.write()))
    .pipe(dest('./dist'));
})

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});
task('watch', ()=> {
    watch('./src/css/**/*.scss', series("styles"));
    watch('./src/*.html', series("copy:html"));
    watch('./src/javascript/*.js', series("copy:js"));
    watch('./src/pictures/*', series("copy:img"));
});


task("default", series("clean", 
    parallel("copy:html", "copy:js", "copy:img", "styles"),
    parallel('watch', "server")
    )
);

task("build", 
series(
    "clean", 
    parallel("copy:html", "copy:js", "copy:img", "styles")
    )
);
