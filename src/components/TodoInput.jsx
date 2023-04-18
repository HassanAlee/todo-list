import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
const TodoInput = ({
  setList,
  list,
  isEditing,
  setIsEditing,
  input,
  setInput,
  id,
  setId,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      if (isEditing) {
        let tempList = list.map((todo) => {
          return todo.id === id ? { ...todo, title: input } : todo;
        });
        setList(tempList);
        setId("");
        setInput("");
        setIsEditing(false);
      } else {
        const newItem = {
          id: uuid(),
          title: input,
        };
        setList([...list, newItem]);
        setInput("");
      }
    }
  };
  return (
    <>
      <div className="card card-body my-3">
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary bg-primary text-white"
              type="button"
              id="button-addon1"
            >
              <BsBookmarkPlusFill />
            </button>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn text-capitalize  btn-block btn-primary"
          >
            {isEditing ? "edit" : "add item"}
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
