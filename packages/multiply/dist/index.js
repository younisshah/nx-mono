"use strict";
exports.__esModule = true;
exports.triple = exports.double = exports.multiply = void 0;
var multiply = function (num, multiplier) {
    if (multiplier === void 0) { multiplier = 1; }
    console.log("Multiplying ".concat(num, " * ").concat(multiplier));
    return num * multiplier;
};
exports.multiply = multiply;
var TWO = 2;
var THREE = 3;
var double = function (num) {
    console.log("Doubling=".concat(num));
    return num * TWO;
};
exports.double = double;
var triple = function (num) {
    console.log("Tripling=".concat(num));
    return num * THREE;
};
exports.triple = triple;
