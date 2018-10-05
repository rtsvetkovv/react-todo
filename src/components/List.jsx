import React from "react";
import { arrayOf, shape, number, string, bool, func } from "prop-types";

import Todo from "./Todo";

const List = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <div>
      <section className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </section>
    </div>
  );
};

List.propTypes = {
  todos: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      completed: bool.isRequired
    })
  ).isRequired,
  onDelete: func.isRequired,
  onToggle: func.isRequired,
  onEdit: func.isRequired
};

export default List;
