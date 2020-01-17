const gulp = require('gulp');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const js_path = ['./src/js/**/*.js'];

function js() {
  return gulp
    .src(js_path)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(livereload());
}

function watch() {
  livereload.listen();

  gulp.watch(js_path, gulp.parallel(js));

  gulp.watch([
    './1.html',
    ...js_path
  ]).on('change', (path, stats) => {
    livereload.changed(path);
  });
}

exports.default = gulp.parallel(js, watch);