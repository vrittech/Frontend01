// // for in loop through the  properties of an object
// // for (variable in iterable) statement;

// // for of loops through the values of an iterable object
// // const arrayOfFoods =
// //   { name: "Pizza", cost: 120 },
// //   { name: "Pizza", cost: 120 },
// //   { name: "Pizza", cost: 120 },
// //   { name: "Pasta", cost: 500 },
// // ];
// // for (let a of arrayOfFoods) {
// //   console.log(a, "test a");
// // }
// // example of asynchronous
// // setTimeout(myFunction, 2000);
// // function myFunction() {
// //   console.log("hello i am test");
// // }
console.log("hello");
// try catch syntax
// try {
// 	Block of code to try
//   }
//   catch(err) {
// 	Block of code to handle errors
//   }
// let x = 1;
// try {
//   if (x === 0) {
//     console.log("i am test");
//   } else {
//     throw "error in test";
//   }
//   console.log("hello i am try");
// } catch (error) {
//   console.log(error, "");
// }

// let promise = new Promise(function (resolve, reject) {
//   // code execution (May take some time)
//   resolve(); // when successful
//   reject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// promise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );
// let x = 1;
// let promise = new Promise((resolve, reject) => {
//   if (x === 0) {
//     resolve("hello i am resolved");
//   } else {
//     reject("Error");
//   }
// });
// console.log(promise, "promise ");
// promise.then(
//   (value) => {
//     console.log(value, "value");
//   },
//   (error) => {
//     console.log(error, "error");
//   }
// );

// const data1 = [
//   { food: { name: "pizza", id: 2 }, qty: 1 },
//   { food: { name: "momo", id: 3 }, qty: 5 },
//   { food: { name: "pizza", id: 2 }, qty: 9 },
// ];
// [{ name: "pizza", qty: 10 }];
// const reducedData1 = (arr) => {
//   const filteredArr = arr.filter((obj) => {
// 	function(){
// 	}
//     return obj.food.id === 2;
//   });
//   //two array
//   console.log(filteredArr, "filteredArr");
//   const qty = filteredArr.reduce((acc, obj) => {
//     return acc + obj.qty;
//   }, 0);
//   console.log(filteredArr[0], "filteredArr");
//   console.log(qty, "qty");
//   const newData = [filteredArr[0]].map((currentValue) => {
//     console.log(currentValue, "currentValue");
//     return { name: currentValue.food.name, qty: qty };
//     // arr
//     // acc.push({ name: obj.food.name, qty: qty });
//     // return acc;
//   }, []);
//   return newData;
// };
// console.log(reducedData1(data1), "test data array");

// // function(){

// // }
// // function(){

// // }
// let header = document.querySelector("#header");
// header.innerHTML = "<p>Hello I am Header</p>";
// header.style.color = "blue";
// header.style.fontSize = "100px";
// console.log(header, "header");

// createElement
// let button = document.createElement("button");
// button.innerText = "Click Me";

// // appendChild
// document.body.appendChild(button);
// console.log(button, "button");
// let demo = document.querySelector(".demo");
// let button = document.createElement("button"); //edit button
// document.body.appendChild(button);
// button.innerText = "Delete";

// const div = document.createElement("div");
// div.innerHTML = "<p>Hello</p>";
// document.body.appendChild(div);

// // Create an "li" node:
// const node = document.createElement("li");
// // Create a text node:
// const textnode = document.createTextNode("Water");
// // Append the text node to the "li" node:
// node.appendChild(textnode);
// // Append the "li" node to the list:

// let list = document.getElementById("myFood");
// // console.log(list.firstElementChild, "first child");
// console.log(list.parentNode, "parent node");
// console.log(list.childNodes, "child nodes");

// const node = document.createElement("li");
// const textNode = document.createTextNode("Water");
// document.getElementById("myFood").appendChild("node");

// const list = document.getElementById("myFood");
// get firstElementChild
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.parentNode);
// console.log(document.body.childNodes);

// child nodes
// const element = document.getElementById("myDIV");
// let numb = element.childNodes;
// console.log(numb, "numb");

// let button = document.querySelector("#demo");
// // button.style.backgroundColor = "blue";
// console.log(button.tagName, "button");
// button.title = "element";

// Syntax;
//addEventListener(event, function);
// event listener
// let button = document.querySelector("button");
// console.log(button, "button");
// let pTag = document.querySelector("p");
// console.log(pTag, "pTag");
// button.addEventListener("click", () => {
//   console.log("I am clicked");
// });

// function testClick() {
//   console.log("i am clicked from test");
// }

// function hello() {
//   console.log("i am clciked from in ");
// }
// document.getElementById("demo").addEventListener("click", displayHello);
// function displayHello() {
//   alert("hello");
//   document.getElementById("demo").innerHTML = Date();
// }
// let button = document.querySelector("#button-id");
// let pTag = document.querySelector("p");

// console.log(button, "button");
// button.addEventListener("click", () => {
//   alert("hello");
//   pTag.innerHTML = "Hello i am event ";
// });
// document.getElementById("myP2").addEventListener("click", function() {
// 	alert("You clicked the white element!");
//   }, true);

//   document.getElementById("myDiv2").addEventListener("click", function() {
// 	alert("You clicked the orange element!");
//   }, true);

// arrow function
// let button = document.querySelector("button");
// console.log(button, "button");
// console.log(this, "this is ");
// button.addEventListener("click", (event) => {
//   console.log(this, "hello event");
// });
// const hello = () => {};
// const hello = () => {};
// const shop = {
//   name: "shreya",
//   clicked: function () {
//     console.log(this, "this is event");
//     button.addEventListener(
//       "click",
//       (clicked1 = (event) => {
//         console.log(this, "hello event");
//       })
//     );
//   },
// };

// shop.clicked();
// default params
// function add(num1, num2 = 10) {
//   return num1 + num2;
// }
// add(5, 2); //returns 7
// add(3); //returns 13 as num2 has default value = 10

// template strings
// let myName = "John";
// let myRole = "Software Developer";

// let test = `${myName}

// djjdhfjhdj
// `;
// console.log(test, "test");
// console.log(`I am 10 + 10  and I am a ${myRole}.`);

// destructuring
// array des
// let array = ["Shreya", "Software Developer"];
// const [myName, myRole] = array;
// console.log(myName, "myName");

// // object destructuring
// let object = { name: "Sanjay", lastName: "tamang" };
// const { lastName } = object;
// console.log(lastName, "test name");

// spread and rest
// allows us to quickly copy all or part of an existing array or object into another array or object
// function sum(...args) {
//   console.log(args, "args");
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };
// const updateMyVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };
// console.log(myVehicle === updateMyVehicle, "tester");
// // let copyVariable = { ...myVehicle, ...updateMyVehicle };
// let vehichles = { ...updateMyVehicle };
// console.log(vehichles, "vehichles");
// vehichles.testKey = "hello";
// console.log(vehichles, "vehichles");
// console.log(updateMyVehicle, "updateMyVehicle");

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
// console.log(myUpdatedVehicle, "myUpdatedVehicle");
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined, "numbersCombined");

// const numbers = [15, 13, 100, 20];
// const testNumber = numbers;
// const clonedNumbers = [...numbers];
// clonedNumbers.push(24);
// testNumber.push(23);
// console.log(clonedNumbers); // [15, 13, 100, 20, 24]
// console.log(numbers); // [15, 13, 100, 20]

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
