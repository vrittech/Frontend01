import React from "react";

const ListDisplay = ({ data, value }) => {
  console.log(data, "data");
  return (
    <>
      <li>{data}</li>
    </>
  );
};

export default ListDisplay;
