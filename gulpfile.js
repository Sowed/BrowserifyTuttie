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
    indexUrl: { //Load start URL file for Browser-Sync server
        default: 'index.html', //Loads an inline cdn vendor scripts, example
        offline: 'index-selfhost.html' //Loads an all in one build.min.js with vendor scripts, example
    },
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
            './app/js/vendor/bootstrap.min.js',
            './build/js/bundle.js'
        ],
        allMinJs: 'build.min.js', //Name of minified build with vendor js
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
 * Like the bundled js and optimised images if any
 */
gulp.task('clean', () => {
    return del(['build']);
});

/**
 * Task to Minify and Optimise images. Alternatively using an gulp-newer instead of gulp-changed
 * @ref https://github.com/tschaub/gulp-newer
 * A Gulp plugin for passing through only those source files that are newer than corresponding destination files.
 * Using newer with 1:1 source:dest mappings. Piping the source files to newer before imagemin ensures 
 * that only those images that have changed are minified. 
 * The newer plugin is configured with the directory path for minified images.
 */
//================================================================================================
gulp.task('imagemin', () => {
    return gulp.src(config.img.src)
        .pipe(newer(config.img.dst))        
        //Alternative: .pipe(changed(config.img.dst))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ], { verbose: true }))
        .pipe(gulp.dest(config.img.dst));
});
gulp.task('watch-img', ['imagemin'], () => {
    //Watch the image directory and optimise any new images
    gulp.watch(config.img.src, ['imagemin']);
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
 * Javascript module Bundling, and Uglification, note that this uses our first bundle `browserifyBundle()`
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

/**
 * Javascript module Bundling, and Uglification, "Non moduler browserify task"
 * @note: This is an exact equivalent `browserify` task. 
 * It fixes the bug caused when extracting the bundler into a seperate function breaks the bundling,
 * as it does not return the bundler output bundle.js for next concatenation task
 * ToDo: Figure out how to extract the bundle as per `browserify` task and still return the bundler for the next task
 */
gulp.task('bundle-js', () => {
    let bundleTimer = duration('JavaScript bundle time');
    return browserify({
            entries: config.js.app,
            debug: true
        })
        .plugin(watchify, { ignoreWatch: ['**/node-modules/**', '**/bower_components/**'] }) //Setup watchify to watch source changes
        .transform('babelify', { presets: ["es2015", 'react'] }) //Add babel transforms
        .bundle()
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
        .on('error', mapError) //Map error reporting
        //.on("error", gutil.log) //Verbose alternative error handing
        .pipe(source(config.js.outputFile))
        .pipe(buffer()) //Convert to gulp pipeline
        .pipe(sourcemaps.init({ loadMaps: true })) //Extract inline sourcemaps
        .pipe(uglify())
        //.pipe(rename(config.js.outputFile)) //Rename the output file from app.js, Irrelevant as source() renamed it
        .pipe(sourcemaps.write(config.js.mapDir)) //Save sourcemap to another output folder
        .pipe(gulp.dest(config.js.outputDir)) //Set the build output folder
        //.pipe(notify({ message: 'Generated File: <% file.relative %>' })) //Remove, file.relative not working
        .pipe(bundleTimer); //Output time of file creation
    //.pipe(browserSync.stream()); //Sync the browsers and livereload. 
    //Removed as it makes page reload prematurely before build.min.js
});

//Gulp concatenate vendor files to browserified bundle into a build vile
gulp.task('concat-js', () => { //Removed dependence on bundle-js
    let builtJs = config.js.outputDir + config.js.outputFile;
    console.log(builtJs);
    //config.js.vendor.push(builtJs) //Add browserified build
    return gulp.src(config.js.vendor)
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(changed('./build/js/build.min.js')) //muted as perfomance change was insiginifincant
        .pipe(concat(config.js.allMinJs))
        .pipe(sourcemaps.write(config.js.mapDir))
        .pipe(gulp.dest(config.js.outputDir))
        .pipe(browserSync.stream()); //Sync the browsers and livereload
});

/*!
 * @ref: http://stackoverflow.com/questions/22824546/how-to-run-gulp-tasks-sequentially-one-after-the-other
 * @reformat(): https://www.npmjs.com/package/run-sequence
 * This is intended to be a temporary solution until the release of gulp 4.0, 
 * which has support for defining task dependencies in series or in parallel. 
 * Be aware that this solution is a hack, and may stop working with a future update to gulp.
 * @note: similar to `gulp.task('concat-js', ['bundle.js']);` that replaces `build-js` task with `concat-js` alone.
 * Though that approach creates tight coupling of `concat-js` task to `bundle-js task`
 */
gulp.task('build-js', (done) => {
    runSequence('bundle-js', 'concat-js', () => {
        console.log('JS Files Built...');
        done();
    });
});

gulp.task('browser-sync', () => {
    console.log('browser-syncing');
    browserSync.init({
        server: {
            baseDir: config.baseDir,
            index: config.indexUrl.default
        }
    });
});

/**
 * Perfome a browserify bundling, image optimisation and browsersync livereloading. 
 * Ideal approch for live/remote apps. This creates a dev bundle `bundle.js` in a build dir, 
 * requiring inline vendor scripts as they are not added to the bundle
 */
gulp.task('vendorfree', (done) => {
    runSequence(['watch-img', 'browserify'], 'browser-sync', () => { done(); });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.img.src, ['watch-img']);
});

/**
 * Run `devbundle` without cleaning the build file. 
 * This saves build time especially as the optimised images are not deleted
 * Most time consuming `imagemin` task will ignore the already optimised images that were not deleted
 */
gulp.task('devbundle-!clean', ['vendorfree'], (done) => {
    console.log('Vendor scrpits not added, use vendor scripts in view file');
    done();
});
/* Run `vendorfree` task after cleaning the entire build. Much faster*/
gulp.task('devbundle', (done) => {
    runSequence('clean', 'vendorfree', () => {
        console.log('A clean build. Vendor scrpits not added, use vendor scripts in view file');
        done();
    });
});

/**
 * Perfome a browserify bundling, image optimisation, scripts concatenation and browsersync livereloading. 
 * This creates an all `build.min.js` script. The Vendor scripts are self contained
 * Optimum for offline apps/self hosted apps.
 * NB: `index-selfhost.html` file uses `build.min.js` script without inline vendor scripts
 */
gulp.task('hosted', (done) => {
    config.indexUrl.default = config.indexUrl.offline //Browsersync server at 'index-selfhost.html'
    runSequence(['watch-img', 'build-js'], 'browser-sync', () => { done() });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch(config.js.src, ['build-js']);
});

/** Run `hosted` task without first cleaning the build dir */
gulp.task('selfhost-!clean', ['hosted'], (done) => {
    console.log('Self hosting without cleaning the build dir');
    done();
});
/** First clean the build dir and then run the `hosted` task watch task */
gulp.task('selfhost', (done) => {
    runSequence('clean', 'hosted', () => {
        console.log('Self hosting with a clean build');
        done();
    });
});

/**
 * Run the `selfhost` as the task default
 */
gulp.task('default', ['selfhost']);
