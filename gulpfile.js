var gulp         = require('gulp'),                     // https://www.npmjs.com/package/gulp
    prefix       = require('gulp-autoprefixer'),        // https://www.npmjs.com/package/gulp-autoprefixer
    cleanCSS     = require('gulp-clean-css'),           // https://www.npmjs.com/package/gulp-clean-css
    frontMatter  = require('gulp-front-matter'),        // https://www.npmjs.com/package/gulp-front-matter
    hb           = require('gulp-hb'),                  // https://www.npmjs.com/package/gulp-hb
    hbHelper     = require('handlebars-layouts')        // https://www.npmjs.com/package/handlebars-layouts
    htmlmin      = require('gulp-htmlmin'),             // https://www.npmjs.com/package/gulp-htmlmin
    rename       = require('gulp-rename'),              // https://www.npmjs.com/package/gulp-rename
    sass         = require('gulp-sass'),                // https://www.npmjs.com/package/gulp-sass
    uglify       = require('gulp-uglify'),              // https://www.npmjs.com/package/gulp-uglify
    browserSync  = require('browser-sync').create(),    // https://www.npmjs.com/package/browser-sync
    del          = require("del");                      // https://www.npmjs.com/package/del

var paths = {
	src: './src/',
	build: './build/',
	css: 'assets/css/',
	js: 'assets/js/',
	img: 'assets/img/',
};


///////////////////////////////////////////////////////////////////////////////////////////////
//  Clean  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Cleans folder
gulp.task('clean:img', function () {
	return del(paths.build + paths.img);
});
// Clean js folder
gulp.task('clean:js', function () {
	return del(paths.build + paths.js);
});
// Clean css folder
gulp.task('clean:css', function () {
	return del(paths.build + paths.css);
});
// Clean assets folder
gulp.task('clean:assets', function() { 
	return del(paths.build + 'assets'); 
});
// Clean build folder
gulp.task('clean:build', function() { 
	return del(paths.build); 
});
// Clean html files from root of build
gulp.task('clean:html', function() { 
	return del(paths.build + '*.html'); 
});


///////////////////////////////////////////////////////////////////////////////////////////////
//  Files  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Move img folder contents
gulp.task('files:img', ['clean:img'], function() {
	return gulp.src([paths.src + paths.img + '**/*.{png,gif,jpg,ico,svg}'])
		.pipe(gulp.dest(paths.build + paths.img));
});
// Move js folder contents
gulp.task('files:js', ['clean:js'], function() {
	return gulp.src([paths.src + paths.js + '**/*'])
		.pipe(uglify())
		.pipe(gulp.dest(paths.build + paths.js));
});
// Compiles scss files
gulp.task('files:css', ['clean:css'], function() {
	return gulp.src(paths.src + paths.css + '**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(cleanCSS())
		.pipe(rename({ extname: '.css' }))
		.pipe(gulp.dest(paths.build + paths.css));
});
// Compiles Handlebar files
gulp.task('files:handlebar', ['clean:html'], function () {
	var hbStream = hb()
		.partials(paths.src + 'templates/layout/*.hbs')
		.partials(paths.src + 'templates/partials/*.hbs')
		.helpers(hbHelper)
		.helpers({
			log : function(options){
				console.log(options.fn(this));
				return '';
			},
			ifEquals : function(a, b, options){
				if (a === b) {
					return options.fn(this);
				}
				return options.inverse(this);
			},
			exists : function(variable, options) {
				if (typeof variable !== 'undefined') {
					return options.fn(this);
				} else {
					return options.inverse(this);
				}
			},
			times : function(n, options) {
				var times = '';
				for(var i = 1; i <= n; ++i)
					times += options.fn(i);
				return times;
			}
		})

	return gulp.src(paths.src + 'templates/pages/*.hbs')
		.pipe(frontMatter({ property: 'data' }))
		.pipe(hbStream)
		.pipe(rename({ extname: '.html' }))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.build));
});


///////////////////////////////////////////////////////////////////////////////////////////////
//  Watch  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Ensures the `files:css` task is complete before reloading the browser
gulp.task('watch:css', ['files:css'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:js` task is complete before reloading the browser
gulp.task('watch:js', ['files:js'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:img` task is complete before reloading the browser
gulp.task('watch:img', ['files:img'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:handlebar` task is complete before reloading the browser
gulp.task('watch:handlebar', ['files:handlebar'], function(done) {
	browserSync.reload();
	done();
});


///////////////////////////////////////////////////////////////////////////////////////////////
//  Server  ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Watches css, js and handlebar files (using Browsersync) then compiles them to the build folder
gulp.task('server', ['files:img', 'files:js', 'files:css', 'files:handlebar'], function () {

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: "index.html"
		},
		// Don't show any notifications in the browser.
		notify: false,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: 2000
	});

	// add browserSync.reload to the tasks array to make
	// all browsers reload after tasks are complete.
	gulp.watch(paths.src + paths.css + '**/*', ['watch:css']);
	gulp.watch(paths.src + paths.js + '**/*', ['watch:js']);
	gulp.watch(paths.src + paths.img + '**/*', ['watch:img']);
	gulp.watch(paths.src + 'templates/**/*.hbs', ['watch:handlebar']);
});


///////////////////////////////////////////////////////////////////////////////////////////////
//  Buid  /////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', ['files:img', 'files:js', 'files:css', 'files:handlebar']);


///////////////////////////////////////////////////////////////////////////////////////////////
//  Default  //////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Runs the server task by default
gulp.task('default', ['server']);