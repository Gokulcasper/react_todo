import React from "react";

const Todo = ({ todo, toggleComplete }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleComplete(todo.id);
          }}
        />
        {todo.desc}
      </label>
    </div>
  );
};

export default Todo;
