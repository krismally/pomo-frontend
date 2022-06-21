import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ToDoForm from "./ToDoForm";

const ListToDo = (props) => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // The following code allows us to make sure that inputs are not blank and full of spaces../^\s*$/.test(todo.text)  see below
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos =[todo, ...todos]

        setTodos(newTodos)

    }

    return (
        <div className="listToDo">
            <h1>To Do <Link to="/lists/done"><span>Done</span></Link></h1>
            <ToDoForm onSubmit={addTodo} />
        </div>

    );
}

export default ListToDo;