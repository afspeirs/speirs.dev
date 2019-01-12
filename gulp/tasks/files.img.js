const gulp = require('gulp');
const { paths } = require('../config');

// Move img folder contents
gulp.task('files:img', ['clean:img'], () => gulp
	.src([`${paths.src + paths.img}**/*`, `!${paths.src + paths.img}**/*.{ai,psd,svg}`])
	.pipe(gulp.dest(paths.build + paths.img)));
