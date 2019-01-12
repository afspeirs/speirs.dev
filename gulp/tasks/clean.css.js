const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Clean css folder
gulp.task('clean:css', () => del(paths.build + paths.css));
