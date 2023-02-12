import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
