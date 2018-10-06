import {
  GET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO
} from "../actions";

// Вспомогательный todo redeucers
const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;
    case EDIT_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;
    default:
      return state;
  }
};

// основной TODO reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.todos; //возвращаем полученный массив с задачами

    case ADD_TODO:
      return [...state, action.todo];

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    default:
      return state;
  }
};

export const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case "ALL":
      return state;
    case "COMPLETED":
      return state.filter(todo => todo.completed);
    case "UNCOMPLETED":
      return state.filter(todos => !todos.completed);
    default:
      return state;
  }
};

export default reducer;
