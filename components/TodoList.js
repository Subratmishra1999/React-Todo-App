import React from "react";
import TodoItem from "./TodoItem";
import "./styles/TodoList.css";

const TodoList = (props) => {
  const {
    todos = [],
    type = "",
    changeTodoState = () => {},
    deleteTodo = () => {},
  } = props || {};

  const Item = (item) => {
    if (item.type === type)
      return (
        <TodoItem
          item={item}
          changeTodoState={changeTodoState}
          key={item.id}
          deleteTodo={deleteTodo}
        />
      );
    return;
  };
  return (
    <div id="todoList">
      <h3 id="todoHeader">{type.toUpperCase()}</h3>
      {todos.map(Item)}
    </div>
  );
};
export default TodoList;
