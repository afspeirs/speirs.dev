var gulp         = require('gulp');                     // https://www.npmjs.com/package/gulp
var browserify   = require('browserify');               // https://www.npmjs.com/package/browserify
var browserSync  = require('browser-sync').create();    // https://www.npmjs.com/package/browser-sync
var buffer       = require('vinyl-buffer');             // https://www.npmjs.com/package/vinyl-buffer
var cleanCSS     = require('gulp-clean-css');           // https://www.npmjs.com/package/gulp-clean-css
var del          = require('del');                      // https://www.npmjs.com/package/del
var hb           = require('gulp-hb');                  // https://www.npmjs.com/package/gulp-hb
var hbHelper     = require('handlebars-layouts');       // https://www.npmjs.com/package/handlebars-layouts
var htmlmin      = require('gulp-htmlmin');             // https://www.npmjs.com/package/gulp-htmlmin
var nop          = require('gulp-nop');                 // https://www.npmjs.com/package/gulp-nop
var notify       = require('gulp-notify');              // https://www.npmjs.com/gulp-notify
var plumber      = require('gulp-plumber');             // https://www.npmjs.com/package/gulp-plumber
var prefix       = require('gulp-autoprefixer');        // https://www.npmjs.com/package/gulp-autoprefixer
var rename       = require('gulp-rename');              // https://www.npmjs.com/package/gulp-rename
var runSequence  = require('run-sequence');             // https://www.npmjs.com/package/run-sequence
var sass         = require('gulp-sass');                // https://www.npmjs.com/package/gulp-sass
var source       = require('vinyl-source-stream');      // https://www.npmjs.com/package/vinyl-source-stream
var sourcemaps   = require('gulp-sourcemaps');          //https://www.npmjs.com/package/gulp-sourcemaps
var uglify       = require('gulp-uglify');              // https://www.npmjs.com/package/gulp-uglify

var env = process.env.NODE_ENV;
var paths = {
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
	sections: 'templates/sections/'
};

// ==========================================================================================
// ====  Error Handling  ====================================================================
// ==========================================================================================

function errHandle(err) {
	notify.onError({
		title: `Error found in ${err.plugin || 'a file'}`,
		message: err.message.toString()
	})(err);
	console.log(err);
	this.emit('end');
}


// ==========================================================================================
// ====  Clean  =============================================================================
// ==========================================================================================

// Cleans img folder
gulp.task('clean:img', function() {
	return del(paths.build + paths.img);
});
// Clean js folder
gulp.task('clean:js', function() {
	return del(paths.build + paths.js);
});
// Clean css folder
gulp.task('clean:css', function() {
	return del(paths.build + paths.css);
});
// Cleans files from root of build
gulp.task('clean:root', function() {
	return del([paths.build + '*.*', '!' + paths.build + '*.html']);
});
// Clean assets folder
gulp.task('clean:assets', function() {
	return del(paths.build + 'assets');
});
// Clean html files from root of build
gulp.task('clean:pages', function() {
	return del(paths.build + '*.html');
});
// Clean build folder
gulp.task('clean:build', function() {
	return del(paths.build);
});


// ==========================================================================================
// ====  Files  =============================================================================
// ==========================================================================================

// Move img folder contents
gulp.task('files:img', ['clean:img'], function() {
	return gulp.src([paths.src + paths.img + '**/*', '!' + paths.src + paths.img + '**/*.{ai,psd,svg}'])
		.pipe(gulp.dest(paths.build + paths.img));
});
// Move js folder contents
gulp.task('files:js', ['clean:js'], function() {
	var argBabel = process.argv.includes('--babel');
	argBabel ? console.log('Serving with babel preset') : nop();

	return browserify(paths.src + paths.js + 'main.js', { debug: env === 'dev' })
		.transform(['babelify', { presets: ['env'], sourceMaps: true }])
		.bundle()
		.on('error', errHandle)
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(env === 'prod' || argBabel ? uglify() : nop())
		.pipe(sourcemaps.write())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest(paths.build + paths.js));
});
// Compiles scss files
gulp.task('files:css', ['clean:css'], function() {
	return gulp.src(paths.src + paths.css + '*.scss')
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
gulp.task('files:root', ['clean:root'], function() {
	return gulp.src([paths.src + '*.*'])
		.pipe(gulp.dest(paths.build));
});
// Compiles Handlebar files
gulp.task('files:handlebar', ['clean:pages'], function() {
	return gulp.src(paths.src + paths.pages + '*.hbs')
		.pipe(plumber({ errorHandler: errHandle }))
		.pipe(hb()
			.partials(paths.src + paths.layout + '*.hbs')
			.partials(paths.src + paths.partials + '*.hbs')
			.partials(paths.src + paths.sections + '*.hbs')
			.helpers(hbHelper)
			.helpers(paths.helpers + '**/*.js')
			.data(paths.src + paths.data + '/**/*.json')
			.data({ debug: env === 'dev' })
			.data(paths.src + 'manifest.json'))
		.pipe(rename({ extname: '.html' }))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(paths.build));
});


// ==========================================================================================
// ====  Environment  =======================================================================
// ==========================================================================================

// Sets the `files:handlebar` task is complete before reloading the browser
gulp.task('set-dev', function() {
	return env = 'dev';
});
gulp.task('set-prod', function() {
	return env = 'prod';
});


// ==========================================================================================
// ====  Serve  ============================================================================
// ==========================================================================================

// Watches css, js and handlebar files (using Browsersync) then compiles them to the build folder
gulp.task('serve', function() {
	runSequence(['set-dev'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: 'index.html'
		},
		// Don't show any notifications in the browser.
		notify: false,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: 2000
	});

	// add browserSync.reload to the tasks array to make
	// all browsers reload after tasks are complete.
	gulp.watch(paths.src + paths.img + '**/*', ['files:img']).on('change', browserSync.reload);
	gulp.watch(paths.src + paths.js + '**/*', ['files:js']).on('change', browserSync.reload);
	gulp.watch(paths.src + paths.css + '**/*', ['files:css']).on('change', browserSync.reload);
	gulp.watch(paths.src + paths.data + '**/*', ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(paths.src + 'templates/**/*.hbs', ['files:handlebar']).on('change', browserSync.reload);
	gulp.watch(paths.src + '*.*', ['files:root']).on('change', browserSync.reload);
	gulp.watch(paths.helpers + '**/*.js', ['files:handlebar']).on('change', browserSync.reload);
});


// ==========================================================================================
// ====  Build  =============================================================================
// ==========================================================================================

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', function() {
	runSequence(['set-prod'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');
});


// ==========================================================================================
// ====  Default  ===========================================================================
// ==========================================================================================

// Runs the serve task by default
gulp.task('default', ['serve']);
