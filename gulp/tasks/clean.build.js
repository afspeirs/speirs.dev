const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Clean build folder
gulp.task('clean:build', () => del(paths.build));
