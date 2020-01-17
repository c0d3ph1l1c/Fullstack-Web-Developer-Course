const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

function js() {
  return gulp
    .src(['./src/js/**/*.js'])
    // .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/js'));
}

exports.default = js;