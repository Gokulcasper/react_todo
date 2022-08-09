import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    const val = inputRef.current.value;
    const tmpTodo = [...todoList].push(val);
    setTodoList(tmpTodo);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList todoList={todoList} />
      <br />
      <input ref={inputRef} />
      <br /> <br />
      <button onClick={handleAdd}>AddTodo</button> <tt />
      <button>Clear</button>
      <p>Left Items</p>
    </div>
  );
}

export default App;
