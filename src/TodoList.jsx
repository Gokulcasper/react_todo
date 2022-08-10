import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, toggleComplete }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}
