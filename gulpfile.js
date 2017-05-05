/**
 * A nimbler Gulp, Browserify, Babelify, Watchify and React build process
 * @type {gulp automation}
 * @reference http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/
 * @reference  https://scotch.io/tutorials/getting-started-with-browserify#setting-up-with-gulp
 */

'use strict';

const babelify = require('babelify'), //Converts ES6 & JSX to ES5
    browserify = require('browserify'), //Provides `require` ssuport and `CommonJs`
    buffer = require('vinyl-buffer'), //Adds Vinyl stream buffering support
    chalk = require('chalk'), //Allows for color logging
    duration = require('gulp-duration'), //Adds a time aspect to a gulp process
    gulp = require('gulp'), //The basuc gulp package
    gutil = require('gulp-util'), //Provides gulp utilities like logging and beep
    //livereload = require('gulp-livereload'), //Live reload support for the browser
    merge = require('utils-merge'), //Object merge tool
    notify = require('gulp-notify'), //Provides notification to both console and Growel
    rename = require('gulp-rename'), //Renames source files
    source = require('vinyl-source-stream'), //Adds Vinyl stream support
    sourcemaps = require('gulp-sourcemaps'), //Provides external sourcemap files
    watchify = require('watchify'); //Watches and rebuilds source changes

//A Gulp congiguration
let config = {
    js: {
        src: './js/app.js', //App Entry point
        watch: './js/**/*', //Watch all Javascript Files
        outputDir: './build/', //Directory to save bundles
        mapDir: './maps/', //Sub Dir to save sourcemaps to
        outputFile: 'bundle.js' //Name of built file
    }
};

//Error Reporting Function
function mapError(err) {
    if (err.fileName) {
        //Regular error
        gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', '')) + ': ' + 'Line ' + chalk.magenta(err.lineNumber) + '& ' + 'Column ' + chalk.magenta(err.columnNumber || err.column) + ': ' + chalk.blue(err.description));
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
        //.pipe(livereload()); //Reload the view in the browser
}

/**
 * A sample default gulp task for the build 
 */
gulp.task('default', () => {
    //livereload.listen({ host: 'localhost', port: 8800, start : true}); //Start the livereload server
    let args = merge(watchify.args, { debug: true }); //Merge in defualt watchify args with browserify args

    let bundler = browserify(config.js.src, args) //Browserify
        .plugin(watchify, { ignoreWatch: ['**/node-modules/**', '**/bower_components/**'] }) //Setup watchify to watch source changes
        .transform(babelify, { presets: ['es2015', 'react'] }); //Add babel transforms

    bundle(bundler); //Run the bundle the first time (Required for watchify to exec)

    bundler.on('update', function() {
        bundle(bundler); //Rerun bundle on source updates
    });

    //livereload.listen(); //Start the livereload server
    //console.log(livereload.server);
});

/**
 * Just another simple build task example
 */
gulp.task('build', () => {
    let bundler = browserify(config.js.src) //Pass browserify entry point
        .transform(babelify, { presets: ['es2015', 'react'] });

    bundle(bundler); //Can chanin other options, eg sourcemaps, rename, uglify, watchify, livereload, etc
});
