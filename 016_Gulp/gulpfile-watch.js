const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

const js_path = ['./src/js/**/*.js'];

function js() {
  return gulp
    .src(js_path)
    // .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/js'));
}

function style() {
  return gulp
    .src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
}

function image() {
  return gulp 
    .src(['./src/img/**/*.jpg', './src/img/**/*.gif', './src/img/**/*.png'])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./build/img/'));
}

function watch() {
  gulp.watch(js_path, gulp.parallel(js));
}

exports.default = gulp.parallel(js, watch);