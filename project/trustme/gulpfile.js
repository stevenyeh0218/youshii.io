var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
//var sourcemaps = require('gulp-sourcemaps');

// 建立預設 gulp task
gulp.task('default', function () {
    return gulp.watch('script/less/*.less', gulp.series('less'));
});

gulp.task('less', function () {
    return gulp.src('script/less/*.less')
        //        .pipe(sourcemaps.init())
        .pipe(less())
        //        .pipe(sourcemaps.write())
        .pipe(gulp.dest('script/css/'));
});
