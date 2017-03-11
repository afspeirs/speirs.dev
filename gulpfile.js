var gulp		= require('gulp'),
	prefix		= require('gulp-autoprefixer'),
	cleanCSS	= require('gulp-clean-css'),
	extname 	= require('gulp-extname'),
	frontMatter = require('gulp-front-matter'),
	hb 			= require('gulp-hb'),
	htmlmin 	= require('gulp-htmlmin'),
	rename		= require('gulp-rename')
	sass 		= require('gulp-sass'),
	uglify 		= require('gulp-uglify'),
	browserSync = require('browser-sync').create(),
	handlebars 	= require('handlebars'),
	layouts 	= require('handlebars-layouts'),
	helpers 	= require('handlebars-helpers')(),
	del 		= require("del");


var paths = {
	src: './src/',
	build: './build/',
	css: 'assets/css/pages/',
	js: 'assets/js/',
	img: 'assets/img/',
	contents: '**/*'
};


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
// Move img folder contents
gulp.task('files:img', ['clean:img'], function() {
	return gulp.src([paths.src + paths.img + paths.contents])
		.pipe(gulp.dest(paths.build + paths.img));
});
// Move js folder contents
gulp.task('files:js', ['clean:js'], function() {
	return gulp.src([paths.src + paths.js + paths.contents])
		.pipe(gulp.dest(paths.build + paths.js));
});
// Compiles scss files
gulp.task('files:css', ['clean:css'], function() {
	return gulp.src(paths.src + paths.css + '*.scss')
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
		.helpers(require('handlebars-layouts'))
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
			}
		})

	return gulp
		.src(paths.src + 'templates/pages/*.hbs')
		.pipe(frontMatter({ property: 'data' }))
		.pipe(hbStream)
		.pipe(rename({ extname: '.html' }))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.build));
});


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
	gulp.watch(paths.src + paths.css + paths.contents, ['watch:css']);
	gulp.watch(paths.src + paths.js + paths.contents, ['watch:js']);
	gulp.watch(paths.src + paths.img + paths.contents, ['watch:img']);
	gulp.watch(paths.src + 'templates/**/*.hbs', ['watch:handlebar']);
});

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', ['files:img', 'files:js', 'files:css', 'files:handlebar']);

// Runs the server task by default
gulp.task('default', ['server']);