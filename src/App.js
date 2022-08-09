import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>
        <TodoList />
      </h1>
      <input />
      <button>Add</button>
      <button>Clear</button>
    </div>
  );
}

export default App;
