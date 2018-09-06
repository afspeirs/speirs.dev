/* eslint arrow-body-style: off */
/* eslint no-console: off */
/* eslint no-multi-spaces: off */
/* eslint no-return-assign: off */

const gulp         = require('gulp');                     // https://www.npmjs.com/package/gulp
const browserify   = require('browserify');               // https://www.npmjs.com/package/browserify
const browserSync  = require('browser-sync').create();    // https://www.npmjs.com/package/browser-sync
const buffer       = require('vinyl-buffer');             // https://www.npmjs.com/package/vinyl-buffer
const cleanCSS     = require('gulp-clean-css');           // https://www.npmjs.com/package/gulp-clean-css
const del          = require('del');                      // https://www.npmjs.com/package/del
const hb           = require('gulp-hb');                  // https://www.npmjs.com/package/gulp-hb
const hbHelper     = require('handlebars-layouts');       // https://www.npmjs.com/package/handlebars-layouts
const htmlmin      = require('gulp-htmlmin');             // https://www.npmjs.com/package/gulp-htmlmin
const notify       = require('gulp-notify');              // https://www.npmjs.com/gulp-notify
const plumber      = require('gulp-plumber');             // https://www.npmjs.com/package/gulp-plumber
const prefix       = require('gulp-autoprefixer');        // https://www.npmjs.com/package/gulp-autoprefixer
const rename       = require('gulp-rename');              // https://www.npmjs.com/package/gulp-rename
const runSequence  = require('run-sequence');             // https://www.npmjs.com/package/run-sequence
const sass         = require('gulp-sass');                // https://www.npmjs.com/package/gulp-sass
const source       = require('vinyl-source-stream');      // https://www.npmjs.com/package/vinyl-source-stream
const sourcemaps   = require('gulp-sourcemaps');          // https://www.npmjs.com/package/gulp-sourcemaps
const uglify       = require('gulp-uglify');              // https://www.npmjs.com/package/gulp-uglify

let env = process.env.NODE_ENV;
const paths = {
	src: 'src/',
	build: 'public/',
	helpers: './helpers/',
	css: 'assets/css/',
	data: 'assets/data/',
	js: 'assets/js/',
	img: 'assets/img/',
	layout: 'templates/layout/',
	pages: 'templates/pages/',
	partials: 'templates/partials/',
	sections: 'templates/sections/',
};

// ==========================================================================================
// ====  Error Handling  ====================================================================
// ==========================================================================================

function errHandle(err) {
	notify.onError({
		title: `Error found in ${err.plugin || 'a file'}`,
		message: err.message.toString(),
	})(err);
	console.log(err);
	this.emit('end');
}


// ==========================================================================================
// ====  Clean  =============================================================================
// ==========================================================================================

// Cleans img folder
gulp.task('clean:img', () => del(paths.build + paths.img));
// Clean js folder
gulp.task('clean:js', () => del(paths.build + paths.js));
// Clean css folder
gulp.task('clean:css', () => del(paths.build + paths.css));
// Cleans files from root of build
gulp.task('clean:root', () => del([`${paths.build}*.*`, `!${paths.build}*.html`]));
// Clean assets folder
gulp.task('clean:assets', () => del(`${paths.build}assets`));
// Clean html files from root of build
gulp.task('clean:pages', () => del(`${paths.build}*.html`));
// Clean build folder
gulp.task('clean:build', () => del(paths.build));


// ==========================================================================================
// ====  Files  =============================================================================
// ==========================================================================================

// Move img folder contents
gulp.task('files:img', ['clean:img'], () => {
	return gulp.src([`${paths.src + paths.img}**/*`, `!${paths.src + paths.img}**/*.{ai,psd,svg}`])
		.pipe(gulp.dest(paths.build + paths.img));
});
// Move js folder contents
gulp.task('files:js', ['clean:js'], () => {
	return browserify(`${paths.src + paths.js}main.js`, { debug: env === 'dev' })
		.transform(['babelify', { presets: ['env'], sourceMaps: true }])
		.bundle().on('error', errHandle)
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(rename({ extname: `${env === 'prod' ? '.min' : ''}.js` }))
		.pipe(gulp.dest(paths.build + paths.js));
});
// Compiles scss files
gulp.task('files:css', ['clean:css'], () => {
	return gulp.src(`${paths.src + paths.css}*.scss`)
		.pipe(plumber({ errorHandler: errHandle }))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefix())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(paths.build + paths.css));
});
// Moves root files file
gulp.task('files:root', ['clean:root'], () => {
	return gulp.src([`${paths.src}*.*`])
		.pipe(gulp.dest(paths.build));
});
// Compiles Handlebar files
gulp.task('files:handlebar', ['clean:pages'], () => {
	return gulp.src(`${paths.src + paths.pages}*.hbs`)
		.pipe(plumber({ errorHandler: errHandle }))
		.pipe(hb()
			.partials(`${paths.src + paths.layout}*.hbs`)
			.partials(`${paths.src + paths.partials}*.hbs`)
			.partials(`${paths.src + paths.sections}*.hbs`)
			.helpers(hbHelper)
			.helpers(`${paths.helpers}**/*.js`)
			.data(`${paths.src + paths.data}/**/*.json`)
			.data({ debug: env === 'dev' })
			.data(`${paths.src}manifest.json`))
		.pipe(rename({ extname: '.html' }))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(paths.build));
});


// ==========================================================================================
// ====  Environment  =======================================================================
// ==========================================================================================

// Sets the `files:handlebar` task is complete before reloading the browser
gulp.task('set-dev', () => env = 'dev');
gulp.task('set-prod', () => env = 'prod');


// ==========================================================================================
// ====  Serve  ============================================================================
// ==========================================================================================

// Watches css, js and handlebar files (using Browsersync) then compiles them to the build folder
gulp.task('serve', () => {
	runSequence(['set-dev'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: 'index.html',
		},
		// Don't show any notifications in the browser.
		notify: false,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: 2000,
	});

	// add browserSync.reload to the tasks array to make
	// all browsers reload after tasks are complete.
	gulp.watch(`${paths.src + paths.img}**/*`, ['files:img']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.js}**/*`, ['files:js']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.css}**/*`, ['files:css']).on('change', browserSync.reload);
	gulp.watch(`${paths.src + paths.data}**/*`, ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(`${paths.src}templates/**/*.hbs`, ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(`${paths.src}*.*`, ['files:root']).on('change', browserSync.reload);
	gulp.watch(`${paths.helpers}**/*.js`, ['files:handlebar']).on('change', browserSync.reload);
});


// ==========================================================================================
// ====  Build  =============================================================================
// ==========================================================================================

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', () => {
	runSequence(['set-prod'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');
});


// ==========================================================================================
// ====  Default  ===========================================================================
// ==========================================================================================

// Runs the serve task by default
gulp.task('default', ['serve']);
