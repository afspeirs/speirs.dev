import { dest, src } from 'gulp';

import del from 'del';
import hb from 'gulp-hb';
import hbHelper from 'handlebars-layouts';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

import errorHandler from './errorHandler';
import { paths } from '../gulp.config';

export const pagesClean = () => del(`${paths.build}*.html`);
export const pagesFiles = () => src(`${paths.src + paths.pages}*.hbs`)
	.pipe(plumber({ errorHandler }))
	.pipe(hb()
		.partials(`${paths.src + paths.layout}*.hbs`)
		.partials(`${paths.src + paths.partials}*.hbs`)
		.partials(`${paths.src + paths.sections}*.hbs`)
		.helpers(hbHelper)
		.helpers(`${paths.helpers}**/*.js`)
		.data(`${paths.src + paths.data}/**/*.json`)
		.data({ debug: global.env === 'dev' })
		.data(`${paths.src}manifest.json`))
	.pipe(rename({ extname: '.html' }))
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(dest(paths.build));
