import React from "react";
import { node, string, bool, func } from "prop-types";

const Button = ({ className, onClick, icon, children, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {icon ? <i className="material-icons">{icon}</i> : children}
    </button>
  );
};

Button.propTypes = {
  children: node,
  className: string,
  icon: string,
  disabled: bool,
  onClick: func
};

export default Button;
