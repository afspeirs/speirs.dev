const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Clean js folder
gulp.task('clean:js', () => del(paths.build + paths.js));
