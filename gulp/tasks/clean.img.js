const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Cleans img folder
gulp.task('clean:img', () => del(paths.build + paths.img));
