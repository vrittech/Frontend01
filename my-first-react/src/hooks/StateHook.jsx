import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    // Counter state is incremented
    setCounter(counter + 1);
    setCounter((prevValue) => prevValue + 1);
  };
  const decrement = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default StateHook;
