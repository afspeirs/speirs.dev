
const gulp = require('gulp');
const hb = require('gulp-hb');
const hbHelper = require('handlebars-layouts');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const { paths } = require('../config');
const errHandle = require('../errHandle');

// Compiles Handlebar files
gulp.task('files:handlebar', ['clean:pages'], () => gulp
	.src(`${paths.src + paths.pages}*.hbs`)
	.pipe(plumber({ errorHandler: errHandle }))
	.pipe(hb()
		.partials(`${paths.src + paths.layout}*.hbs`)
		.partials(`${paths.src + paths.partials}*.hbs`)
		.partials(`${paths.src + paths.sections}*.hbs`)
		.helpers(hbHelper)
		.helpers(`${paths.helpers}**/*.js`)
		.data(`${paths.src + paths.data}/**/*.json`)
		.data({ debug: !global.production })
		.data(`${paths.src}manifest.json`))
	.pipe(rename({ extname: '.html' }))
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest(paths.build)));
