let x: number; // explicit
x = 2
x = 78220.2029
x= Infinity
// or let x = 2; implicit

console.log(x);

let y: string;
y = "é"
y = `${2}`
console.log(y);
let z: boolean;
z = true;
console.log(z);

let result = null; // non existent, type any
let result2 = undefined; // not defined, expect result2 in future

let s: number | string; // union type
s = 2;
s = "é";
console.log(s);
