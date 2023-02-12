import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          removeTodo={props.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
