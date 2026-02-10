//2.1 Hello, world!
console.log("Hello, world!"); // консольға шығару

//2.2 Code structure

// ; — оператордың соңы
// {} — блок
// // — комментарий

console.log("Line 1");
console.log("Line 2");

//2.3 Modern mode: "use strict"
"use strict"; // қатаң режим, қателерді ерте табады

//2.4 Variables
let age = 18;        // өзгеретін айнымалы
const name = "Dinara"; // өзгермейтін
var oldWay = true;  // ескі тәсіл (қолданбаған дұрыс)

//2.5 Data types
let num = 10;              // number
let str = "hello";         // string
let bool = true;           // boolean
let nothing = null;        // null
let undef;                 // undefined
let obj = {};              // object

//2.6 Interaction

// alert("Сәлем");
// prompt("Атың кім?");
// confirm("Сен дайынсың ба?");

//2.7 Type conversions
let a = "5";
console.log(Number(a)); // 5
console.log(String(10)); // "10"
console.log(Boolean(0)); // false

//2.8 Basic operators
console.log(5 + 2);
console.log(5 ** 2); // дәрежелеу
console.log(7 % 2);  // қалдық

// 2.9 Comparisons
console.log(5 == "5");   // true
console.log(5 === "5");  // false (ҚАТАҢ)
console.log(10 > 3);     // true

// 2.10 if, ?
let score = 85;
if (score >= 60) {
  console.log("Passed");
} else {
  console.log("Failed");
}
let result = score >= 60 ? "OK" : "NO";

// 2.11 Logical operators
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true);         // NOT

// 2.12 Nullish coalescing ??
let username = null;
console.log(username ?? "Guest"); // Guest

// 2.13 Loops
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let x = 0;
while (x < 2) {
  console.log(x);
  x++;
}

// 2.14 switch
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Other day");
}

// 2.15 Functions
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

// 2.16 Function expressions
const greet = function () {
  console.log("Hi!");
};
greet();

// 2.17 Arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 4));

// 2.18 JavaScript specials

// dynamic typing
let z = 5;
z = "now string";

// 3.1 Debugging
console.log("Debug info");

// 3.2 Coding style

// clear names, indentation
let userAge = 20;

// 3.3 Comments
// single-line
/*
 multi-line
*/

// 4.1 Objects
let user = {
  name: "Dinara",
  age: 18
};

// 4.2 Object references
let ref = user;
ref.age = 19; // user.age те өзгереді

// 4.3 Garbage collection
// қажетсіз object автоматты өшіріледі

// 4.4 Object methods, this
let person = {
  name: "A",
  sayHi() {
    console.log(this.name);
  }
};
person.sayHi();

// 4.5 Constructor, new
function Person(name) {
  this.name = name;
}
let p1 = new Person("Dina");

// 4.6 Optional chaining ?.
console.log(person?.address?.city); // error болмайды

// 4.7 Symbol
let id = Symbol("id");

// 4.8 Object to primitive
console.log(String(user));

// 5.1 Methods of primitives
console.log("hello".toUpperCase());

// 5.2 Numbers
console.log(Math.round(4.6));

// 5.3 Strings
let text = "JS";
console.log(text.length);

// 5.4 Arrays
let arr = [1, 2, 3];
arr.push(4);

// 5.5 Array methods
arr.map(n => n * 2);

// 5.6 Iterables
for (let value of arr) {
  console.log(value);
}

// 5.7 Map and Set
let map = new Map();
map.set("a", 1);

let set = new Set([1, 2, 2, 3]);

// 5.8 WeakMap, WeakSet
// garbage collection-мен бірге жойылады

// 5.9 Object.keys / values / entries
console.log(Object.keys(user));

//5.10 Destructuring
let { name: userName, age: userAge2 } = user;

// 5.11 Date and time
let now = new Date();
console.log(now);

// 5.12 JSON
let json = JSON.stringify(user);
let obj2 = JSON.parse(json);
