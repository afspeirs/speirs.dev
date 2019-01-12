const gulp = require('gulp');

gulp.task('set-production', () => {
	global.production = true;
});
