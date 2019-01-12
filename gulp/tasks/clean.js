const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Cleans img folder
gulp.task('clean:img', () => del(paths.build + paths.img));
// Clean js folder
gulp.task('clean:js', () => del(paths.build + paths.js));
// Clean css folder
gulp.task('clean:css', () => del(paths.build + paths.css));
// Cleans files from root of build
gulp.task('clean:root', () => del([`${paths.build}*.*`, `!${paths.build}*.html`]));
// Clean assets folder
gulp.task('clean:assets', () => del(`${paths.build}assets`));
// Clean html files from root of build
gulp.task('clean:pages', () => del(`${paths.build}*.html`));
// Clean build folder
gulp.task('clean:build', () => del(paths.build));
