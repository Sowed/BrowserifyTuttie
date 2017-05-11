# BrowserifyTuttie

Just another sample nimbler **Browserify** and **Gulp** task setup with examples. It can use npm scripts or gulp tasks to build a live reloading server with *Beefy* or *Browsersync*, image optimisation with *Imagemin*, scripts uglification, contacting with source maps and task sequencing.

## Getting Started

This is an npm project. To play with it, git clone it to your desired directory and run ```npm install``` to install all the project dependencies.
Note that: 
* This master branch has examples of browserify usage with both npm scripts in [package.json](package.json) and gulp tasks in [gulpfile.js](gulpfile.js).
* The [npm-scripts](https://github.com/Sowed/BrowserifyTuttie/tree/41313cad031aa99998b45332c77b66a326a36d88) branch has examples that only showcase usage of npm scripts with browserify
* If you are only interested in using browserify with just gulp tasks, then welcome home since you are on the very branch. Checkpout the [gulpfile.js](gulpfile.js) file which lists the scripts and their dev dependecies

## gulp tasks
Npm scripts are very useful for automating development, tests, and production tasks but with the complexity of the build process the tasks can easily get out of hand. Enter Gulp tasks, much more like npm scripts on steroids. Within the [gulpfile.js](gulpfile.js) are tasks that accomplish fucntionlity that the above npm scripts addressed. Since this file is a javascript file, it allows room for more task manipulation login unlike the limiting JSON bottleneck with npm scripts.
Gulp tasks are run by `gulp taskname` and if the task is not found within the gulpfile, gulp will throw an error.
* Example 1
Task defined in the gulpfile.js by...
```js
gulp.task("first-task", () => {
    return "Perfome this task..."
});
```
And executed in the CLI by...
```
gulp first-task
```

* Example 2
Execute firsttask before another task
```js
gulp.task("anothertask", ["first-task"], (done) => {
    return "Perfome some other logic here..."
});
```
And executed in the CLI by...
```
gulp anothertask
```

* Example 3
These tasks run in sequence, one after the other. Check out the [run-sequence](https://www.npmjs.com/package/run-sequence) utility
```js
gulp.task('selfhost', (done) => {
    runSequence('clean', 'hosted', () => {
        console.log('Self hosting with a clean build');
        done();
    });
});
```
And executed in the CLI by...
```
gulp selfhost
```

### List of the gulp tasks
---
* [clean](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L97)
* [imagemin](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L110)
* [watch-img](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L122)
* [browserify](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L158)
* [bundle-js](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L179)
* [concat-js](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L214)
* [build-js](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L237)
* [browser-sync](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L244)
* [vendorfree](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L259)
* [devbundle-!clean](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L270)
* [devbundle](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L275)
* [hosted](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L288)
* [selfhost-!clean](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L296)
* [selfhost](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L301)
* [default](https://github.com/Sowed/BrowserifyTuttie/blob/9a16c8e18af63805358f4326fb0d4355f39933db/gulpfile.js#L311)

>NOTE
* Since the gulpfile.js supports inline comments, the tasks have been briefly annotated to explain the simple logic.
* The `default` task is the one that gets called when you run `gulp` without specifying any other args

## Notes
The [.npm-timeline](.npm-timeline) is just a side notebook documentation npm commands that were used along to give you a general idea of the installation of the npm scripts along the way.
Reference has been made to some good reads in the comment section of some tasks

### Prerequisites
This project assumes you have installed nodejs on your machine and added node_modules to the system environments variables

### ToDos
* Add tests say with [mocha](https://www.npmjs.com/package/mocha)
* Test foe env viriables when building eg PROD or DEV eg remove source maps on production
* Fix Uglify failure on *app.js* script

## License
This project is licensed under the MIT License
