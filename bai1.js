/*
JS CORE
Types & Values, Literals, typeof,
Dynamic Type Casting, Expressions,
Operators, Comparison Operators
*/

// ==========================
// 1. Types and Values
// ==========================

let num = 10;
let str = "Hello";
let bool = true;

let n = null;
let u;

let arr = [1, 2, 3];
let obj = { name: "JS" };
let func = function () {};

// ==========================
// 2. Literals
// ==========================

let intLiteral = 42;
let floatLiteral = 3.1435;
let expLiteral = 42e1;
let stringLiteral = "This is a string\n";

// ==========================
// 3. typeof operator
// ==========================

console.log(typeof "Hello World");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof null);

// ==========================
// 4. Dynamic Type Casting
// ==========================

console.log(123 == "123");
console.log(123 === "123");
console.log(typeof ("42" * 1));

// ==========================
// 5. Expressions and Operators
// ==========================

let calcX = 5;
console.log(calcX + 2);
console.log(calcX - 2);
console.log(calcX * 2);
console.log(calcX / 2);
console.log(calcX % 2);

calcX++;
++calcX;
calcX *= 2;

console.log(true && false);
console.log(true || false);
console.log(!true);

// ==========================
// 6. Comparison Operators
// ==========================

console.log(42 == "42");
console.log(42 === "42");

console.log(5 != "6");
console.log(5 !== "5");
console.log(5 > 3);
console.log(5 <= 3);

// ==========================
// 7. Truthy and Falsy Values
// ==========================

console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));

console.log(Boolean("true"));
console.log(Boolean(-1));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));

// ==========================
// Variables & Scope
// ==========================

var valueY;
console.log(valueY == null);
console.log(typeof valueY);

valueY = 10;
console.log(valueY);
console.log(typeof valueY);

{
  var scopeA = 5;
}
console.log(scopeA);

function test() {
  var b = 20;
  console.log(b);
}
test();

// ==========================
// Numbers
// ==========================

console.log(0xFF);
console.log(isNaN("Hello" * 2));
console.log(1 / 0);
console.log(0.1 + 0.2);
console.log((10 + 20) / 100);

// ==========================
// 10. Strings
// ==========================

console.log(typeof "Hello World");

let s1 = "A";
let s2 = "€";
let s3 = "\u20AC";

console.log(s1);
console.log(s2);
console.log(s3);

let ch = 'c';
console.log(typeof ch);

let str1 = "Double quotes";
let str2 = 'Single quotes';

console.log(str1);
console.log(str2);

// ==========================
// 11. Arrays
// ==========================

var planets = ["Mars", "Jupiter", "Earth"];

console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(typeof planets);
console.log(planets.length);

// ==========================
// 12. Multidimensional Arrays
// ==========================

var matrix = [
  [1, 2, 3],
  [1, 2, 3],
  [2, 3, 4]
];

for (var i = 0; i < matrix.length; i++) {
  let row = "";
  for (var j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}

// ==========================
// 13. Comments
// ==========================

/*
  Block comment example
*/

console.log("JS comments example");

// ==========================
// 14. Regular Expressions
// ==========================

var regex = /\(\d*\)/;

console.log(regex.test("(123)"));
console.log(regex.test("(abc)"));

let phone = "(0987)";
console.log(regex.test(phone));

// ==========================
// 15. Tokens & Whitespace
// ==========================

var exprX = 2 + 2 - 4 + 2;
console.log(exprX / 2);

var exprY = 2 + 2 - 4 + 2;
console.log(exprY / 2);

// ==========================
// JS-Core: Control Structures
// ==========================

var x = 5;
var y = 2;

if (x !== y) {
  y = x;
} else {
  y = 2;
}

switch (x) {
  case 8:
    y = 5;
    break;
  case 4:
    y = 3;
    break;
  default:
    y = 0;
}

// ==========================
// JS-Core: Loops
// ==========================

var loopX = 0;
while (loopX < 5) {
  loopX++;
}

loopX = 0;
do {
  loopX++;
} while (loopX < 5);

for (var i = 0, j = 100; i < 5; i++, j++) {
  console.log("i: " + i + " j: " + j);
}

var foobar = ["foo", "bar", "something"];
for (var i in foobar) {
  console.log(foobar[i]);
}

outerloop:
for (var i = 0; i < 10; i++) {
innerloop:  for (var j = 0; j < 10; j++) {
    console.log("i: " + i + " j: " + j);
    if (j > 10) break;
    if (j > 5) continue outerloop;
  }
}