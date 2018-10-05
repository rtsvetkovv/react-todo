import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reduser from "./redux/reducers";

import todos from "./todos";
import App from "./App";

const store = createStore(reduser, todos);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
