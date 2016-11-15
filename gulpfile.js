'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');



gulp.task('sass', function() {
  return gulp.src('assets/sass/**/*.scss')
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
  /*
  gulp.src('./node_modules/datatables.net/js/jquery.dataTables.js').pipe(rename('dataTables.js')).pipe(gulp.dest('./webroot/scripts/'));
  gulp.src('./node_modules/datatables.net-src/css/jquery.dataTables.scss').pipe(rename('_dataTables.scss')).pipe(gulp.dest('./sass/'));
  gulp.src('./node_modules/datatables.net-src/images/sort_asc.png').pipe(gulp.dest('./webroot/images/'));
  gulp.src('./node_modules/datatables.net-src/images/sort_asc_disabled.png').pipe(gulp.dest('./webroot/images/'));
  gulp.src('./node_modules/datatables.net-src/images/sort_both.png').pipe(gulp.dest('./webroot/images/'));
  gulp.src('./node_modules/datatables.net-src/images/sort_desc.png').pipe(gulp.dest('./webroot/images/'));
  gulp.src('./node_modules/datatables.net-src/images/sort_desc_disabled.png').pipe(gulp.dest('./webroot/images/'));
  gulp.src('./node_modules/remodal/src/jquery.modal.js').pipe(rename('modal.js')).pipe(gulp.dest('./webroot/scripts/'));
  gulp.src('./node_modules/jquery-modal/jquery.modal.css').pipe(rename('modal.css')).pipe(gulp.dest('./webroot/stylesheets/'));
  gulp.src('./node_modules/remodal/src/remodal.js').pipe(gulp.dest('./webroot/scripts/'));
  gulp.src('./node_modules/remodal/src/remodal.css').pipe(gulp.dest('./webroot/stylesheets/'));
  gulp.src('./node_modules/remodal/src/remodal-default-theme.css').pipe(gulp.dest('./webroot/stylesheets/'));
  */
  gulp.src('node_modules/normalize.css/normalize.css').pipe(gulp.dest('html/stylesheets/'));
});