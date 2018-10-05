import React from "react";
import { bool, func } from "prop-types";

const Checkbox = ({ onChange, checked }) => {
  return (
    <button className="checkbox icon" onClick={onChange}>
      <i className="material-icons">
        {checked ? "check_box" : "check_box_outline_blank"}
      </i>
    </button>
  );
};

Checkbox.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired
};

export default Checkbox;
