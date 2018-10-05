import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

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

Stats.propTypes = {
  todos: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      completed: bool.isRequired
    })
  ).isRequired
};

export default Stats;
