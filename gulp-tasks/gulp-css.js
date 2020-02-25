import { dest, src } from 'gulp';

import cleanCSS from 'gulp-clean-css';
import del from 'del';
import plumber from 'gulp-plumber';
import prefix from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import errorHandler from './gulp-error-handler';
import { paths } from './gulp.config';

export const cssClean = () => del(paths.build + paths.css);
export const cssFiles = () => src(`${paths.src + paths.css}*.scss`)
	.pipe(plumber({ errorHandler }))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(prefix())
	.pipe(cleanCSS())
	.pipe(sourcemaps.write())
	.pipe(rename({ extname: '.min.css' }))
	.pipe(dest(paths.build + paths.css));
