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
let a: any = 10
let b: number = a
// unkown type
// havlsiz usul 
let c: unknown = 20

let e: number = <number>c 
let f: number = c as number 
///////////////////////////

// union types // tipg
let h: number | string = 10
h = "string"
////////////////////

// literal types /
// bu typelarga qiymatlar beriladi shu kabi
let size : "sm" | "md" | "lg" | "xl"

size = "sm" 
size = "md" 
size = "lg" 
size = "xl" 

// type aliases 
// bu ham literal kabi ishlaydi literaldan optimallroq
type Sizes = "SM" | "MD" | "LG" | boolean

let s2: Sizes = false

type OBJ = {name: string, age?: number}

let obj: OBJ = {name: "Aziz"}
// in operatori parametrni bor yoqlikka tekshiradi
if("age" in obj) {
  console.log("Mavjud");
  
} else {
  console.log("Mavjud emas");
  
}
 // ? so'roq belgisi orqali uni majburiylikdan olib tashalasa bo'ladi keyin undefined qabul qiladi