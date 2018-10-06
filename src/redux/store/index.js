import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";

import reducer from "../reducers";

/**
 * <Старый код, который мы заменили на middleWare>
 */

// const addPromiseThunkSupport = store => {
//   const dispatch = store.dispatch;
//   return action => {
//     if (typeof action.then === "function") {
//       return action.then(dispatch);
//     } else if (typeof action === "function") {
//       return action(dispatch);
//     }
//     return dispatch(action);
//   };
// };
/**
 * </Старый код, который мы заменили на middleWare>
 */

// стора принимает в себя reduser (который в зависимости от action
// возвращает новое, изменённое состояние) и список задач todos, который она будет хранить
const store = createStore(reducer, applyMiddleware(promise, thunk));

// store.dispatch = addPromiseThunkSupport(store);

export default store;
