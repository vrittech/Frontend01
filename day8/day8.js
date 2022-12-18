// let arr = [4, 32, 2, 5, 800];

// for (i = 0; i < arr.length; i++) {
//   let max = arr[0];
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log("Sorted array=>", max);
//IIFE
(function () {
  console.log("Welcome to Javascript");
})();
// for in loop through the  properties of an object

// for of loops through the values of an iterable object

//loops through a block of code while a specified condition is true
// Syntax;
// while(condition expression)
// {
//     /* code to be executed
//     till the specified condition is true */
// }
const testArray = [1, 3, 5, 6];
// new array =>[1, 3, 5, 6]
let newArray = [];
let i = 0;
while (i < testArray.length) {
  newArray.push(testArray[i]);
  console.log(i, "i");
  i++;
}

//loops through a block of code while a specified condition is true
// do {
//   code block to be executed
// }
// while (condition);

// let array = ["ram", "shyam", "hari"];
// let it = 0;
// let newArray2 = [];
// do {
//   console.log(array[it], "arr");
//   newArray2.push(array[it]);
//   it++;
// } while (it < 5);

// The forEach() method calls a function for each element in an array.
// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)

// Syntax of filter
// array.filter(function(currentValue, index, arr), thisValue)

// Syntax find
// array.find(function(currentValue, index, arr),thisValue)

// syntax of map
// array.map(function(currentValue, index, arr), thisValue)

// syntax of reduce method
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const numbers = [4, 5, 6, 7, 8];
// let testedArray = numbers.reduce(getSum, 0);
// function getSum(total, num) {
//   // total = 0;
//   console.log(total, "total");
//   return total + Math.round(num);
// }
const arrayOfFoods = [
  { name: "Pizza", cost: 120 },
  { name: "Pizza", cost: 120 },
  { name: "Pizza", cost: 120 },
  { name: "Pasta", cost: 500 },
];
// func without name is anonymous function

// arrow expression
const arrayFunction = () => 2;

// arrow function
let updatedArray = arrayOfFoods.find((foods) => foods.name === "Pizza");
// function getFood(foods) {
//   return foods.name === "Pizza";
// }
console.log(updatedArray, "updatedArray");
// Scope in JS
// global scope
// var test;
// hoisting
// function hello() {
//   // local variable
//   // var function scope
//   // var helloWorld;
// }
// {
//   let helloWorld;
// }
