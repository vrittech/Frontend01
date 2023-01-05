import React from "react";
import TodoTask from "./TodoTask";

const TodoList = ({ tasks, onChangeTask, onDeleteTask }) => {
  console.log(tasks, "tasks");
  return (
    <div>
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoTask
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
