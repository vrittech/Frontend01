import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName("");
          onAddTask(name);
        }}
      >
        Add
      </button>
    </>
  );
};
export default AddTask;
