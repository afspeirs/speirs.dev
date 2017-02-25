var gulp = require('gulp'),
    concat = require('gulp-concat'),
    handlebar = require('gulp-handlebars-all'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    del = require("del");

// Default task
// Compiles website 
gulp.task('default', ['handlebar', 'styles', 'scripts', 'img']);

// Exports html files to the build folder
gulp.task('handlebar', function() {
	gulp.src('src/*.hbs')
		.pipe(handlebar('html', {
			partials: ['src/partials/*.hbs']
		}))
		.pipe(rename(function (path) {
			// path.basename;
			path.extname = ".html";
		}))
		.pipe(gulp.dest('build'));
});

//Exports styles to the build folder
gulp.task('styles', function () {
   	gulp.src('src/styles/*.css')
    	.pipe(gulp.dest('build/styles'));
});

// Exports scripts to build folder
gulp.task('scripts', function () {
   	gulp.src('src/scripts/*.js')
    	.pipe(gulp.dest('build/scripts'));
});

//Exports images to the build folder
gulp.task('img', function () {
	gulp.src('src/img/**/*')
		.pipe(gulp.dest('build/img'));
});


gulp.task('clean', function() {
	del(['build/**/*']);
});

// Include watch function
// gulp.watch('./js/*', function () {
//      gulp.run('js');
// });