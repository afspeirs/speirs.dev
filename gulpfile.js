var gulp = require('gulp'),
	concat = require('gulp-concat'),
	data = require('gulp-data'),
	extname = require('gulp-extname'),
	file = require('gulp-file'),
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
};

gulp.task('clean:js', function () {
   return del(paths.build + 'js');
});

gulp.task('clean:css', function () {
   return del(paths.build + 'css');
});

gulp.task('clean:build', function() { 
   return del(paths.build); 
});

gulp.task('files:moveAssets', ['clean:build'], function() {
    return gulp.src([paths.src + 'assets/**/*.*'])
        .pipe(gulp.dest(paths.build));
});

gulp.task('handlebar', ['files:moveAssets'], function () {
    var hbStream = hb()
        // Partials
        .partials(paths.src + 'templates/layout/*.{hbs,js}')

        // .partials(paths.src + 'templates/partials/layout.hbs')
        // .partials('./partials/layouts/**/*.{hbs,js}')

        // Helpers
        .helpers(require('handlebars-layouts'))
        // .helpers(helpers)
        // .helpers('./helpers/**/*.js')
        .helpers({
            log : function(options){
                console.log(options.fn(this));
                return '';
            },
            ifEquals : function(a,b,options){
                if (a === b) {
                    return options.fn(this);
                }
                return options.inverse(this);
            }
        })

        // Decorators
        // .decorators('./decorators/**/*.js')

        // Data
        // .data(paths.src + 'templates/data/*.json')

    return gulp
        .src(paths.src + 'templates/pages/*.hbs')
        .pipe(frontMatter({
            property: 'data',
            remove:true
        }))
        .pipe(hbStream)
		.pipe(extname())
        .pipe(gulp.dest(paths.build));
});


gulp.task('default', ['handlebar']);

gulp.task('watch', function() {
   gulp.watch('src/**/*.css', ['clean:css', 'files:moveToBuild']); 
});

// gulp.task('frontmatter-to-json', function(){
// 	return gulp.src(paths.src + '/templates/pages/*.hbs')
// 		.pipe(frontMatter({property: 'meta'}))
// 		.pipe(data(function(file){
// 			file.contents = new Buffer(JSON.stringify(file.meta))
// 		}))
// 		.pipe(rename(function (path) {
// 			path.extname = ".json";
// 		}))
// 		.pipe(gulp.dest(paths.src + 'templates/json'))
// })
