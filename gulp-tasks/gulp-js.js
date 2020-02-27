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
	if (global.env === 'dev') {
		src(`${paths.src + paths.js}/modules/debug.js`)
			.pipe(dest(paths.build + paths.js));
	}

	return browserify(`${paths.src + paths.js}main.js`, { debug: global.env === 'dev' })
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
