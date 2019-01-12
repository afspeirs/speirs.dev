const gulp = require('gulp');
const del = require('del');
const { paths } = require('../config');

// Clean html files from root of build
gulp.task('clean:pages', () => del(`${paths.build}*.html`));
