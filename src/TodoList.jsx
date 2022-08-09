import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
