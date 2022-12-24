// //Event handling, under  interaction is what starts the code execution.

// let taskInput = document.getElementById("item-input"); //Add a new task.
// let addButton = document.querySelector("button"); //first button
// let incompleteTaskHolder = document.getElementById("items"); //ul of #incomplete-tasks
// // let completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
// //New task list item
// let createNewTaskElement = function (taskString) {
//   let listItem = document.createElement("li");
//   //label
//   let label = document.createElement("label"); //label
//   //input (text)
//   // let editInput = document.createElement("input"); //text
//   //button.edit
//   // let editButton = document.createElement("button"); //edit button

//   //button.delete
//   let deleteButton = document.createElement("button"); //delete button

//   label.innerText = taskString;
//   //Each elements, needs appending
//   // editInput.type = "text";
//   // editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
//   // editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";

//   //and appending.
//   listItem.appendChild(label);
//   // listItem.appendChild(editInput);
//   // listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);
//   return listItem;
// };

// let addTask = function () {
//   console.log("Add Task...");
//   //Create a new list item with the text from the #new-task:
//   let listItem = createNewTaskElement(taskInput.value);
//   //Append listItem to incompleteTaskHolder
//   incompleteTaskHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);

//   taskInput.value = "";
// };

// //Edit an existing task.

// let editTask = function () {
//   console.log("Edit Task...");
//   console.log("Change 'edit' to 'save'");

//   let listItem = this.parentNode;

//   // let editInput = listItem.querySelector("input[type=text]");
//   let label = listItem.querySelector("label");
//   let containsClass = listItem.classList.contains("editMode");
//   //If class of the parent is .editmode
//   if (containsClass) {
//     //switch to .editmode
//     //label becomes the inputs value.
//     // label.innerText = editInput.value;
//   } else {
//     // editInput.value = label.innerText;
//   }

//   //toggle .editmode on the parent.
//   listItem.classList.toggle("editMode");
// };

// //Delete task.
// let deleteTask = function () {
//   console.log("Delete Task...");
//   let listItem = this.parentNode;
//   let ul = listItem.parentNode;
//   //Remove the parent list item from the ul.
//   ul.removeChild(listItem);
// };
// //Mark task completed
// let taskCompleted = function () {
//   console.log("Complete Task...");

//   //Append the task list item to the #completed-tasks
//   let listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskIncomplete);
// };

// let taskIncomplete = function () {
//   console.log("Incomplete Task...");
//   //Mark task as incomplete.
//   //When the checkbox is unchecked
//   //Append the task list item to the #incomplete-tasks.
//   let listItem = this.parentNode;
//   incompleteTaskHolder.appendChild(listItem);
// };
// //Set the click handler to the addTask function.
// // addButton.onclick = addTask;
// addButton.addEventListener("click", addTask);

// let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
//   console.log("bind list item events");
//   //select ListItems children
//   //   let checkBox = taskListItem.querySelector("input[type=checkbox]");
//   // let editButton = taskListItem.querySelector("button.edit");
//   let deleteButton = taskListItem.querySelector("button.delete");

//   //Bind editTask to edit button.
//   // editButton.onclick = editTask;
//   //Bind deleteTask to delete button.
//   deleteButton.onclick = deleteTask;
//   //Bind taskCompleted to checkBoxEventHandler.
//   // checkBox.onchange = checkBoxEventHandler;
// };
// //for each list item
// for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
//   //bind events to list items chldren(tasksCompleted)
//   bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
// }

// let itemInput = document.querySelector("#item-input");
// let incompleteTaskHolder = document.getElementById("items"); //ul of #incomplete-tasks

// console.log(itemInput, "test item INPUT");
// let addButton = document.querySelector("button"); //first button

// const createNewTaskElement = () => {
//   let listItem = document.createElement("li");
//   let label = document.createElement("label");
//   let button = document.createElement("button");
//   label.innerText = itemInput?.value;
//   button.innerText = "Delete";
//   button.className = "delete";
//   listItem.appendChild(label);
//   listItem.appendChild(button);
//   return listItem;
// };
// const bindEvents = (listItem) => {
//   //attaches one or more event handlers for selected elements, and specifies a function to run when the event occurs.
//   let deleteButton = listItem.querySelector("button.delete");
//   deleteButton.onclick = deleteTask;
//   console.log(deleteButton);
// };
// const addTask = () => {
//   console.log("hello i am runnigng");
//   let listItem = createNewTaskElement();
//   console.log(listItem, "listItem");
//   bindEvents(listItem);
//   incompleteTaskHolder.appendChild(listItem);
//   itemInput.value = "";
// };
// addButton.addEventListener("click", addTask);
// // let deleteButton = listItem.querySelector("button.delete");
// //Delete task.
// function deleteTask() {
//   // In an event, this refers to the element that received the event.
//   let listItem = this.parentNode;
//   console.log(listItem, "listItem");
//   let ul = listItem.parentNode;
//   //Remove the parent list item from the ul.
//   ul.removeChild(listItem);
// }

// //3)Given an array that may contain duplicates, print all elements and their frequencies.
// //   Use for loop.
// const arr = [10, 20, 20, 10, 10, 20, 5, 20];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (newArr.includes(arr[i])) {
//     continue;
//   } else {
//     newArr.push(arr[i]);
//   }
//   console.log(i, "i");
//   let count = 0;
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   console.log(`${arr[i]} ${count}`);
// }
let itemInput = document.querySelector("#item-input");
let listOfItems = document.getElementById("items");
console.log(itemInput, "input");
let button = document.querySelector("button");
console.log(button, "button");
// create element
const createElement = () => {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  let editButton = document.createElement("button"); //edit button
  editButton.innerText = "Edit";
  editButton.className = "edit";
  let deleteButton = document.createElement("button"); //delete button
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = itemInput.value;
  // append child label
  listItem.appendChild(label);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};
// function handleDelete() {
//   // In an event, this refers to the element that received the event.
//   let listItem = this.parentNode;
//   let unorderedParentNode = listItem.parentNode;
//   unorderedParentNode.removeChild(listItem);
//   console.log(parentNode, "parent");
// }
// function handleEdit() {
//   let listItem = this.parentNode;
//   label = listItem.querySelector("label");
//   button.innerText = "Update";
//   itemInput.value = label.textContent;
//   let unorderedParentNode = listItem.parentNode;
//   unorderedParentNode.removeChild(listItem);
// }
// const handleEvents = (listItem) => {
//   console.log(listItem, "listItem");
//   deleteButton = listItem.querySelector(".delete");
//   editButton = listItem.querySelector(".edit");
//   // deleteButton.onclick = handleDelete;
//   // editButton.onclick = handleEdit;

//   console.log(deleteButton, "delete button");
// };

function handleDelete() {
  console.log(this, "i am running");
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
  console.log(listItem, "listItem in delete");
}
function handleEdit() {
  console.log(this, "this");
  let listItem = this.parentNode;
  let label = listItem.querySelector("label");
  itemInput.value = label.textContent;
  button.innerText = "Update";
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
  console.log(label, "label");
  console.log(listItem, "listItem");
}
const handleEvents = (listItem) => {
  console.log(listItem, "listItem in function");
  deleteButton = listItem.querySelector(".delete");
  deleteButton.onclick = handleDelete;
  editButton = listItem.querySelector(".edit");
  editButton.onclick = handleEdit;
  console.log(deleteButton, "deleteButton");
};
// function to be called
const addItem = () => {
  console.log(itemInput.value === "", "tester");
  console.log("i am clicked");
  let listItem = createElement();
  itemInput.value !== ""
    ? listOfItems.appendChild(listItem)
    : alert("Please add item");
  console.log("listItem", listItem);
  handleEvents(listItem);
  itemInput.value = "";
  button.innerText = "Add";
};

// Syntax for fetch
// The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that return the data in JSON or XML. The fetch() method requires one parameter, the
//  URL to request, and returns a promise.
// fetch("url") //api for the get request
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const button1 = document.querySelector("button");
const divWithQuote = document.getElementById("insertQuoteHere");
console.log(divWithQuote, "divWithQuote");
const getPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => (divWithQuote.innerText = data.title));
};
button1.addEventListener("click", getPost);
// first add event listener

// const getUsers = () =>
//   new Promise((resolve, reject) => {
//     if (!users) {
//       reject(new Error("Users not found"));
//     }
//     resolve(Object.values(users));
//   });

// // usage (1)
// getUsers()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // usage (2)
// const doGetUsers = async () => {
//   try {
//     const result = await getUsers();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
//
