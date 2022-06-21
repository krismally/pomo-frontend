import React, { useState } from 'react';

const ToDoForm = () => {
const [input, setInput] = useState('');

  return (
    <div useClass="todo-form">
        <form>
            <input type="text" placeholder="Add todo" value={input} name=""/>
            <button>+</button>
        </form>
    </div>
  );
}

export default ToDoForm;