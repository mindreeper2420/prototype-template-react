var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var cssnano = require('cssnano');
var header = require('gulp-header');
var postcss = require('gulp-postcss');
var pkg = require('./package.json');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

//
// Set the banner content
// remove this if you do not want banners automatically added to your compiled files
//
var banner = ['/*!\n',
  ' * Dashboard Prototype - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2019-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' */\n',
  ''
].join('');

gulp.task('sass', function () {
  return gulp.src('sass/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// @ts-ignore
gulp.task('css', ['sass'], function () {
  const autoprefixer = require('autoprefixer')

  var plugins = [
    autoprefixer(),
    cssnano()
  ];
  return gulp.src(['./css/site.css', './css/base.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});
