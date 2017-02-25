var gulp = require('gulp'),
    handlebar = require('gulp-handlebars-all'),
    rename = require('gulp-rename');
    uglify = require('gulp-uglify');

// Default task
// Compiles website 
gulp.task('default', ['handlebar', 'scripts', 'styles', 'img']);

// Exports scripts to build folder
gulp.task('scripts', function () {
   	gulp.src('src/scripts/*.js')
    	.pipe(gulp.dest('build/scripts'));
});

//Exports styles to the build folder
gulp.task('styles', function () {
   	gulp.src('src/styles/*.css')
    	.pipe(gulp.dest('build/styles'));
});

//Exports styles to the build folder
gulp.task('img', function () {
	gulp.src('src/img/**/*')
		.pipe(gulp.dest('build/img'));
});

gulp.task('handlebar', function() {
	gulp.src('src/pages/*.hbs')
		.pipe(handlebar('html', {
			partials: ['src/partials/*.hbs']
		}))
		.pipe(rename(function (path) {
			// path.basename;
			path.extname = ".html";
		}))
		.pipe(gulp.dest('build/pages'));
});

// Include watch function
// gulp.watch('./js/*', function () {
//      gulp.run('js');
// });