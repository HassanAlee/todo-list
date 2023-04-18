import React from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
const TodoItem = ({
  item,
  list,
  setList,
  isEditing,
  setIsEditing,
  input,
  setInput,
  setId,
}) => {
  const { title, id } = item;
  const deleteItem = (id) => {
    const tempList = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(tempList);
  };
  const editItem = (id) => {
    const tempTodo = list.find((todo) => {
      return todo.id === id;
    });
    setInput(tempTodo.title);
    setId(tempTodo.id);
    setIsEditing(true);
  };
  return (
    <li
      className="list-group-item text-capitalize d-flex
    justify-content-between my-2"
    >
      <h6>{title}</h6>
      <div className="todo-icon">
        <span
          className="mx-2 text-success"
          onClick={() => {
            editItem(id);
          }}
        >
          <MdEdit />
        </span>
        <span
          className="mx-2 text-danger"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <FaTrash />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
