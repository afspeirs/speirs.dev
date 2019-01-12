const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const { paths } = require('../config');
const errHandle = require('../errHandle');

// Compiles css files
gulp.task('files:css', ['clean:css'], () => gulp
	.src(`${paths.src + paths.css}*.scss`)
	.pipe(plumber({ errorHandler: errHandle }))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(prefix())
	.pipe(cleanCSS())
	.pipe(sourcemaps.write())
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest(paths.build + paths.css)));
