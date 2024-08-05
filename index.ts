// never functions
function someFunc(c: string): never {
  throw new Error(c)
}
// xatolikga uchraganda


// signature functions 
let c: (x: number, y: string) => string

c = function (a: number, b: string): string {
  return `${b}: ${a}`
}

console.log(c(2, "Javob"));

// bu funksiya oldin tip beriladi va shu tip bo'yicha javob qaytaradi

// function overloads
function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y
  } else {
    return `${x} and ${y}`
  }
}

console.log(overloadFunc(13, 18));
// Qo'shimcha tiplar berish