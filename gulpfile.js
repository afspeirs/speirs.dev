var gulp = require('gulp'),
	concat = require('gulp-concat'),
	data = require('gulp-data'),
	extname = require('gulp-extname'),
	frontMatter = require('gulp-front-matter'),
	hb = require('gulp-hb'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	handlebars = require('handlebars'),
	layouts = require('handlebars-layouts'),
	helpers = require('handlebars-helpers')(),
	del = require("del");

var paths = {
	src: './src/',
	build: './build/',
	css: 'assets/css/',
	js: 'assets/js/',
	img: 'assets/img/',
	contents: '**/*'
};


// Clean img folder
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
// Clean html files
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
// Move css folder contents
gulp.task('files:css', ['clean:css'], function() {
	return gulp.src([paths.src + paths.css + paths.contents])
		.pipe(gulp.dest(paths.build + paths.css));
});
// Move assets folder contents
gulp.task('files:assets', ['clean:assets'], function() {
	return gulp.src([paths.src + 'assets/' + paths.contents])
		.pipe(gulp.dest(paths.build + 'assets'));
});
// Compiles and moves Handlebar files
gulp.task('files:hbs', ['clean:html'], function () {
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
		.pipe(extname())
		.pipe(gulp.dest(paths.build));
});

// Removes html bfiles and everything from assets folder, then compiles to build folder
gulp.task('default', ['files:assets', 'files:hbs']);

// Watches css js and hbs files and compiles them to the build folder
gulp.task('server', function() {
   gulp.watch(paths.src + 'assets/css/*.css', ['files:css']); 
   gulp.watch(paths.src + 'assets/js/*.js', ['files:js']); 
   gulp.watch(paths.src + 'templates/**/*.hbs', ['files:hbs']); 
});