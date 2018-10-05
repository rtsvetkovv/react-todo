import React from "react";
import { string, bool, func } from "prop-types";

function FilterLink({ active, onClick, icon }) {
  return (
    <a className={active ? "is-active" : ""} onClick={onClick}>
      <i className="material-icons">{icon}</i>
    </a>
  );
}

FilterLink.propTypes = {
  icon: string.isRequired,
  active: bool.isRequired,
  onClick: func.isRequired
};

export default FilterLink;
