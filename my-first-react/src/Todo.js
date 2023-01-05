// import React, { useState } from "react";

// export default const TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit(event) {
//     event.preventDefault();
//     setTodos([...todos, inputValue]);
//     setInputValue("");
//   }

//   const handleEdit = (index) => {
//     const newTodos = [...todos];
//     setInputValue(newTodos);
//     console.log(newTodos[index], "newTodos[index]");
//     newTodos[index] = prompt("Enter new todo:", todos[index]);
//     setTodos(newTodos);
//   };

//   const handleDelete(index) {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={inputValue}
//           onChange={(event) => setInputValue(event.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={todo}>
//             S.N:{index + 1}
//             {todo}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = () => {
    // if (edit) {
    //   // const newTodos = [...todos];
    //   // newTodos[editIndex] = inputValue;
    //   setTodos((newTodos) => {
    //     newTodos[editIndex] = inputValue;
    //     return newTodos;
    //   });
    //   setEdit(false);
    //   setEditIndex(-1);
    //   setInputValue("");
    // } else {
    // setTodos([...todos, inputValue]);

    // Yes, you can update the state directly using the previous state in React. However, it is generally not recommended to mutate the state directly, as this can lead
    //  to bugs and unexpected behavior
    //  in your application.
    // Instead, it is recommended to create a new copy of the state and update it using the spread operator or the Object.assign() function.
    //  This way, the React framework can detect the change and update the real DOM as needed.
    // Here's an example of how you could update the state without mutating it directly:
    setTodos((prevValue) => {
      console.log(prevValue, "prev value");
      // let arr = [...prevValue];
      // arr.push(inputValue);
      // return arr;
      let arrValue = [...prevValue];
      arrValue.push(inputValue);
      return arrValue;
    });
    setInputValue("");
    // }
  };
  // console.log(todos, "todos");
  const handleEdit = (index) => {
    console.log(index, "index");
    // setEditIndex(index);
    setInputValue(todos[index]);
    setEdit(true);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos, "tet");
    setTodos(newTodos);
  };
  console.log(todos, "todos");
  // console.log(Array.isArray(todos), "todos");
  //   let months = ["January", "February", "Monday", "Tuesday"];
  //   let days = months.splice(2, 1);

  //   console.log(days); // ["Monday"]

  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input value={inputValue} onChange={handleInputValue} />
      <button type="button" onClick={handleSubmit}>
        {edit ? "Update" : "Add Todo"}
      </button>
      {/* </form> */}
      <ul>
        {todos.map((todo, index) => {
          console.log(todo, "todo");
          return (
            <li key={index}>
              {todo}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
