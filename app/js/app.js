/*!
 * Main module. Uses the `ramda` package as an example to be used with browserify
 */

"use strict";
let R = require('ramda'),
    square = function square(x) {
        return x * x;
    },
    squares = R.chain(square, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
document.getElementById('response').innerHTML = squares;
