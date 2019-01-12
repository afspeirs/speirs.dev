const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Clean assets folder
gulp.task('clean:assets', () => del(`${paths.build}assets`));
