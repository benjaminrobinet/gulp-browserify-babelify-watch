let gulp = require("gulp");
let rename = require("gulp-rename");
let bro = require("gulp-bro");
let sourcemaps = require("gulp-sourcemaps");
let babelify = require("babelify");

gulp.task('build', function() {
    gulp.src('src/js/app.js')
        .pipe(sourcemaps.init())
        .pipe(bro({
            transform: [
                babelify,
            ]
        }))
        .pipe(rename('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', ['build'], function () {
    return gulp.watch('src/js/app.js', ['build'])
});
