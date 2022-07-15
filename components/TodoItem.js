import React from "react";
import "./styles/TodoItem.css";

const TodoItem = (props) => {
  const {
    item: { id = "", value = "", type = "" },
    changeTodoState = () => {},
    deleteTodo = () => {},
  } = props;

  const onClick = (e) => {
    changeTodoState({ id, value, type: e.target.id });
  };

  const ondelete = () => {
    deleteTodo({ id, value, type });
  };

  return (
    <div id="todoItem">
      <div id="value">
        <p>{value}</p>
      </div>
      <div id="buttonContainer">
        {type !== "pending" && (
          <button id="pending" type="button" onClick={onClick}>
            Add To Pending
          </button>
        )}
        {type !== "in-progress" && (
          <button id="in-progress" type="button" onClick={onClick}>
            Add To In-Progress
          </button>
        )}
        {type !== "done" && (
          <button id="done" type="button" onClick={onClick}>
            Add To Done
          </button>
        )}
        <button type="button" onClick={ondelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
