var gulp = require('gulp'),
	concat = require('gulp-concat'),
	data = require('gulp-data'),
	file = require('gulp-file'),
	hb = require('gulp-hb'),
	frontMatter = require('gulp-front-matter'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	del = require("del");

// Default task
// Compiles website 
gulp.task('default', ['handlebar', 'styles', 'scripts', 'img']);

// Exports html files to the build folder
gulp.task('handlebar', function () {
    return gulp.src('src/pages/*.hbs')
        .pipe(hb({
            partials: 'src/partials/*.hbs',
			helpers : {
				log : function(options){
					console.log(options.fn(this));
					return '';
				},
				ifActive : function(page, options){
					console.log(this);
					if (page === options.fn(this)) {
						// return options.fn(this);
						// console.log(options.fn(this));
					}
					// console.log(options.fn(this));

					return options.inverse(this);
				},
				ifEquals : function(a,b,options){
					if (a === b) {
						return options.fn(this);
					}
					return options.inverse(this);
				}
			},
			data: 'src/json/*.js'
        }))
		.pipe(rename(function (path) {
			path.extname = ".html";
		}))
        .pipe(gulp.dest('build'));
});


gulp.task('frontmatter-to-json', function(){
	return gulp.src('src/pages/*.hbs')
		.pipe(frontMatter({property: 'meta'}))
		.pipe(data(function(file){
			file.contents = new Buffer(JSON.stringify(file.meta))
		}))
		.pipe(rename(function (path) {
			path.extname = ".json";
		}))
		.pipe(gulp.dest('src/json'))
})




//Exports styles to the build folder
gulp.task('styles', function () {
   	gulp.src('src/styles/*.css')
    	.pipe(gulp.dest('build/styles'));
});

// Exports scripts to build folder
gulp.task('scripts', function () {
   	gulp.src('src/scripts/pages/*.js')
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