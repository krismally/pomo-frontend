import React, { useState } from "react";
// import ToDoForm from './ToDoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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

  return (
    <div className="list-body">
      {todos.map((todo, index) => (
        //class 'todo-row' will display the strike through appearance.
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo._id} onClick={() => completeTodo(todo._id, todo)}>
            {todo.text}
          </div>
          <div className="icons">
            <DeleteIcon
              onClick={() => {
                console.log("delete");
                removeTodo(todo._id);
              }}
              className="delete-icon"
            />
            <EditIcon onClick={() => setEdit(todo)} className="edit-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
