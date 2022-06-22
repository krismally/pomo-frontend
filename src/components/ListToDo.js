import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ToDoForm from "./ToDoForm";
import ToDo from './ToDo';

const ListToDo = (props) => {
    const [todos, setTodos] = useState([]);

    
    // Create
    const addTodo = todo => {
        // The following code allows us to make sure that inputs are not blank and full of spaces../^\s*$/.test(todo.text)  see below
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos =[todo, ...todos]

        setTodos(newTodos)
    };
    // Update
    const updateTodo =(todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id ===todoId ? newValue : item))
        );
    };
    // Delete
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };
    // Display
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    };


    return (
        <div className="listToDo">
            <h1>To Do <Link to="/lists/done"><span>Done</span></Link></h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo    
             todos={todos}
             completeTodo={completeTodo}
             removeTodo={removeTodo}
             updateTodo={updateTodo}
            />
        </div>

    );
}

export default ListToDo;