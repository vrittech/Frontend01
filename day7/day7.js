// Syntax
// switch (variable / expression) {
//   case value1:
//     // body of case 1
//     break;

//   case value2:
//     // body of case 2
//     break;

//   case valueN:
//     // body of case N
//     break;

//   default:
//   // body of default
// }

// let x = 0;
// let text;
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 0:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text, "text");
// program for a simple calculator
// let result;
// // take the operator input
// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// // take the operand input
// const number1 = parseInt(prompt("Enter first number: "));
// const number2 = parseInt(prompt("Enter second number: "));
// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     // template string
//     console.log(result);
//     break;
//   case "-":
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;
//   case "*":
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
//     break;
//   case "/":
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }

// empty array
// const myList = [ ];

// array of numbers
const numberArray = [2, 4, 6, 8];

// // array of strings
// const stringArray = ["eat", "work", "sleep"];

// // array with mixed data types
// const mixedArray = ["work", "code", 1, true];

// // you can store funcitons objects inside array
// const mixedArray1 = [
//   { task1: "code" },
//   [1, 2, 3],
//   function hello() {
//     console.log("hello");
//   },
// ];

// remove element
// 1)pop() last element
// 2)shift() first element

//add
// push() add last element
// unshift() add first element

// removes element from last  array
// let arr1 = [12, 15, 12];
// arr1.pop();
// console.log(arr1); //  [12, 15, 13]
// //removes first element
// let arr2 = [12, 15, 12];
// arr2.shift();
// console.log(arr2); //  [12, 15, 13]

// let dailyRoutine = [12, 15];
// dailyRoutine.push(17);
// console.log(dailyRoutine); //  [12, 15, 13]

// let dailyRoutine = ['eat', 'sleep'];

// let dailyRoutine = ["eat", "sleep", "code"];
// let dailyRoutine2 = ["eat", "sleep", "code"];

// // change the element value at 0 index
// // dailyRoutine[0] = "code";

// // sort in ascending
// console.log(dailyRoutine.sort(), "sorted array");
// // reversed array
// console.log(dailyRoutine.concat(dailyRoutine2), "concat array");

// let dailyRoutine = ["eat", "sleep"];

// // this will add the new element 'exercise' at the 3 index
// dailyRoutine[3] = "exercise";

// console.log(dailyRoutine); // ["eat", "sleep", undefined, "exercise"]

// Remove an element from an array
// let dailyRoutine = ["work", "eat", "sleep", "exercise"];

// // remove the last element
// dailyRoutine.pop();
// console.log(dailyRoutine); // ['work', 'eat', 'sleep']

// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyRoutine.pop();
// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyRoutine); // ['work', 'eat']

// remove first element in an array
// let dailyRoutine = ["work", "eat", "sleep"];

// // remove the first element
// dailyRoutine.shift();

// console.log(dailyRoutine); // ['eat', 'sleep']

// array length
// const dailyRoutine = ["eat", "sleep"];
// // this gives the total number of elements in an array
// console.log(dailyRoutine.length); // 2

// concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]

// syntax for foreach method
// array.forEach(function(currentValue, index, arr))
// let students = ["Harry", "Jack", "Sinda"];

// // using forEach
// students.forEach(myFunction);
// function myFunction(item) {
//   console.log(item);
// }

// update the array elements
// let students = ["Harry", "Jack", "Sinda"];
// // using forEach
// students.forEach(myFunction);

// function myFunction(item, index, arr) {
//   // adding strings to the array elements
//   arr[index] = "Hello " + item;
// }
// console.log(students);

// The JavaScript array map() method calls the
// specified function for every array element and returns the new array. This method doesn't change the original array.
// syntax
// const mappedValue=array.map(function(currentValue, index, arr), thisValue)
const numbers = [10, 20, 30, 40];
// [100,200,300,400]
// [5,15,25,35]
const newArr = numbers.map(multiply);
function multiply(num) {
  console.log(num, "test num");
  return num * 10;
}
console.log(newArr, "newArr");
// array of objects
let persons = [
  {
    id: 1,
    firstName: "Rita",
    lastName: "Kumar",
  },
  {
    id: 1,
    firstName: "Rita",
    lastName: "Kumari",
  },
  {
    id: 3,
    firstName: "Shyam",
    lastName: "Thapa",
  },
];
// array full name:[{fullName:"Ram Kumar"},{fullName:"shyam thapa"},...]
const updatedPersons = persons.filter(filterById);
function filterById(name) {
  return name.id === 1;
}
console.log(updatedPersons, "updatedPersons");
// filter
