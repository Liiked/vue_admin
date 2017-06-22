var gulp = require('gulp');
var sass = require('gulp-sass')
var uglify = require('gulp-uglify');
var minicss = require('gulp-minify-css')
var browserSync = require('browser-sync').create();
// var clean = require('gulp-clean')
var reload = browserSync.reload;

// 处理sass文件
gulp.task('sass', function() {
    gulp.src('dev/scss/*.scss')
        .pipe(sass())
        .pipe(minicss())
        .pipe(gulp.dest('server/build/css'))
})

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./server/build"
        }
    });
});

gulp.task('jsmin', function() {
    gulp.src('dev/js/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('server/build/js'))
})

gulp.task('movehtml', function() {
    gulp.src('dev/index.html')
        .pipe(gulp.dest('server/build'))
})

// watch任务
gulp.task('watch', ['sass', 'jsmin'], function() {
    browserSync.init({
        // server: "./server/build"
        proxy: "localhost:8088"
    });
    gulp.watch("dev/scss/*.scss", ['sass']).on('change', reload);
    gulp.watch("dev/js/*.js", ['jsmin']).on('change', reload);
    gulp.watch("dev/*.html", ['movehtml']).on('change', reload);
})

gulp.task('build', function() {

})