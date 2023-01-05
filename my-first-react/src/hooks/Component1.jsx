import React, { memo } from "react";
// import Component2 from "../Component2";

const Component1 = ({ user }) => {
  console.log("i am running");
  return <div>Hello {user}</div>;
};
export default memo(Component1);
