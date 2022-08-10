import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const handleAdd = () => {
    const val = inputRef.current.value;
    const tmpToDo = [...todoList];
    tmpToDo.push({ id: uuidv4(), desc: val, complete: false });
    setTodoList(tmpToDo);
    inputRef.current.value = "";
  };

  const toggleComplete = (id) => {
    const tmpToDo = [...todoList];
    const todoElement = tmpToDo.find((todo) => todo.id === id);
    todoElement.complete = !todoElement.complete;
    setTodoList(tmpToDo);
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList todoList={todoList} toggleComplete={toggleComplete} />
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
