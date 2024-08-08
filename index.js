"use strict";
// TypeScript - Arrays, tuples, & Enums
let a = [];
a = [12, "aziz", true];
// 1 - usul
let b = [1, 2, 3];
// 2 - usul
let c = [5, 6];
// tuples
let f;
// type lar to'ldirrilmaguncha xatolik beradi
f = [12, "fff", true];
// Qayta hisoblasj - Enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female, Gender.Male);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["A"] = 0] = "A";
    Numbers[Numbers["B"] = 10] = "B";
    Numbers[Numbers["C"] = 11] = "C";
})(Numbers || (Numbers = {}));
console.log(Numbers.A, Numbers.B, Numbers.C);
//  0, 10,  11
var Strins;
(function (Strins) {
    Strins["A"] = "Hello";
    Strins["C"] = "Bla bla";
    Strins["D"] = "";
})(Strins || (Strins = {}));
console.log(0 /* Olim.A */, 1 /* Olim.B */);
//# sourceMappingURL=index.js.map