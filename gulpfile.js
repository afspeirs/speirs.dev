var gulp = require('gulp'),
	concat = require('gulp-concat'),
	data = require('gulp-data'),
	file = require('gulp-file'),
	frontMatter = require('gulp-front-matter'),
	hb = require('gulp-hb'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	del = require("del");

// Default task
// Compiles website 
gulp.task('default', ['handlebar', 'css', 'javascript', 'img']);

// Exports html files to the build folder
gulp.task('handlebar', function () {
    return gulp.src('src/pages/*.hbs')
        .pipe(hb({
			data: 'src/json/*.js',
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
			}
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
gulp.task('css', function () {
   	gulp.src('src/css/*.css')
    	.pipe(gulp.dest('build/css'));
});

// Exports scripts to build folder
gulp.task('javascript', function () {
   	gulp.src('src/javascript/*.js')
    	.pipe(gulp.dest('build/javascript'));
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