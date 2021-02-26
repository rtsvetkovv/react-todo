import React from 'react';

import Stats from './Stats';

const Header = ({ todos = [] }) => {
  return (
    <header>
      <Stats todos={todos} />
      <h1>Redux Todo</h1>
    </header>
  );
};

export default Header;
