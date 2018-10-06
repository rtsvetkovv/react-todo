import { combineReducers } from "redux";
import todos, * as fromTodo from "./todo";
import filter from "./filter";

//
// ==========================================
// const reducer = (state = {}, action) => {
//   return {
//     todos: todoReducer(state.todos, action),
//     filter: filterReducer(state.filter, action)
//   };
// };
// ==========================================
// import filterReducer from "./filter";
// import todoReducer from "./todo";

// const reducer = combineReducers({
//   todos: todoReducer,
//   filter: filterReducer
// });
// ==========================================

// Принимает объект, в котором нужно сопоставить свойства объекта состояния
// с соответсвующей функцией reducer
const reducer = combineReducers({
  todos, //так можно указывать, когда значения совпадают с названием свойств
  filter
});

export default reducer;

export const getFilteredTodos = state => {
  return fromTodo.getFilteredTodos(state.todos, state.filter);
};
