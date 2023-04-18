import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  setList,
  list,
  isEditing,
  setIsEditing,
  input,
  setInput,
  id,
  setId,
}) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {list.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            setList={setList}
            list={list}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            input={input}
            id={id}
            setId={setId}
            setInput={setInput}
          />
        );
      })}
      <button
        type="btn"
        className="btn btn-block btn-danger fw-bold text-capitalize mt-5"
        onClick={() => {
          setList([]);
        }}
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;
