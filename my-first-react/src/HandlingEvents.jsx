// Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
export default function Form() {
  function handleSubmit(e) {
    // e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
// conditional
// Then, you can render only some of them, depending on the state of your application.

// list and keys
// Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays:

// form
// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const handleSubmit = (username, password) => {
//     console.log(username, password);
//   };
//   return (
//     <div className="App">
//       <RegistrationForm onSubmit={handleSubmit} />
//     </div>
//   );
// }

// function RegistrationForm({ onSubmit }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isEnable, setEnable] = useState(true);
//   const handleKeyUp = () => {
//     if (username.length > 0 && password.length > 0) setEnable(false);
//     else setEnable(true);
//   };
//   return (
//     <div>
//       <label>User Name</label>
//       <input
//         type="text"
//         id="username-input"
//         placeholder="username"
//         value={username}
//         onKeyUp={handleKeyUp}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <br />
//       <br />
//       <label>Password</label>
//       <input
//         type="password"
//         id="password-input"
//         placeholder="Password"
//         onKeyUp={handleKeyUp}
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <br />
//       <br />
//       <button
//         type="submit"
//         id="button-input"
//         disabled={isEnable}
//         onClick={() => onSubmit(username, password)}
//       >
//         Register
//       </button>
//     </div>
//   );
// }
