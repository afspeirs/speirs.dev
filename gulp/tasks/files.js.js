const gulp = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const { paths } = require('../config');
const errHandle = require('../errHandle');

// Move js folder contents
gulp.task('files:js', ['clean:js'], () => {
	if (!global.production) {
		gulp.src(`${paths.src + paths.js}/modules/debug.js`)
			.pipe(gulp.dest(paths.build + paths.js));
	}

	return browserify(`${paths.src + paths.js}main.js`, { debug: !global.production })
		.transform(['babelify', { sourceMaps: true }])
		.bundle().on('error', errHandle)
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest(paths.build + paths.js));
});
