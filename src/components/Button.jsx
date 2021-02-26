import React from 'react';

const Button = ({ className, onClick, icon, children, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {icon ? <i className="material-icons">{icon}</i> : children}
    </button>
  );
};

export default Button;
