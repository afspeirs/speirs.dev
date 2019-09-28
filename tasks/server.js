/* eslint-disable import/prefer-default-export */

import { series, watch } from 'gulp';
import browserSync from 'browser-sync';

import { cssClean, cssFiles } from './css';
import { imgClean, imgFiles } from './img';
import { jsClean, jsFiles } from './js';
import { pagesClean, pagesFiles } from './pages';
import { rootClean, rootFiles } from './root';

import { paths, settings } from '../gulp.config';

const css = series(cssClean, cssFiles);
const img = series(imgClean, imgFiles);
const js = series(jsClean, jsFiles);
const pages = series(pagesClean, pagesFiles);
const root = series(rootClean, rootFiles);

export const server = () => {
	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: settings.index,
		},
		injectChanges: false,
		// Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
		ghostMode: settings.ghostMode,
		// Force HTTPS
		https: settings.https,
		// Don't show any notifications in the browser.
		notify: false,
		// Change the port from the default
		port: settings.port,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: settings.reloadDebounce,
	});

	watch(`${paths.src + paths.img}**/*`, img).on('change', browserSync.reload);
	watch(`${paths.src + paths.js}**/*`, js).on('change', browserSync.reload);
	watch(`${paths.src + paths.css}**/*`, css).on('change', browserSync.reload);
	watch(`${paths.src + paths.data}**/*`, pages).on('change', browserSync.reload);
	watch(`${paths.src}templates/**/*.hbs`, pages).on('change', browserSync.reload);
	watch(`${paths.src}*.*`, root).on('change', browserSync.reload);
	watch(`${paths.helpers}**/*.js`, pages).on('change', browserSync.reload);
};
