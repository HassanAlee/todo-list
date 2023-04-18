import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
const getLocalStorage = () => {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};
const App = () => {
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              list={list}
              setList={setList}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              input={input}
              setInput={setInput}
              setId={setId}
              id={id}
            />
            <TodoList
              setList={setList}
              list={list}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              input={input}
              setInput={setInput}
              setId={setId}
              id={id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
