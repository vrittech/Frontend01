import React, { useState } from "react";
export const Fruits = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log(isAuthenticated, "isAuthenticated");
  const fruits = [
    { id: 1, name: "papaya" },
    { id: 2, name: "apple" },
    { id: 3, name: "guava" },
  ];
  const handleState = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <>
      {/* <ul>
        {fruits.map((fruit) => (
          <ListDisplay data={fruit.name} key={fruit.id} />
        ))}
      </ul> */}
      <p>{isAuthenticated ? "Hello Authenticated" : "Not Authenticated"}</p>
      <button type="button" onClick={handleState}>
        Update State
      </button>
    </>
  );
};
