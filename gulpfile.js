/**
 * A nimbler Gulp, Browserify, Babelify, Watchify and React build process
 * @type {gulp automation}
 * @reference http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/
 * @reference  https://scotch.io/tutorials/getting-started-with-browserify#setting-up-with-gulp
 */

'use strict';

const babelify = require('babelify'), //Converts ES6 & JSX to ES5
    browserify = require('browserify'), //Provides `require` ssuport and `CommonJs`
    browserSync = require('browser-sync').create(), //Better cross browser live reload support
    buffer = require('vinyl-buffer'), //Adds Vinyl stream buffering support
    chalk = require('chalk'), //Allows for color logging
    changed = require('gulp-changed'), //Ensures that only the new files are piped in each time for minifying.
    concat = require('gulp-concat'), //Concatenate gulp stream to a name file
    duration = require('gulp-duration'), //Adds a time aspect to a gulp process
    del = require('del'), //Adds delete file/folder operations
    gulp = require('gulp'), //The basuc gulp package
    gutil = require('gulp-util'), //Provides gulp utilities like logging and beep
    imagemin = require('gulp-imagemin'), //Utility for optimising images
    merge = require('utils-merge'), //Object merge tool
    notify = require('gulp-notify'), //Provides notification to both console and Growel
    plumber = require('gulp-plumber'), //Prevents gulp.watch from crashing with error log
    rename = require('gulp-rename'), //Renames source files
    source = require('vinyl-source-stream'), //Adds Vinyl stream support
    sourcemaps = require('gulp-sourcemaps'), //Provides external sourcemap files
    uglify = require('gulp-uglify'), //Minifies files
    watchify = require('watchify'); //Watches and rebuilds source changes

//A Gulp congiguration
let config = {
    js: {
        src: './js/app.js', //App Entry point
        watch: './js/**/*', //Watch all Javascript Files
        outputDir: './build/js/', //Directory to save bundles
        mapDir: 'maps/', //Sub Dir to save sourcemaps to
        outputFile: 'bundle.js' //Name of built file
    },
    img: {
        src: './app/images/*.+(png|jpg|gif)', //Path to image assets
        dst: './build/img' //Path to optimised images
    }
};

//Error Reporting Function
function mapError(err) {
    if (err.fileName) {
        //Regular error
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', '')) + ': ' + 'Line ' + chalk.magenta(err.lineNumber) + '& ' + 'Column ' + chalk.magenta(err.columnNumber || err.column) + ': ' + chalk.cyan(err.description));
    } else {
        //Browserify Error
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.message));
    }
}

/**
 * Complete the final file outputs
 * This makes it easy to use common bundling options in different tasks
 */
function bundle(bundler) {
    let bundleTimer = duration('JavaScript bundle time');

    //Add options to add 'base' bundler added as a parameter
    bundler
        .bundle() //Start the bundle
        .on('error', mapError) //Map error reporting
        .pipe(source(config.js.src)) //Set the source name/entry point
        .pipe(buffer()) //Convert to gulp pipeline
        .pipe(rename(config.js.outputFile)) //Rename the output file from app.js
        .pipe(sourcemaps.init({ loadMaps: true })) //Extract inline sourcemaps
        .pipe(sourcemaps.write(config.js.mapDir)) //Save sourcemap to another output folder
        .pipe(gulp.dest(config.js.outputDir)) //Set the build output folder
        .pipe(notify({ message: 'Generated File: <% file.relative %>' })) //Output the file being created
        .pipe(bundleTimer) //Output time of file creation
        .pipe(browserSync.stream()); //Sync the browsers and livereload
}

/**
 * Adding a global pluber to catch piped errors on gulp
 * I found overriding #src and binding to gulp-notify to be pretty simple and useful
* @ref: https://gist.github.com/floatdrop/8269868#gistcomment-1428507
*/
let _gulpsrc = gulp.src;
gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
        .pipe(plumber({
            errorHandler: function(err) {
                notify.onError({
                    title: "Gulp Error",
                    message: "Error: <%= error.message %>",
                    sound: "Bottle"
                })(err);
                this.emit('end');
            }
        }));
};

/**
 * Start on a fresh clean slate, delete the old build if any
 */
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

/**
 * Task to initialize Browsersync, for browser livereloading and sync
 * Update this to run after guild task!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
gulp.task('browser-sync', () => {
    console.log('browser-syncing');
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

/**
 * Task to Minify and Optimise images
 */
gulp.task('imagemin', ['clean'], () => {
    return gulp.src(config.img.src)
        .pipe(changed(config.img.dst))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ], { verbose: true }))
        .pipe(gulp.dest(config.img.dst));
});

/**
 * Process the JS and return a stream
 */
gulp.task('js', ['clean'], () => {
    return gulp.src(config.js.src)
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.outputDir));
});

/**
 * Add a watch task with livereloading
 */
gulp.task('watch', ['browser-sync'], () => {
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.js.src, ['js']);
    gulp.watch(config.img.src., ['images']);
});

/**
 * Just a simple build task example
 */
gulp.task('build', () => {
    let bundler = browserify(config.js.src) //Pass browserify entry point
        .transform(babelify, { presets: ['es2015', 'react'] });

    bundle(bundler); //Can chanin other options, eg sourcemaps, rename, uglify, watchify, livereload, etc
});

/**
 * A sample default gulp task for the build 
 */
gulp.task('default', ['watch'], () => {
    let args = merge(watchify.args, { debug: true }); //Merge in defualt watchify args with browserify args

    let bundler = browserify(config.js.src, args) //Browserify
        .plugin(watchify, { ignoreWatch: ['**/node-modules/**', '**/bower_components/**'] }) //Setup watchify to watch source changes
        .transform(babelify, { presets: ['es2015', 'react'] }); //Add babel transforms

    bundle(bundler); //Run the bundle the first time (Required for watchify to exec)

    bundler.on('update', function() {
        bundle(bundler); //Rerun bundle on source updates
    });
});

/**
 * Another sample default gulp task 
 */
gulp.task('default-ex2', ['watch', 'js', 'imagemin']);



/**
 * @ref https://github.com/tschaub/gulp-newer
 * A Gulp plugin for passing through only those source files that are newer than corresponding destination files.
 * Using newer with 1:1 source:dest mappings. 
 * The default task in the example below sets up a watch that minifies images on changes. 
 * Piping the source files to newer before imagemin ensures that only those images that have 
 * changed are minified. The newer plugin is configured with the directory path for minified images.
 */
//================================================================================================

var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');

var imgSrc = 'src/img/**';
var imgDest = 'build/img';

// Minify any new images
gulp.task('images', function() {

    // Add the newer pipe to pass through newer images only
    return gulp.src(imgSrc)
        .pipe(newer(imgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDest));

});

gulp.task('default', function() {
    gulp.watch(imgSrc, ['images']);
});

/**
 * Using newer with many:1 source:dest mappings
 * Plugins like gulp-concat take many source files and generate a single destination file. 
 * In this case, the newer stream will pass through all source files if any one of them 
 * is newer than the destination file. The newer plugin is configured with the destination file path.
 */
//================================================================================================

var gulp = require('gulp');
var newer = require('gulp-newer');
var concat = require('gulp-concat');

// Concatenate all if any are newer
gulp.task('concat', function() {

    // Add the newer pipe to pass through all sources if any are newer
    return gulp.src('lib/*.js')
        .pipe(newer('dist/all.js'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));

});
