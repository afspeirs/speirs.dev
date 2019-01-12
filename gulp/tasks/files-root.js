const gulp = require('gulp');
const { paths } = require('../config');

// Moves root files
gulp.task('files:root', ['clean:root'], () => gulp
	.src([`${paths.src}*.*`])
	.pipe(gulp.dest(paths.build)));
