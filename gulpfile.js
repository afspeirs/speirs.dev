var gulp = require('gulp'),
	concat = require('gulp-concat'),
	data = require('gulp-data'),
	extname = require('gulp-extname'),
	file = require('gulp-file'),
	frontMatter = require('gulp-front-matter'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	del = require("del");

var paths = {
    src: './src/',
    build: './build/',
};

gulp.task('js:clean', function () {
   return del(paths.build + 'js');
});

gulp.task('css:clean', function () {
   return del(paths.build + 'css');
});

gulp.task('build:clean', function() { 
   return del(paths.build); 
});

gulp.task('files:moveAssets', function() {
    return gulp.src([paths.src + 'assets/**/*.*'])
        .pipe(gulp.dest(paths.build));
});

gulp.task('html:watch', function() {
   gulp.watch(paths.src + '**/*.html', ['files:moveToBuild']); 
});

gulp.task('default', ['files:moveAssets']);






gulp.task('frontmatter-to-json', function(){
	return gulp.src(paths.src + '/templates/pages/*.hbs')
		.pipe(frontMatter({property: 'meta'}))
		.pipe(data(function(file){
			file.contents = new Buffer(JSON.stringify(file.meta))
		}))
		.pipe(rename(function (path) {
			path.extname = ".json";
		}))
		.pipe(gulp.dest(paths.src + 'templates/json'))
})
