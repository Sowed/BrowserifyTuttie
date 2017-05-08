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
    newer = require('gulp-newer'), //Pass only newer source files than corresponding destination files.
    notify = require('gulp-notify'), //Provides notification to both console and Growel
    plumber = require('gulp-plumber'), //Prevents gulp.watch from crashing with error log
    rename = require('gulp-rename'), //Renames source files
    runSequence = require('run-sequence'), //Runs a sequence of gulp tasks in the specified order.
    source = require('vinyl-source-stream'), //Adds Vinyl stream support
    sourcemaps = require('gulp-sourcemaps'), //Provides external sourcemap files
    uglify = require('gulp-uglify'), //Minifies files
    watchify = require('watchify'); //Watches and rebuilds source changes

//A Gulp congiguration
let config = {
    baseDir: './',
    indexUrl: './index.html',
    js: {
        src: './js/*.js', //JS files source
        app: './js/app.js', //App Entry point
        watch: './js/**/*', //Watch all Javascript Files
        dist: './dist/js/', //Directory to save bundles
        mapDir: 'maps/', //Sub Dir to save sourcemaps to
        outputFile: 'bundle.js', //Name of built file
        outputDir: './build/js/', //Directory to save bundles
        vendor: [ //Vendor Scripts to be concatenated into build file
            './app/js/vendor/jquery-3.2.1.min.js',
            './app/js/vendor/tether.min.js',
            './app/js/vendor/bootstrap.min.js'
        ],
        allMinJs: 'build.min.js', //Name of minified build with vendor js
        minBuildDir: './public/js/', //Dir of all cocatenated scripts
    },
    img: {
        src: './app/images/*.+(png|jpg|gif|svg)', //Path to image assets
        dst: './build/img' //Path to optimised images
    }
};

//Error Reporting Function
function mapError(err) {
    if (err.fileName) {
        //Regular error
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.fileName.replace(__dirname + config.js.app, '')) + ': ' + 'Line ' + chalk.magenta(err.lineNumber) + '& ' + 'Column ' + chalk.magenta(err.columnNumber || err.column) + ': ' + chalk.cyan(err.description));
    } else {
        //Browserify Error
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.message));
    }
}

/**
 * Adding a global plumber to catch piped errors on gulp
 * Overriding #src and binding to gulp-notify is pretty simple and useful
 * @ref: https://gist.github.com/floatdrop/8269868#gistcomment-1428507
 */
let _gulpsrc = gulp.src;
gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
        .pipe(plumber({
            errorHandler: (err) => {
                notify.onError({
                    title: "Gulp Error",
                    message: "Error: <%= error.message %>",
                    sound: "pop"
                })(err);
                this.emit('end');
            }
        }));
};

/**
 * To start on a fresh clean slate, delete any auto generated files
 * Like the old build and optimised public assets if any
 */
gulp.task('clean', () => {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build', 'public']);
});

/**
 * Task to Minify and Optimise images
 */
gulp.task('imagemin', () => {
    return gulp.src(config.img.src)
        .pipe(changed(config.img.dst))
        //Alternative -> .pipe(newer(config.img.dst))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ], { verbose: true }))
        .pipe(gulp.dest(config.img.dst));
});

/**
 * Alternatively using an gulp-newer instead of gulp-changed
 * @ref https://github.com/tschaub/gulp-newer
 * A Gulp plugin for passing through only those source files that are newer than corresponding destination files.
 * Using newer with 1:1 source:dest mappings. 
 * The default task(default-ex0) in the example-0 below sets up a watch that minifies images on changes. 
 * Piping the source files to newer before imagemin ensures that only those images that have 
 * changed are minified. The newer plugin is configured with the directory path for minified images.
 */
//================================================================================================
// Minify any new images
gulp.task('images-newer', () => {
    // Add the newer pipe to pass through newer images only
    return gulp.src(config.img.src)
        .pipe(newer(config.img.dst)) //Testing alternative to changed()
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ], { verbose: true }))
        .pipe(gulp.dest(config.img.dst));
});
gulp.task('watch-img', ['images-newer'], () => {
    //Watch the image directory and optimise any new images
    gulp.watch(config.img.src, ['images-newer']);
});

/**
 * Using newer with many:1 source:dest mappings
 * Plugins like gulp-concat take many source files and generate a single destination file. 
 * In this case, the newer stream will pass through all source files if any one of them 
 * is newer than the destination file. The newer plugin is configured with the destination file path.
 */
//================================================================================================
// Example task: Process the JS and return a stream, Concatenate all if any are newer
gulp.task('js-newer', () => {
    return gulp.src(config.js.src)
        .pipe(sourcemaps.init())
        .pipe(newer(config.js.outputDir))
        .pipe(concat(config.js.outputFile))
        .pipe(sourcemaps.write(config.js.mapDir))
        .pipe(gulp.dest(config.js.outputDir));
});

/**
 * Make a global reuseable Browserify bundle, Extract any reuable methods
 * This makes it easy to use common bundling options in different tasks 
 */
function browserifyBundle(bundler) {
    let bundleTime = duration('Browserification completed in... ');
    bundler.bundle()
        .pipe(plumber({
            errorHandler: (err) => {
                notify.onError({
                    title: "Gulp Error",
                    message: "Error: <%= error.message %>",
                    sound: "pop"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(source(config.js.outputFile))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .on("error", gutil.log)
        .pipe(sourcemaps.write(config.js.mapDir))
        .pipe(gulp.dest(config.js.outputDir))
        .pipe(bundleTime)
        .pipe(browserSync.stream());
}

/**
 * Another example of a reusable bundle
 */
function bundle(bundler) {
    let bundleTimer = duration('JavaScript bundle time');

    //Add options to add 'base' bundler added as a parameter
    bundler
        .bundle() //Start the bundle
        .on('error', mapError) //Map error reporting
        .pipe(source(config.js.src)) //Set the source name/entry point
        .pipe(buffer()) //Convert to gulp pipeline
        .pipe(sourcemaps.init({ loadMaps: true })) //Extract inline sourcemaps
        .pipe(rename(config.js.outputFile)) //Rename the output file from app.js
        .pipe(sourcemaps.write(config.js.mapDir)) //Save sourcemap to another output folder
        .pipe(gulp.dest(config.js.outputDir)) //Set the build output folder
        .pipe(notify({ message: 'Generated File: <% file.relative %>' })) //Output the file being created
        .pipe(bundleTimer) //Output time of file creation
        .pipe(browserSync.stream()); //Sync the browsers and livereload
}

/**
 * Javascript module Bundling, and Uglification, note that this uses our first bundle 
 */
gulp.task('browserify', () => {
    const bundler = browserify({
            entries: config.js.app,
            debug: true
        })
        .plugin(watchify, { ignoreWatch: ['**/node-modules/**', '**/bower_components/**'] }) //Setup watchify to watch source changes
        .transform('babelify', { presets: ["es2015", 'react'] }); //Add babel transforms

    browserifyBundle(bundler);
    bundler.on('update', () => {
        browserifyBundle(bundler);
    });
});

//Gulp concatenate vendor files to browserified bundle
gulp.task('concat-js', () => {
    let builtJs = config.js.outputDir + config.js.outputFile;
    console.log(builtJs);
    //config.js.vendor.push(builtJs) //Add browserified build
    console.log(config.js.vendor);
    return gulp.src(config.js.vendor)
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(newer(config.js.minBuildDir)) // Only rewrite if newer
        .pipe(concat(config.js.allMinJs))
        .pipe(sourcemaps.write(config.js.mapDir))
        .pipe(gulp.dest(config.js.minBuildDir))
        .pipe(browserSync.stream()); //Sync the browsers and livereload;
});

/*!
 * @ref: http://stackoverflow.com/questions/22824546/how-to-run-gulp-tasks-sequentially-one-after-the-other
 * @reformat(): https://www.npmjs.com/package/run-sequence
 * This is intended to be a temporary solution until the release of gulp 4.0, 
 * which has support for defining task dependencies in series or in parallel. 
 * Be aware that this solution is a hack, and may stop working with a future update to gulp.
 */
gulp.task('build-js', (done) => {
    runSequence('browserify', 'concat-js', () => {
        console.log('JS Files Built...');
        done();
    });
});

/*!
 * Note that the `build-js task` has a bug...for some reason the `concat-js` task finishes before the `browserify` even if it shouldn't
 * JS files are concatenated before browserify has completed creating the build file bundle.js. 
 * This results to no `app.js` code in the final ./public/build.min.js.
 * A quick hack is rerunning the concat-js task without cleaning the old build. That way it finds the app.js already bundled
 * NB: Created the public-js task to rerun the code, but gulp ignores repeated tasks in a single task run :-D
 * Researching on this, FIX the bug
 */
//ToDo: Fix bug in build-js task
gulp.task('public-js', (done) => {
    runSequence('build-js', () => {
        done();
        console.log('Rerun concatenation with assured built bundle.js...');
        gulp.start('concat-js')
    });
}); //Note that this is a vague hack

/**
 * Task to initialize Browsersync, for browser livereloading and sync
 */
//TODO: Update this to run after build task!
gulp.task('browser-sync', () => {
    console.log('browser-syncing');
    browserSync.init({
        server: {
            //baseDir: 'index-selfhost.html',
            baseDir: config.baseDir,
            index: config.indexUrl
        }
    });
});

/**
 * Add a watch task, to first clean, perfome a browserify bundling, image optimisation
 *  and browsersync livereloading. Ideal approch for live/remote apps
 *  This creates a dev build (./build/), requiring inline vendor scripts
 *  as they are not added to the bundle
 */
gulp.task('devbundle', (done) => {
    runSequence('clean', ['images-newer', 'browserify'], 'browser-sync', () => { done(); });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.img.src, ['watch-img']);
});

/**
 * Run `devbundle` without cleaning the build file. 
 * This saves build time especially as the optimised images are not deleted
 * Most time consuming `images-newer` will ignore the already optimised images
 */
gulp.task('devbundle-!clean', (done) => {
    runSequence(['images-newer', 'browserify'], 'browser-sync', () => { done(); });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.img.src, ['watch-img']);
});

/**
 * Add a watch task, to first clean, perfome a browserify bundling, image optimisation, scripts concatenation
 *  and browsersync livereloading. This creates a public build (./public/). The Vendor scripts are self contained
 *  Optimum for offline apps/self hosted apps.
 *  NB: `index-selfhost.html` file uses the public self contained build without inline vendor scripts
 */
gulp.task('selfhost', (done) => {
    config.baseDir = 'index-selfhost.html'; //Let Browsersync load server with this file
    runSequence('clean', ['watch-img', 'public-js'], 'browser-sync', () => {
        console.log('All Vendor Files are Built now');
        done();
    });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.js.src, ['public-js']);
});

/**
 * Rerun the `selfhost` task without first cleaning the build and public directories
 * NB: The ./public `build.min.js` doesnt capture `bundle.js` pipe this task twice.
 * ToDo: Yet to fix `concat-js` - `browserify` task sequency
 */
gulp.task('selfhost-!clean', (done) => {
    config.indexUrl = 'index-selfhost.html'; //Let Browsersync load server with this file
    runSequence(['watch-img', 'public-js'], 'browser-sync', () => {
        console.log('All Vendor Files are Built now');
        done();
    });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.js.src, ['public-js']);
});

/**
 * Run the selfhost task by default.d from `browserify`
 * Resulting into missing `app.js` logic. Quick hack is running 
 */
//ToDo: Fix the `build-js` - `concat-js` - `browserify` task sequency 
gulp.task('default', ['selfhost']);
