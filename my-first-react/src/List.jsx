import React from "react";
import ListDisplay from "./ListDisplay";
const List = () => {
  const languages = ["Java", "Python", "Ruby"];
  let authorizedUser = true;
  return (
    <>
      {authorizedUser ? (
        <ul>
          {languages.map((language, i) => (
            <ListDisplay data={language} key={i} value={language} />
          ))}
        </ul>
      ) : (
        <>Not Authorized</>
      )}
    </>
  );
};

export default List;
