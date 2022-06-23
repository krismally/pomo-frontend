import React, { useState } from "react";
// import ToDoForm from './ToDoForm';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ToDoForm from "./ToDoForm";

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState(null);

  const submitUpdate = (value) => {
    updateTodo(edit._id, value);
    setEdit(null);
  };

  if (edit) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    //class 'todo-row' will display the strike through appearance.
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo._id} onClick={() => completeTodo(todo._id, todo)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => {
            console.log("delete");
            removeTodo(todo._id);
          }}
          className="delete-icon"
        />
        <TiEdit onClick={() => setEdit(todo)} className="edit-icon" />
      </div>
    </div>
  ));
};

export default ToDo;
