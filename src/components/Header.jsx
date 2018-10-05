import React from "react";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ todos }) => {
  // todos: state в mapStateToProps
  return (
    <header>
      <Stats todos={todos} />
      <h1>Redux Todo</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
