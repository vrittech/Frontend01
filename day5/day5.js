let test = 10; //single line comment
// declaring variables
// global scope
var a = 1;
var a = 10;
//variables defined with let cannot be redeclare
// let b = 3;
let b = 2;
b = 3;
//variables defined with const cannot be reassign value and cannot be redeclare
const PI = 13.4;
// const c = 10;
// Pop up message in box
alert(a + b);
// let a = 10;
let name = "shreya";
// console the output
console.log("hello I am test");
//operators
let a = 10;
// power
let c = a ** b;
// divide
let d = a / b;
// double equals is used to check the value only
console.log(a == b);
// triple equals is used to check the value and datatype
console.log(a === b);

// logical operators
let isLoggedIn = true;
let isSuperUser = true;
// logical AND
let checkLogin = isLoggedIn && isSuperUser;
// logical OR
let check = false || true;
// Not
let test1 = !true;

// typeof to find the data type
// alert(typeof b);

// If else condition
if (10 > 12) {
  alert(typeof b);
} else {
  alert("test");
}
// array declaration
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array, "array");
// object declaration
let object1 = { name: "shreya", age: 24 };
// accessing the values from objects
console.log(object1.name, "object1");
console.log(object1["age"], "object1");
