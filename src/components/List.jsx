import React from 'react';

import Todo from './Todo';

const List = ({ todos = [], onDelete, onToggle, onEdit }) => {
  return (
    <div>
      <section className="todo-list">
        {todos.map((todo) => (
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

export default List;
