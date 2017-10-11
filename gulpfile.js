var gulp         = require('gulp');                     // https://www.npmjs.com/package/gulp
var babel        = require('gulp-babel');               // https://www.npmjs.com/package/gulp-babel
var browserSync  = require('browser-sync').create();    // https://www.npmjs.com/package/browser-sync
var cleanCSS     = require('gulp-clean-css');           // https://www.npmjs.com/package/gulp-clean-css
var del          = require('del');                      // https://www.npmjs.com/package/del
var frontMatter  = require('gulp-front-matter');        // https://www.npmjs.com/package/gulp-front-matter
var fs           = require('fs');                       // https://www.npmjs.com/package/file-system
var hb           = require('gulp-hb');                  // https://www.npmjs.com/package/gulp-hb
var hbHelper     = require('handlebars-layouts');       // https://www.npmjs.com/package/handlebars-layouts
var htmlmin      = require('gulp-htmlmin');             // https://www.npmjs.com/package/gulp-htmlmin
var jsonModify   = require('gulp-json-modify');         // https://www.npmjs.com/package/gulp-json-modify
var prefix       = require('gulp-autoprefixer');        // https://www.npmjs.com/package/gulp-autoprefixer
var rename       = require('gulp-rename');              // https://www.npmjs.com/package/gulp-rename
var runSequence  = require('run-sequence');             // https://www.npmjs.com/package/run-sequence
var sass         = require('gulp-sass');                // https://www.npmjs.com/package/gulp-sass
var uglify       = require('gulp-uglify');              // https://www.npmjs.com/package/gulp-uglify

var paths = {
	src: './src/',
	build: './public/',
	css: 'assets/css/',
	data: 'assets/data/',
	js: 'assets/js/',
	img: 'assets/img/',
	layout: 'templates/layout/',
	pages: 'templates/pages/',
	partials: 'templates/partials/'
};
var config = JSON.parse(fs.readFileSync('config.json'));


// ==========================================================================================
// ====  Tasks  =============================================================================
// ==========================================================================================

// Cleans folder
gulp.task('config', function() {
	console.log(config);
});


// ==========================================================================================
// ====  Clean  =============================================================================
// ==========================================================================================

// Cleans img folder
gulp.task('clean:img', function() {
	return del(paths.build + paths.img);
});
// Clean js folder
gulp.task('clean:js', function() {
	return del(paths.build + paths.js);
});
// Clean css folder
gulp.task('clean:css', function() {
	return del(paths.build + paths.css);
});
// Cleans files from root of build
gulp.task('clean:root', function() {
	del([paths.build + '*.*', '!' + paths.build + '*.html']);
});
// Clean assets folder
gulp.task('clean:assets', function() {
	return del(paths.build + 'assets');
});
// Clean html files from root of build
gulp.task('clean:pages', function() {
	return del(paths.build + '*.html');
});
// Clean build folder
gulp.task('clean:build', function() {
	return del(paths.build);
});


// ==========================================================================================
// ====  Files  =============================================================================
// ==========================================================================================

// Move img folder contents
gulp.task('files:img', ['clean:img'], function() {
	return gulp.src(paths.src + paths.img + '**/*.{png,gif,jpg,ico}')
		.pipe(gulp.dest(paths.build + paths.img));
});
// Move js folder contents
gulp.task('files:js', ['clean:js'], function() {
	if (config.dev) {
		return gulp.src(paths.src + paths.js + '**/*.*')
			.pipe(gulp.dest(paths.build + paths.js));
	} else {
		return gulp.src(paths.src + paths.js + '**/*.*')
			.pipe(babel({ presets: ['es2015'] }))
			.pipe(uglify())
			.pipe(rename({ extname: '.min.js' }))
			.pipe(gulp.dest(paths.build + paths.js));
	}
});
// Compiles scss files
gulp.task('files:css', ['clean:css'], function() {
	return gulp.src(paths.src + paths.css + 'pages/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(cleanCSS())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(paths.build + paths.css));
});
// Moves root files file
gulp.task('files:root', ['clean:root'], function() {
	return gulp.src([paths.src + '*.*'])
		.pipe(gulp.dest(paths.build));
});
// Compiles Handlebar files
gulp.task('files:handlebar', ['clean:pages'], function() {
	var hbStream = hb()
		.partials(paths.src + paths.layout + '*.hbs')
		.partials(paths.src + paths.partials + '*.hbs')
		.helpers(hbHelper)
		.helpers({
			log: function(options) {
				console.log(options.fn(this));
				return '';
			},
			ifEquals: function(a, b, options) {
				if (a === b) {
					return options.fn(this);
				}
				return options.inverse(this);
			},
			exists: function(variable, options) {
				if (typeof variable !== 'undefined') {
					return options.fn(this);
				} else {
					return options.inverse(this);
				}
			},
			times: function(n, options) {
				var times = '';
				for (var i = 1; i <= n; i++) {
					times += options.fn(i);
				}
				return times;
			},
			trim: function(n, options) {
				return n.replace(/ /g, '');
			},
			year: function(options) {
				return new Date().getFullYear();
			}
		})
		.data(paths.src + paths.data + '/**/*.json')
		.data('config.json');

	return gulp.src(paths.src + paths.pages + '*.hbs')
		.pipe(frontMatter({ property: 'data' }))
		.pipe(hbStream)
		.pipe(rename({ extname: '.html' }))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(paths.build));
});


// ==========================================================================================
// ====  Watch  =============================================================================
// ==========================================================================================

// Ensures the `files:img` task is complete before reloading the browser
gulp.task('watch:img', ['files:img'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:js` task is complete before reloading the browser
gulp.task('watch:js', ['files:js'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:css` task is complete before reloading the browser
gulp.task('watch:css', ['files:css'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:root` task is complete before reloading the browser
gulp.task('watch:root', ['files:root'], function(done) {
	browserSync.reload();
	done();
});
// Ensures the `files:handlebar` task is complete before reloading the browser
gulp.task('watch:handlebar', ['files:handlebar'], function(done) {
	browserSync.reload();
	done();
});


// ==========================================================================================
// ====  Environment  =======================================================================
// ==========================================================================================

// Sets the `files:handlebar` task is complete before reloading the browser
gulp.task('set-dev', function() {
	if (!config.dev) {
		config.dev = true;

		return gulp.src('./config.json')
			.pipe(jsonModify({ key: 'dev', value: true }))
			.pipe(gulp.dest('./'));
	}
});
gulp.task('set-prod', function() {
	if (config.dev) {
		config.dev = false;

		return gulp.src('./config.json')
			.pipe(jsonModify({ key: 'dev', value: false }))
			.pipe(gulp.dest('./'));
	}
});


// ==========================================================================================
// ====  Server  ============================================================================
// ==========================================================================================

// Watches css, js and handlebar files (using Browsersync) then compiles them to the build folder
gulp.task('server', function() {
	runSequence(['set-dev'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');
	
	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: paths.build,
			index: 'index.html'
		},
		// Don't show any notifications in the browser.
		notify: false,
		// Wait 2 seconds after a reload event before allowing more.
		reloadDebounce: 2000
	});

	// add browserSync.reload to the tasks array to make
	// all browsers reload after tasks are complete.
	gulp.watch(paths.src + paths.img + '**/*', ['watch:img']);
	gulp.watch(paths.src + paths.js + '**/*', ['watch:js']);
	gulp.watch(paths.src + paths.css + '**/*', ['watch:css']);
	gulp.watch(paths.src + paths.data + '**/*', ['watch:handlebar']);
	gulp.watch(paths.src + 'templates/**/*.hbs', ['watch:handlebar']);
	gulp.watch(paths.src + '*.*', ['watch:root']);
});


// ==========================================================================================
// ====  Build  =============================================================================
// ==========================================================================================

// Removes html files and everything from assets folder, then compiles to build folder
gulp.task('build', function() {
	runSequence(['set-prod'], 'files:img', 'files:js', 'files:css', 'files:root', 'files:handlebar');
});


// ==========================================================================================
// ====  Default  ===========================================================================
// ==========================================================================================

// Runs the server task by default
gulp.task('default', ['server']);
