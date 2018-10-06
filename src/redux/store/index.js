import { createStore } from "redux";

import reducer from "../reducers";
import state from "./state";

// стора принимает в себя reduser (который в зависимости от action
// возвращает новое, изменённое состояние) и список задач todos, который она будет хранить
const store = createStore(reducer, state);

export default store;
