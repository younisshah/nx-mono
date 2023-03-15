"use strict";
exports.__esModule = true;
exports.FOOBAR = exports.isEven = void 0;
var isEven = function (x) {
    console.log("num=".concat(x));
    return !(x & 1);
};
exports.isEven = isEven;
exports.FOOBAR = 42;
function printFoobar() {
    console.log(exports.FOOBAR + 1);
}
