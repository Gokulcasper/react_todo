import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const handleAdd = () => {
    const val = inputRef.current.value;
    const tmpToDo = [...todoList];
    tmpToDo.push({ id: 1, desc: val, complete: false });
    setTodoList(tmpToDo);
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
