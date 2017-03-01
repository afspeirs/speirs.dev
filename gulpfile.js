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

gulp.task('files:assets', ['clean:build'], function() {
    return gulp.src([paths.src + 'assets/**/*'])
        .pipe(gulp.dest(paths.build + 'assets'));
});

gulp.task('handlebar', function () {
    var hbStream = hb()
        // Partials
        .partials(paths.src + 'templates/layout/*.hbs')

        // Helpers
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


gulp.task('default', ['files:assets', 'handlebar']);

gulp.task('watch', function() {
   gulp.watch(paths.src + 'assets/css/*.css', ['files:assets']); 
   gulp.watch(paths.src + 'assets/js/*.js', ['files:assets']); 
   gulp.watch(paths.src + 'templates/**/*.hbs', ['handlebar']); 
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
