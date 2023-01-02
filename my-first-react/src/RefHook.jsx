import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const RefHook = () => {
  const [inputValue, setInputValue] = useState("");
  //   const [count1, setCount] = useState("");
  const count = useRef(0);
  console.log(count, "count");
  //   useEffect(() => {
  //     console.log("i am rerendering ");
  //     // setCount((prev) => prev + 1);
  //     count.current = count.current + 1;
  //   });
  const handleCount = () => {
    count.current = count.current + 1;
  };
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCount}>Click</button>
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default RefHook;
// const inputElement = useRef();

// const focusInput = () => {
//   inputElement.current.focus();
// };

// return (
//   <>
// 	<input type="text" ref={inputElement} />
// 	<button onClick={focusInput}>Focus Input</button>
//   </>
// );

// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }
