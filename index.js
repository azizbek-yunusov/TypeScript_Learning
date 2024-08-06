"use strict";
// // never functions
// function someFunc(c: string): never {
//   throw new Error(c)
// }
// // xatolikga uchraganda
// // signature functions 
// let c: (x: number, y: string) => string
// c = function (a: number, b: string): string {
//   return `${b}: ${a}`
// }
// console.log(c(2, "Javob"));
// // bu funksiya oldin tip beriladi va shu tip bo'yicha javob qaytaradi
// // function overloads
// function overloadFunc(x: number, y: number): number;
// function overloadFunc(x: string, y: number): string;
// function overloadFunc(x: any, y: any): any {
//   if (typeof x === "number" && typeof y === "number") {
//     return x + y
//   } else {
//     return `${x} and ${y}`
//   }
// }
// console.log(overloadFunc(13, 18));
// // Qo'shimcha tiplar berish
/////////////////////////////////////
// Typescriptda tiplarni o'zgartirish va birlashtirish
// unkown (nomalum) type, union types, literal types, type alieses, required and optional properties, operator in
// havli usul
let a = 10;
let b = a;
// unkown type
// havlsiz usul 
let c = 20;
let e = c;
let f = c;
///////////////////////////
// union types // tipg
let h = 10;
h = "string";
////////////////////
// literal types /
// bu typelarga qiymatlar beriladi shu kabi
let size;
size = "sm";
size = "md";
size = "lg";
size = "xl";
let s2 = false;
let obj = { name: "Aziz" };
// in operatori parametrni bor yoqlikka tekshiradi
if ("age" in obj) {
    console.log("Mavjud");
}
else {
    console.log("Mavjud emas");
}
// ? so'roq belgisi orqali uni majburiylikdan olib tashalasa bo'ladi keyin undefined qabul qiladi
//# sourceMappingURL=index.js.map