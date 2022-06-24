import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { Box, ButtonGroup, Grid, Paper, Button } from "@mui/material";

// hookup backend attempt
const ListToDo = (props) => {
  const [todos, setTodos] = useState([]);

  // const url = "http://localhost:4000/pomodoro/newTask";
  const url = "https://pomodorokcj.herokuapp.com/pomodoro/newTask";

  const getTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
    console.log(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Create
  const addTodo = async (todo) => {
    // The following code allows us to make sure that inputs are not blank and full of spaces../^\s*$/.test(todo.text)  see below
    if (!todo.text.trim()) {
      return;
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  // Update
  const updateTodo = async (todoId, updatedTodo) => {
    if (!updatedTodo.text.trim()) {
      return;
    }
        await fetch(`${url}/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
    setTodos((prev) =>
      prev.map((item) => (item._id === todoId ? updatedTodo : item))
    );
  };
  // Delete
  const removeTodo = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
      },
    });
    const removeArr = [...todos].filter((todo) => todo._id !== id);

    setTodos(removeArr);
  };

  // Display
  const completeTodo  = async(id, completedTodo) => {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...completedTodo, isComplete : !completedTodo.isComplete}),
    });
    let updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="listToDo">
      <ButtonGroup variant="contained">
      <Button component={RouterLink} to="/lists/" >
        To Do
      </Button>
        <Button component={RouterLink} to="/lists/done" >
          Done
        </Button>
      
      </ButtonGroup>
      <ToDoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ListToDo;
