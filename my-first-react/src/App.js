import { useState } from "react";
import "./App.css";
import ReducerHook from "./hooks/ReducerHook";
import LoginForm from "./Login";
import RegistrationForm from "./RegistrationForm";
import TodoList from "./Todo";
import TodoApp from "./todoApp";
function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="App">
      {/* {isRegistered ? (
        <LoginForm />
      ) : (
        <RegistrationForm setIsRegistered={setIsRegistered} />
      )} */}
      {/* <Timer /> */}
      {/* <RefHook /> */}
      {/* <ContextHook /> */}
      {/* <ReducerHook /> */}
      {/* <TodoApp /> */}
      <TodoList />
      {/* <ReducerHook /> */}
    </div>
  );
}

export default App;
// Meeting ID: 212 664 2141
// Passcode: 348991
