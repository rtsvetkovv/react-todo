import React from 'react';

const Checkbox = ({ onChange, checked }) => {
  return (
    <button className="checkbox icon" onClick={onChange}>
      <i className="material-icons">
        {checked ? 'check_box' : 'check_box_outline_blank'}
      </i>
    </button>
  );
};

export default Checkbox;
