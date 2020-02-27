import { watch } from 'gulp';
import browserSync from 'browser-sync';

import css from './gulp-css';
import img from './gulp-img';
import js from './gulp-js';
import pages from './gulp-pages';
import root from './gulp-root';

import { paths, settings } from './gulp.config';

export const server = () => {
	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			// Set the start page. Defaults to index.html
			index: settings.index,
		},
		injectChanges: false,
		// Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
		ghostMode: settings.ghostMode || true,
		// Force HTTPS
		https: settings.https || false,
		// Don't show any notifications in the browser.
		notify: false,
		// Change the port from the default
		port: settings.port || 3000,
		// Wait X seconds after a reload event before allowing more.
		reloadDebounce: settings.reloadDebounce || 0,
	});

	watch(`${paths.src}*.*`, root).on('change', browserSync.reload);
	watch(`${paths.helpers}**/*.js`, pages).on('change', browserSync.reload);
	watch(`${paths.src + paths.css}**/*`, css).on('change', browserSync.reload);
	watch(`${paths.src + paths.data}**/*`, pages).on('change', browserSync.reload);
	watch(`${paths.src + paths.img}**/*`, img).on('change', browserSync.reload);
	watch(`${paths.src + paths.js}**/*`, js).on('change', browserSync.reload);
	watch(`${paths.src}templates/**/*.hbs`, pages).on('change', browserSync.reload);
	watch('./.eleventy.js', pages).on('change', browserSync.reload);
};

export default server;
