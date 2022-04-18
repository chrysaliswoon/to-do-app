import React, { useState } from "react";
import "./App.css";
import Todo from "../src/Todo";
import TodoForm from "./ToDoForm";

export default function App() {
  //? The first parameter, todos, is what you are going to name your state.
  //?The second parameter, setTodos, is what you are going to use to set the state.

  const [list, setList] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet Friend", isCompleted: false },
    { text: "Complete navbar for Project", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...list, { text }];
    setList(newTodos);
  };
  
  const completeTask = index => {
    const newTodos = [...list]
    newTodos[index].isCompleted = true
    setList(newTodos)
  }

  const removeTask = index => {
    const newTodos = [...list]
    newTodos.splice(index, 1)
    setList(newTodos)
  }

  return (
    <div className="app">
      <h1>To Do List</h1>
      <div className="todo-list">
        {list.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTask} removeTodo={removeTask}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
