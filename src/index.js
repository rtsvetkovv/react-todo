import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./App";
import { getTodos } from "./redux/actions/todo";

store.dispatch(getTodos());

ReactDOM.render(
  //Компонент Provider является проводником данных через контекст
  // Это делается для того, чтобы не пускать данные по коду,
  // а держать их централизованно и всегда иметь к ним доступ
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
