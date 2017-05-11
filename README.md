# BrowserifyTuttie

Just another sample nimbler **browserify** and **npm scripts** setup with examples. It uses npm scripts to build a live reloading server with *Beefy* image optimisation with *imagemin-cli*, scripts minification, and sourcempas extraction with mapstraction.

## Getting Started

This is an npm project. To play with it, git clone it to your desired directory and run ```npm install``` to install all the project dependencies.
Note that: 
* The [master](https://github.com/Sowed/BrowserifyTuttie/tree/918d5dea3f202721f5671de5c6cbf7de021a41a2) branch has examples of browserify usage with both npm scripts in [package.json](https://github.com/Sowed/BrowserifyTuttie/blob/918d5dea3f202721f5671de5c6cbf7de021a41a2/package.json) and gulp tasks in [gulpfile.js](https://github.com/Sowed/BrowserifyTuttie/blob/918d5dea3f202721f5671de5c6cbf7de021a41a2/gulpfile.js).
* If you are only interested in using browserify with just npm scripts, then welcome home since you are on the very branch. Checkpout the [package.json](package.json) file which lists the scripts and their dev dependecies
* The [gulp-tasks](https://github.com/Sowed/BrowserifyTuttie/tree/41313cad031aa99998b45332c77b66a326a36d88) branch has examples that only showcase usage of gulp tasks with browserify


## npm scripts
You can create your custom script to perform command line utils. Add a new entry within the script object of package.json and call them with `npm run scriptname`. They are placed in the [scripts](https://github.com/Sowed/BrowserifyTuttie/blob/6c70c63b436eb961ca3dd0cf633afba4c79ea1da/package.json#L18) object of [package.json](package.json).

Examples:

```
npm run setup
```

This script basically runs an `npm install`, to install the project and dev dependencies, and calls another script `clean` that deletes build directory if present and creates a new one, and another `imagemin` that minifies and optimizes images and copies them to the build directory.

`clean` calls the `rm:build` script that uses [rimraf](https://www.npmjs.com/package/rimraf) to perform a cross platform delete CLI operation on the build directory. 

`clean:js` is a variation of clean that only deletes the js directory in the build with `rm:js`. This saves time in tasks using it, as the already minified images that take time to recreate with `imagemin` are not deleted. 

The `imagemin` script uses [imagemin-cli](https://www.npmjs.com/package/imagemin-cli) which is a CLI utility that wraps around [imagemin](https://www.npmjs.com/package/imagemin) and allows us to minify the images within the npm script as imagemin does with gulp tasks.

```
npm run bundle
```

Uses browserify to bundle the `app.js` file with all the `require`d module dependencies into a single file. To extract source maps from the generated   `bundle.js`, it uses the browserify [mapstraction](https://www.npmjs.com/package/mapstraction) plugin

`npm run build` 
This build task is much similar to the bundle task. In fact it's identical to it, except that on finishing the bundling, it uses [watchify](https://www.npmjs.com/package/watchify) to stay actively watching for changes in the background and rebuilding the bundle.

`npm run build:min` builds a minified bundle. It uses [minifyify](https://www.npmjs.com/package/minifyify) to uglify the bundle and extract out the source maps to a named output directory.

`npm run clean:watch` makes sure that the build and all the code watching starts on a clean slate.

```
npm run serve
```

This launches a the project from the index file using [beefy](https://www.npmjs.com/package/beefy). Options supplied instruct beefy to launch the server from the specified app.js scripts on port 8000, open in the default browser and stay live to continue watching and reloading on changes made. 

```
npm start
```

This is equivalent to `npm run start`. Npm has some predefined run script pointers like start, stop and test which when defined within the scripts object in package.json, you dont need to provide the run command to execute the.
* Note that this script just calls the `bundle` then the `serve` scripts
* The `test` script is not implemented, but just a placeholder message.

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
