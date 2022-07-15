import React, { useState } from "react";
import "./styles/AddTodo.css";

const AddTodo = (props) => {
  const { onAddTodo = () => {} } = props;
  const [inputValue, setInputValue] = useState("");
  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const setTodo = () => {
    const value = inputValue.trim();
    value ? onAddTodo(value) : alert("Please Enter Todo");
    setInputValue("");
  };

  return (
    <div id="inputContainer">
      <input
        type="text"
        id="inputBox"
        placeholder="Enter Todo Here"
        value={inputValue}
        onChange={onChangeValue}
      />
      <button type="submit" id="addTodo" onClick={setTodo}>
        AddTodo
      </button>
    </div>
  );
};
export default AddTodo;
