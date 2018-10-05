import React from "react";
import { string, func } from "prop-types";

import FilterLink from "./FilterLink";

const Filter = ({ activeFilter, onSetFilter }) => {
  return (
    <div className="todo-filter">
      <FilterLink
        icon="list"
        active={activeFilter === "ALL"}
        onClick={() => onSetFilter("ALL")}
      />

      <FilterLink
        icon="check_box"
        active={activeFilter === "COMPLETED"}
        onClick={() => onSetFilter("COMPLETED")}
      />

      <FilterLink
        icon="check_box_outline_blank"
        active={activeFilter === "UNCOMPLETED"}
        onClick={() => onSetFilter("UNCOMPLETED")}
      />
    </div>
  );
};

Filter.propTypes = {
  activeFilter: string.isRequired,
  onSetFilter: func.isRequired
};

export default Filter;
