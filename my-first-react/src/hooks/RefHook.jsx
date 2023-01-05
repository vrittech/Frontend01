import React from "react";
import { useState, useRef } from "react";

const RefHook = () => {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef();
  console.log(inputElement, "inputElement");
  //   const [count1, setCount] = useState("");
  const countRef = useRef(0);
  console.log(countRef, "countRef");
  const handleCountIncrement = () => {
    countRef.current = countRef.current + 1;
    inputElement.current.focus();
    // alert(`you clicked ${countRef.current} times`);
  };
  // useEffect(() => {
  //   countRef.current = countRef.current + 1;
  // });
  return (
    <>
      <input
        type="text"
        ref={inputElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCountIncrement}>Click</button>
    </>
  );
};

export default RefHook;
