'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');



gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)).pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('html/stylesheets'));
});

gulp.task('copy', function() {
  gulp.src(['node_modules/jquery/dist/jquery.min.js']).pipe(gulp.dest('html/scripts/'));
  gulp.src('node_modules/jquery.nicescroll/jquery.nicescroll.min.js').pipe(rename('nicescroll.js')).pipe(gulp.dest('html/scripts/'));
  gulp.src('node_modules/normalize.css/normalize.css').pipe(gulp.dest('html/stylesheets/'));
});