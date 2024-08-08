// TypeScript - Arrays, tuples, & Enums

let a = []

 a = [12, "aziz" , true]
// 1 - usul
 let b: number[] = [1, 2, 3]
// 2 - usul
 let c: Array<number> = [5, 6] 

 // tuples

 let f: [number, string, boolean]
// type lar to'ldirrilmaguncha xatolik beradi
 f= [12, "fff", true]

 // Qayta hisoblasj - Enums

 enum Gender {
  Male,
  Female
 }

 console.log(Gender.Female, Gender.Male);

 enum Numbers {
  A,
  B =10,
  C,
 }

 console.log(Numbers.A, Numbers.B, Numbers.C);
//  0, 10,  11
enum Strins {
  A= "Hello",
  C = "Bla bla",
  D = ""
}
const enum Olim {
  A,
  B,
}

console.log(Olim.A, Olim.B);
