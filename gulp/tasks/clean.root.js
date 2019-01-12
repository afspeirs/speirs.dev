const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Cleans files from root of build
gulp.task('clean:root', () => del([`${paths.build}*.*`, `!${paths.build}*.html`]));
