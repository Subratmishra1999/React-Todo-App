import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => {
    const value = [...todos];
    value.push({ value: todo, type: "pending", id: Date.now() });
    setTodos(value);
  };

  const changeTodoState = ({ id = "", type = "", value = "" }) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    newTodos.push({ value, type, id });
    setTodos(newTodos);
  };

  const deleteTodo = ({ id = "", type = "", value = "" }) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodos = todos.filter((todo) => todo.type === "done");
  const normalTodos = todos.filter((todo) => todo.type === "pending");
  const inProgressTodos = todos.filter((todo) => todo.type === "in-progress");

  return (
    <div className="App">
      <header className="header">TODO APP</header>
      <AddTodo onAddTodo={onAddTodo} />
      <div id="todoContainer">
        {normalTodos.length > 0 && (
          <TodoList
            todos={normalTodos}
            type="pending"
            changeTodoState={changeTodoState}
            deleteTodo={deleteTodo}
          />
        )}
        {inProgressTodos.length > 0 && (
          <TodoList
            todos={inProgressTodos}
            type="in-progress"
            changeTodoState={changeTodoState}
            deleteTodo={deleteTodo}
          />
        )}
        {doneTodos.length > 0 && (
          <TodoList
            todos={doneTodos}
            type="done"
            changeTodoState={changeTodoState}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
