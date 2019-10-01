import { dest, src } from 'gulp';

import del from 'del';
import htmlmin from 'gulp-htmlmin';
import panini from 'panini';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

import errorHandler from './errorHandler';
import { paths } from '../gulp.config';

export const pagesClean = () => del(`${paths.build}*.html`);
export const pagesFiles = () => src(`${paths.src + paths.pages}*.hbs`)
	.pipe(plumber({ errorHandler }))
	.pipe(panini({
		root: paths.src + paths.pages,
		layouts: paths.src + paths.layout,
		partials: paths.src + paths.partials,
		data: paths.src + paths.data,
		helpers: paths.helpers,
	}))
	.pipe(rename({ extname: '.html' }))
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(dest(paths.build));
export const pagesReset = (done) => {
	panini.refresh();
	done();
};
