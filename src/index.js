import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reduser from "./redux/reducers";

import todos from "./todos";
import App from "./App";

// стора принимает в себя reduser (который в зависимости от action
// возвращает новое, изменённое состояние) и список задач todos, который она будет хранить
const store = createStore(reduser, todos);

ReactDOM.render(
  //Компонент Provider является проводником данных через контекст
  // Это делается для того, чтобы не пускать данные по коду,
  // а держать их централизованно и всегда иметь к ним доступ
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
