"use strict";
// never functions
function someFunc(c) {
    throw new Error(c);
}
// xatolikga uchraganda
// signature functions 
let c;
c = function (a, b) {
    return `${b}: ${a}`;
};
console.log(c(2, "Javob"));
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} and ${y}`;
    }
}
console.log(overloadFunc(13, 18));
// Qo'shimcha tiplar berish
//# sourceMappingURL=index.js.map