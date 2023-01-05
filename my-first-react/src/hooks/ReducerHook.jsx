import { useReducer, useState } from "react";
import Component1 from "./Component1";

const initialState = { count: 0 };
const reducer = (state, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState("test");

  console.log(state, "state");
  const handleIncrement = () => {
    setUser("Shreya");
    // dispatch increment action
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch decrement action
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    // dispatch decrement action
    dispatch({ type: "reset" });
  };
  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <Component1 user={user} />
    </>
  );
};
export default ReducerHook;
