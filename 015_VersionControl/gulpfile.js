const gulp = require('gulp');
const uglify = require('gulp-uglify');

function js() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
}

function defaultTask(cb) {
  js();
  cb();
}

exports.default = defaultTask;