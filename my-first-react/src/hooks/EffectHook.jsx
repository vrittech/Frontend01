import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [testData, setTestData] = useState(0);
  //   1. No dependency passed:
  //   useEffect(() => {
  // 	//Runs on every render
  //   });

  //   2. An empty dependency array:
  //   useEffect(() => {
  //     //Runs only on the first render
  //   }, []);
  //   3. Props or state values:
  //   useEffect(() => {
  // 	//Runs on the first render
  // 	//And any time any dependency value changes
  //   }, [prop, state]);
  useEffect(() => {
    console.log("i am running");
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    //clean up function
    return () => {
      console.log("i am clean up function");
      clearInterval(interval);
    };
  }, [count]);
  // handle increment
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Click Me</button>
    </h1>
  );
};
export default Timer;
