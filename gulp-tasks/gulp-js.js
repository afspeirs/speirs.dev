import { dest, series, src } from 'gulp';

import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import del from 'del';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

import errorHandler from './gulp-error-handler';
import { paths } from './gulp.config';

export const jsClean = () => del(paths.build + paths.js);
export const jsFiles = () => {
	const env = process.env.NODE_ENV;

	// TODO - Bundle all files. Exclude dev.js from being moved if env === dev
	if (env === 'dev') {
		src(`${paths.src + paths.js}/dev.js`)
			.pipe(dest(paths.build + paths.js));
	}

	return browserify(`${paths.src + paths.js}main.js`, { debug: env === 'dev' })
		.transform(['babelify', { sourceMaps: true }])
		.bundle().on('error', errorHandler)
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(dest(paths.build + paths.js));
};

export default series(jsClean, jsFiles);
