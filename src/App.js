import { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const localVal = localStorage.getItem("TODOLIST");
    setTodoList(JSON.parse(localVal));
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

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

  const clearComplete = () => {
    const tmpToDo = [...todoList];
    const unCompeteTodo = tmpToDo.filter((todo) => !todo.complete);
    setTodoList(unCompeteTodo);
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList todoList={todoList} toggleComplete={toggleComplete} />
      <br />
      <input ref={inputRef} />
      <br /> <br />
      <button onClick={handleAdd}>AddTodo</button> <tt />
      <button onClick={clearComplete}>Clear</button>
      <p>{todoList.filter((todo) => !todo.complete).length} Left Items</p>
    </div>
  );
}

export default App;
