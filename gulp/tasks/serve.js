const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const { paths } = require('../config');

// Watches css, js and handlebar files (using Browsersync) then compiles them to the build folder
gulp.task('serve', () => {
	runSequence(
		'files:img',
		'files:js',
		'files:css',
		'files:root',
		'files:handlebar',
	);

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: 'index.html',
		},
		// Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
		ghostMode: false,
		// Don't show any notifications in the browser.
		notify: false,
		// Change the port from the default
		port: 3000,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: 2000,
	});

	// Watch files
	gulp.watch(`${paths.src + paths.img}**/*`, ['files:img']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.js}**/*`, ['files:js']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.css}**/*`, ['files:css']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.data}**/*`, ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(`${paths.src}templates/**/*.hbs`, ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(`${paths.src}*.*`, ['files:root']).on('change', browserSync.reload);
	gulp.watch(`${paths.helpers}**/*.js`, ['files:handlebar']).on('change', browserSync.reload);
});
