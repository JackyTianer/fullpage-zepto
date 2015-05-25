var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');


gulp.task('lib', function () {
    gulp.src('app/lib/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('scripts', function () {
    gulp.src('app/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('jshint', function () {
    return gulp.src(['app/scripts/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jscs());
});


gulp.task('styles', function () {
    return gulp.src('app/styles/**/*.less')
        .pipe(less())
        //.pipe(concat('style.css'))
        //.pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/styles'))
        .pipe(concat('wx-all.min.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build', function () {
   gulp.run(['scripts', 'lib','styles', 'html', 'images']);
});

gulp.task('default', function () {
    //监听
    gulp.watch(['app/scripts/**/*.js', 'gulpfile.js'], ['jshint', 'lib', 'scripts']);
    gulp.watch(['app/styles/**/*.less'], ['styles']);
    gulp.watch(['app/images/**/*'], ['images'])
});