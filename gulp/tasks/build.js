const gulp = require('gulp');
const runSequence = require('run-sequence');

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', () => {
	runSequence(
		['set-production'],
		'files:img',
		'files:js',
		'files:css',
		'files:root',
		'files:handlebar',
	);
});
