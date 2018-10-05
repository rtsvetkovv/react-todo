import React from "react";
import { array } from "prop-types";

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

Header.propTypes = {
  todos: array.isRequired
};

export default Header;
