import React from "react";
import { useContext } from "react";
import { UserContext } from "./hooks/ContextHook";

const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>{`Hello ${user}!`}</h2>
    </div>
  );
};

export default Component3;
