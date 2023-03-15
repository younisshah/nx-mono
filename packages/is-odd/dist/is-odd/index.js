"use strict";
exports.__esModule = true;
exports.isOdd = void 0;
var is_even_1 = require("../is-even");
console.log('odd calc');
var isOdd = function (num) { return !(0, is_even_1.isEven)(num); };
exports.isOdd = isOdd;
console.log(is_even_1.FOOBAR);
