"use strict";
let R = require('ramda')
let square = function square(x) {
        return x * x;
    },
    squares = R.chain(square, [1, 2, 3, 4, 5]);
documents.getElementById('response').innerHTML = squares;
