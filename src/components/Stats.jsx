import React from "react";

const Stats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const uncompleted = total - completed;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <th>Всего задач:</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th>Выполнено:</th>
          <td>{completed}</td>
        </tr>
        <tr>
          <th>Осталось:</th>
          <td>{uncompleted}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
